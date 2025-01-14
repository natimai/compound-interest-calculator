import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Info } from 'lucide-react';

const tooltipsContent = {
  grossSalary: {
    title: 'שכר ברוטו',
    description: 'השכר הכולל לפני ניכויים והפרשות',
    details: [
      'כולל את כל רכיבי השכר הקבועים',
      'לא כולל החזרי הוצאות ותשלומים חד פעמיים',
      'משמש כבסיס לחישוב המיסים וההפרשות'
    ],
    example: 'לדוגמה: שכר בסיס של ₪15,000 בחודש'
  },
  creditPoints: {
    title: 'נקודות זיכוי',
    description: 'הפחתה מסכום המס שחושב',
    details: [
      'כל נקודת זיכוי שווה ₪242 לחודש',
      'תושב ישראל זכאי ל-2.25 נקודות בסיס',
      'זיכויים נוספים ניתנים עבור: ילדים, שירות צבאי, תואר אקדמי ועוד'
    ],
    example: 'לדוגמה: גבר נשוי+2 = 5.25 נקודות, אישה נשואה+2 = 7.25 נקודות'
  },
  trainingFund: {
    title: 'קרן השתלמות',
    description: 'חיסכון לטווח בינוני עם הטבות מס',
    details: [
      'הפרשת עובד: 2.5% מהשכר',
      'הפרשת מעסיק: 7.5% מהשכר',
      'פטור ממס עד לתקרה של ₪15,712',
      'משיכה אפשרית אחרי 6 שנים ללא מס'
    ],
    example: 'על שכר של ₪10,000: העובד מפריש ₪250, המעסיק ₪750'
  },
  pension: {
    title: 'פנסיה',
    description: 'חיסכון פנסיוני לטווח ארוך',
    details: [
      'הפרשת עובד: 6-7% מהשכר',
      'הפרשת מעסיק: 6.5-7.5% מהשכר',
      'פיצויים: 8.33% מהשכר',
      'תקרת ההפקדה: פעמיים השכר הממוצע במשק'
    ],
    example: 'על שכר של ₪10,000 בהפרשה מינימלית: העובד ₪600, המעסיק ₪650, פיצויים ₪833'
  }
};
const EnhancedTooltip = ({ content }) => {
    const { title, description, details, example } = content;
    
    return (
      <div className="invisible group-hover:visible absolute z-50 w-[calc(100vw-2rem)] sm:w-80 p-4 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 right-0 top-full mt-1 sm:right-0 sm:top-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="mb-3 text-gray-600">{description}</p>
        
        <div className="mb-3">
          <h4 className="font-semibold mb-1 text-gray-700">פרטים נוספים:</h4>
          <ul className="list-disc list-inside space-y-1">
            {details.map((detail, index) => (
              <li key={index} className="text-sm text-gray-600">{detail}</li>
            ))}
          </ul>
        </div>
        
        <div className="text-sm bg-gray-50 p-2 rounded">
          <span className="font-medium">דוגמה: </span>
          <span className="text-gray-600">{example}</span>
        </div>
      </div>
    );
  };
  
  const InputWithTooltip = ({ id, label, value, onChange, error, tooltipContent }) => (
    <div className="relative mb-4">
      <div className="flex items-center mb-1">
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="group relative mr-2">
          <Info size={16} className="text-gray-400 hover:text-gray-600 cursor-help" />
          <EnhancedTooltip content={tooltipContent} />
        </div>
      </div>
      <input
        id={id}
        type="number"
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
  const SelectWithTooltip = ({ label, value, onChange, options, tooltipContent }) => (
    <div className="relative mb-4">
      <label className="block mb-2 text-base font-medium text-gray-700">{label}</label>
      <div className="group relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full p-3 text-base border rounded-lg appearance-none bg-white pr-4"
        >
          {options.map(option => (
            <option key={option.value} value={option.value} className="text-base py-2">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <Info size={20} className="text-gray-400 hover:text-gray-600 cursor-help" />
        </div>
        <EnhancedTooltip content={tooltipContent} />
      </div>
    </div>
  );
export const GrossToNetCalculator = () => {
  const [grossSalary, setGrossSalary] = useState('');
  const [creditPoints, setCreditPoints] = useState(2.25);
  const [pensionOption, setPensionOption] = useState('law');
  const [trainingFund, setTrainingFund] = useState('none');
  const [results, setResults] = useState(null);
  const [adjustedResults, setAdjustedResults] = useState(null);

  const formatNumber = (number) => {
    return number.toLocaleString('he-IL', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const calculateNetSalary = () => {
    const gross = parseFloat(grossSalary) || 0;
    const creditValue = 242;
    const creditReduction = creditPoints * creditValue;

    const averageSalary = 12536;
    const maxPensionContribution = averageSalary * 2 * 0.205;
    const maxPercentage = 0.2283;

    const incomeTaxBrackets = [
      { max: 7010, rate: 0.1 },
      { max: 10060, rate: 0.14 },
      { max: 16150, rate: 0.2 },
      { max: 22440, rate: 0.31 },
      { max: 46690, rate: 0.35 },
      { max: 60130, rate: 0.47 },
      { max: Infinity, rate: 0.5 },
    ];

    let incomeTax = 0;
    let remainingSalary = gross;
    let marginalTaxRate = 0;

    for (const bracket of incomeTaxBrackets) {
      if (remainingSalary <= 0) break;
      const taxableAmount = Math.min(remainingSalary, bracket.max - (bracket.min || 0));
      incomeTax += taxableAmount * bracket.rate;
      marginalTaxRate = parseFloat((bracket.rate * 100).toFixed(2));
      remainingSalary -= taxableAmount;
    }

    incomeTax = Math.max(incomeTax - creditReduction, 0);

    const employeeSocialSecurity =
      gross <= 7100 ? gross * 0.035 : 7100 * 0.035 + (gross - 7100) * 0.12;

    const employerSocialSecurity =
      gross <= 7100 ? gross * 0.035 : 7100 * 0.035 + (gross - 7100) * 0.07;

    const healthInsurance =
      gross <= 7100 ? gross * 0.031 : 7100 * 0.031 + (gross - 7100) * 0.05;

    const cappedSalary = Math.min(gross, averageSalary * 2);
    const employeePensionRate = Math.min(0.07, maxPercentage);
    const employerPensionRate = pensionOption === 'law' ? 0.065 : 0.075;
    const severanceRate = Math.min(0.0833, maxPercentage - employeePensionRate - employerPensionRate);

    const employeePension = cappedSalary * employeePensionRate;
    const employerPension = cappedSalary * employerPensionRate;
    const severanceContribution = cappedSalary * severanceRate;

    const totalPensionContribution = employeePension + employerPension + severanceContribution;

    const excessPension =
      totalPensionContribution > maxPensionContribution
        ? totalPensionContribution - maxPensionContribution
        : 0;

    const employeeTrainingFund = trainingFund === 'yes' ? gross * 0.025 : 0;
    const employerTrainingFund = trainingFund === 'yes' ? gross * 0.075 : 0;

    const employerCosts =
      gross + employerSocialSecurity + employerPension + severanceContribution + employerTrainingFund;

    const totalDeductions =
      incomeTax + employeeSocialSecurity + healthInsurance + employeePension + employeeTrainingFund;
    const netSalary = gross - totalDeductions;

    const employerCostPercentage = ((employerCosts / gross) - 1) * 100;

    setResults({
      netSalary,
      marginalTaxRate,
      employerCosts,
      employerCostPercentage,
      deductions: {
        incomeTax,
        employeeSocialSecurity,
        healthInsurance,
        employeePension,
        employeeTrainingFund,
      },
      employerContributions: {
        employerSocialSecurity,
        employerPension,
        severanceContribution,
        employerTrainingFund,
      },
      excessPension,
    });
  };

  const adjustSalaryForTrainingFund = () => {
    if (!results) return;

    const currentEmployerCosts = results.employerCosts;

    const trainingFundEmployerRate = 0.075;
    const trainingFundEmployeeRate = 0.025;

    const averageSalary = 12536;
    const cappedSalary = Math.min(parseFloat(grossSalary), averageSalary * 2);

    const employeePensionRate = pensionOption === 'law' ? 0.06 : 0.07;
    const employerPensionRate = pensionOption === 'law' ? 0.065 : 0.075;
    const severanceRate = 0.0833;

    let adjustedGrossSalary = parseFloat(grossSalary);
    let newEmployerCosts = 0;
    let trainingFundEmployer = 0;
    let trainingFundEmployee = 0;

    while (true) {
      trainingFundEmployer = adjustedGrossSalary * trainingFundEmployerRate;
      trainingFundEmployee = adjustedGrossSalary * trainingFundEmployeeRate;

      const employeePension = Math.min(adjustedGrossSalary, cappedSalary) * employeePensionRate;
      const employerPension = Math.min(adjustedGrossSalary, cappedSalary) * employerPensionRate;
      const severanceContribution = Math.min(adjustedGrossSalary, cappedSalary) * severanceRate;

      const employerSocialSecurity =
        adjustedGrossSalary <= 7100
          ? adjustedGrossSalary * 0.035
          : 7100 * 0.035 + (adjustedGrossSalary - 7100) * 0.07;

      newEmployerCosts =
        adjustedGrossSalary +
        employerSocialSecurity +
        employerPension +
        severanceContribution +
        trainingFundEmployer;

      if (newEmployerCosts <= currentEmployerCosts) {
        break;
      }

      adjustedGrossSalary -= 10;
    }

    setAdjustedResults({
      adjustedGrossSalary: adjustedGrossSalary.toFixed(2),
      trainingFundEmployer: trainingFundEmployer.toFixed(2),
      trainingFundEmployee: trainingFundEmployee.toFixed(2),
      newEmployerCosts: newEmployerCosts.toFixed(2),
    });
  };

  
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">מחשבון שכר ברוטו לנטו</h2>
        
        <div className="space-y-6">
          <InputWithTooltip
            id="grossSalary"
            label="שכר ברוטו (₪)"
            value={grossSalary}
            onChange={(e) => setGrossSalary(e.target.value)}
            tooltipContent={tooltipsContent.grossSalary}
          />

          <InputWithTooltip
            id="creditPoints"
            label="נקודות זיכוי"
            value={creditPoints}
            onChange={(e) => setCreditPoints(parseFloat(e.target.value))}
            tooltipContent={tooltipsContent.creditPoints}
          />

          <SelectWithTooltip
            label="קרן השתלמות"
            value={trainingFund}
            onChange={(e) => setTrainingFund(e.target.value)}
            options={[
              { value: 'none', label: 'ללא' },
              { value: 'yes', label: 'כולל' }
            ]}
            tooltipContent={tooltipsContent.trainingFund}
          />

          <SelectWithTooltip
            label="פנסיה (מעסיק)"
            value={pensionOption}
            onChange={(e) => setPensionOption(e.target.value)}
            options={[
              { value: 'law', label: 'לפי חוק (6.5%)' },
              { value: 'cap', label: 'עד תקרה (7.5%)' }
            ]}
            tooltipContent={tooltipsContent.pension}
          />

          <button
            onClick={calculateNetSalary}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all"
          >
            חשב עכשיו
          </button>
        </div>
      </div>
  
      {results && (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">תוצאות החישוב</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
            <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">סך הפקדות</p>
              <p className="text-base sm:text-lg font-bold text-gray-900">
                ₪{formatNumber(results.netSalary + results.deductions.incomeTax + 
                  results.deductions.employeeSocialSecurity + results.deductions.healthInsurance + 
                  results.deductions.employeePension + results.deductions.employeeTrainingFund)}
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">שכר נטו</p>
              <p className="text-lg font-bold text-green-600">
                ₪{formatNumber(results.netSalary)}
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-600">סך ניכויים</p>
              <p className="text-lg font-bold text-red-600">
                ₪{formatNumber(results.deductions.incomeTax + results.deductions.employeeSocialSecurity + 
                  results.deductions.healthInsurance + results.deductions.employeePension + 
                  results.deductions.employeeTrainingFund)}
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">עלות מעביד</p>
              <p className="text-lg font-bold text-blue-600">
                ₪{formatNumber(results.employerCosts)}
              </p>
            </div>
          </div>

          {/* תרשים התפלגות השכר */}
          <div className="h-64 mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[{
                  name: 'התפלגות שכר',
                  'הפרשות מעסיק': results.employerContributions.employerSocialSecurity + 
                    results.employerContributions.employerPension + 
                    results.employerContributions.severanceContribution + 
                    results.employerContributions.employerTrainingFund,
                  'ניכויי חובה': results.deductions.incomeTax + 
                    results.deductions.employeeSocialSecurity + 
                    results.deductions.healthInsurance,
                  'הפרשות עובד': results.deductions.employeePension + 
                    results.deductions.employeeTrainingFund,
                  'נטו': results.netSalary
                }]}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => `₪${formatNumber(value)}`} />
                <Legend />
                <Bar dataKey="הפרשות מעסיק" stackId="a" fill="#3B82F6" />
                <Bar dataKey="ניכויי חובה" stackId="a" fill="#EF4444" />
                <Bar dataKey="הפרשות עובד" stackId="a" fill="#8B5CF6" />
                <Bar dataKey="נטו" stackId="a" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold text-red-500">ניכויי שכר (עובד):</h4>
            <ul className="list-disc list-inside ml-4">
              <li>מס הכנסה: ₪{formatNumber(results.deductions.incomeTax)}</li>
              <li>ביטוח לאומי: ₪{formatNumber(results.deductions.employeeSocialSecurity)}</li>
              <li>מס בריאות: ₪{formatNumber(results.deductions.healthInsurance)}</li>
              <li>פנסיה: ₪{formatNumber(results.deductions.employeePension)} (עד 7%)</li>
              <li>קרן השתלמות: ₪{formatNumber(results.deductions.employeeTrainingFund)}</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold text-blue-500">עלויות מעביד:</h4>
            <ul className="list-disc list-inside ml-4">
              <li>ביטוח לאומי מעסיק: ₪{formatNumber(results.employerContributions.employerSocialSecurity)}</li>
              <li>פנסיה מעסיק: ₪{formatNumber(results.employerContributions.employerPension)} ({pensionOption === 'law' ? '6.5% מעסיק' : '7.5% מעסיק'})</li>
              <li>פיצויים: ₪{formatNumber(results.employerContributions.severanceContribution)} (עד 8.33%)</li>
              <li>קרן השתלמות מעסיק: ₪{formatNumber(results.employerContributions.employerTrainingFund)}</li>
            </ul>
          </div>

          {trainingFund === 'none' && (
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2 text-center">
                הכפתור יוסיף קרן השתלמות בלי לשנות את העלות הכוללת למעסיק.
              </p>
              <button
                onClick={adjustSalaryForTrainingFund}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                דחוף קרן השתלמות
              </button>
            </div>
          )}

          {adjustedResults && (
            <div className="mt-6 bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-green-600">שכר מותאם עם קרן השתלמות:</h4>
              <p>שכר ברוטו חדש: ₪{formatNumber(adjustedResults.adjustedGrossSalary)}</p>
              <p>קרן השתלמות מעסיק: ₪{formatNumber(adjustedResults.trainingFundEmployer)}</p>
              <p>קרן השתלמות עובד: ₪{formatNumber(adjustedResults.trainingFundEmployee)}</p>
              <p>עלות מעביד חדשה: ₪{formatNumber(adjustedResults.newEmployerCosts)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};