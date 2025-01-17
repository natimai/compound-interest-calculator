import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Layout from './Layout';

const tooltips = {
  initialAmount: 'הסכום הראשוני שממנו תתחיל לצבור ריבית',
  monthlyDeposit: 'סכום קבוע שיופקד מדי חודש לאורך תקופת החיסכון',
  interestRate: 'התשואה השנתית הצפויה באחוזים (לדוגמה: 4 עבור 4%)',
  managementFeeDeposit: 'אחוז דמי הניהול שנגבים מכל הפקדה חדשה',
  managementFeeAccumulation: 'אחוז דמי הניהול השנתיים שנגבים מסך החיסכון',
  years: 'מספר השנים שבהן יימשך החיסכון',
  capitalGainsTax: 'הפחתת מס בשיעור 25% מהרווחים (לא מהקרן)',
  inflationRate: 'שיעור האינפלציה השנתי הצפוי באחוזים',
  monthlyWithdrawal: 'סכום משיכה חודשי קבוע (אופציונלי)'
};

const InputWithTooltip = ({ id, label, value, onChange, error, tooltip }) => (
  <div className="relative mb-4">
    <div className="flex items-center mb-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="group relative mr-2">
  <Info size={16} className="text-gray-400 hover:text-gray-600 cursor-help" />
  <div className="invisible group-hover:visible fixed sm:absolute z-10 p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg 
    w-[calc(100vw-2rem)]
    sm:w-64
    left-[1rem]
    sm:left-auto
    sm:right-0
    top-[50%]
    sm:top-6">
    {tooltip}
  </div>
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
    {error && (
      <p className="mt-1 text-sm text-red-500">{error}</p>
    )}
  </div>
);

export const Calculator = () => {
  const [formData, setFormData] = useState({
    initialAmount: '',
    monthlyDeposit: '',
    interestRate: '',
    managementFeeDeposit: '0',
    managementFeeAccumulation: '0',
    years: '',
    capitalGainsTax: false,
    inflationRate: '2',
    monthlyWithdrawal: '0',
    showAdvancedOptions: false
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const validate = (name, value) => {
    if (name === 'years' && value < 1) {
      return 'יש להזין מספר שנים חיובי';
    }
    if ((name === 'interestRate' || name.startsWith('managementFee')) && value < 0) {
      return 'יש להזין אחוז חיובי';
    }
    if ((name === 'initialAmount' || name === 'monthlyDeposit') && value < 0) {
      return 'יש להזין סכום חיובי';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? e.target.checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    const error = validate(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const calculateResults = () => {
    // בדיקת ולידציה רק לשדות החובה
    const newErrors = {};
    const requiredFields = ['initialAmount', 'monthlyDeposit', 'interestRate', 'years'];
    
    requiredFields.forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'שדה חובה';
      } else {
        const error = validate(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // המרת ערכים למספרים
    const initialAmount = parseFloat(formData.initialAmount);
    const monthlyDeposit = parseFloat(formData.monthlyDeposit);
    const monthlyWithdrawal = parseFloat(formData.monthlyWithdrawal) || 0;
    const interestRate = parseFloat(formData.interestRate) / 100;
    const inflationRate = parseFloat(formData.inflationRate) / 100;
    const managementFeeDeposit = parseFloat(formData.managementFeeDeposit) / 100 || 0;
    const managementFeeAccumulation = parseFloat(formData.managementFeeAccumulation) / 100 || 0;
    const years = parseInt(formData.years);
    
    let totalDeposit = initialAmount;
    let totalAmount = initialAmount;
    let realTotalAmount = initialAmount;
    let accumulatedFees = 0;
    let accumulatedInterest = 0;
    let monthlyIncome = 0;
    const yearlyResults = [];

    for (let year = 1; year <= years; year++) {
      const yearStartAmount = totalAmount;
      let yearlyFees = 0;
      
      for (let month = 1; month <= 12; month++) {
        const depositFee = monthlyDeposit * managementFeeDeposit;
        const accumulationFee = totalAmount * (managementFeeAccumulation / 12);
        
        yearlyFees += depositFee + accumulationFee;
        accumulatedFees += depositFee + accumulationFee;
        
        totalDeposit += monthlyDeposit;
        totalAmount += monthlyDeposit - depositFee - monthlyWithdrawal;
        totalAmount *= (1 + interestRate / 12);
        totalAmount -= accumulationFee;
        
        realTotalAmount = totalAmount / Math.pow(1 + inflationRate, year);
      }

      accumulatedInterest = totalAmount - totalDeposit + accumulatedFees;
      
      yearlyResults.push({
        year,
        totalAmount,
        realTotalAmount,
        accumulatedInterest,
        totalDeposit,
        accumulatedFees
      });
    }

    setYearlyData(yearlyResults);

    const totalCapitalGainsTax = formData.capitalGainsTax ? accumulatedInterest * 0.25 : 0;
    const finalRealAmount = totalAmount / Math.pow(1 + inflationRate, years);

    monthlyIncome = (totalAmount * (interestRate / 12)).toFixed(0);

    setResult({
      totalDeposit,
      totalInterest: accumulatedInterest,
      totalFees: accumulatedFees,
      totalCapitalGainsTax,
      finalAmount: totalAmount - totalCapitalGainsTax,
      finalRealAmount: finalRealAmount - totalCapitalGainsTax,
      monthlyIncome
    });
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "מחשבון ריבית דריבית",
            "description": "מחשבון לחישוב ריבית דריבית והצמיחה של השקעות לאורך זמן",
            "provider": {
              "@type": "Organization",
              "name": "דריבית",
              "url": "https://deribit.co.il"
            }
          })}
        </script>
      </Head>
      <div className="w-full max-w-4xl mx-auto px-0">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">מחשבון ריבית דריבית</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputWithTooltip
              id="initialAmount"
              label="סכום הפקדה ראשוני"
              value={formData.initialAmount}
              onChange={(e) => handleInputChange({ target: { name: 'initialAmount', value: e.target.value } })}
              error={errors.initialAmount}
              tooltip={tooltips.initialAmount}
            />

            <InputWithTooltip
              id="monthlyDeposit"
              label="סכום הפקדה חודשי"
              value={formData.monthlyDeposit}
              onChange={(e) => handleInputChange({ target: { name: 'monthlyDeposit', value: e.target.value } })}
              error={errors.monthlyDeposit}
              tooltip={tooltips.monthlyDeposit}
            />

            <InputWithTooltip
              id="interestRate"
              label="תשואה שנתית ממוצעת (%)"
              value={formData.interestRate}
              onChange={(e) => handleInputChange({ target: { name: 'interestRate', value: e.target.value } })}
              error={errors.interestRate}
              tooltip={tooltips.interestRate}
            />

            <InputWithTooltip
              id="years"
              label="מספר שנות השקעה"
              value={formData.years}
              onChange={(e) => handleInputChange({ target: { name: 'years', value: e.target.value } })}
              error={errors.years}
              tooltip={tooltips.years}
            />

            <InputWithTooltip
              id="managementFeeDeposit"
              label="דמי ניהול מהפקדה (%)"
              value={formData.managementFeeDeposit}
              onChange={(e) => handleInputChange({ target: { name: 'managementFeeDeposit', value: e.target.value || '0' } })}
              error={errors.managementFeeDeposit}
              tooltip={tooltips.managementFeeDeposit}
            />

            <InputWithTooltip
              id="managementFeeAccumulation"
              label="דמי ניהול מצבירה (%)"
              value={formData.managementFeeAccumulation}
              onChange={(e) => handleInputChange({ target: { name: 'managementFeeAccumulation', value: e.target.value || '0' } })}
              error={errors.managementFeeAccumulation}
              tooltip={tooltips.managementFeeAccumulation}
            />

            <div className="md:col-span-2 mt-2">
              <button
                onClick={() => setFormData(prev => ({ ...prev, showAdvancedOptions: !prev.showAdvancedOptions }))}
                className="text-gray-600 hover:text-gray-800 text-sm flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                {formData.showAdvancedOptions ? '⌃ הסתר' : '⌄ הצג'} אפשרויות מתקדמות
              </button>
            </div>

            {formData.showAdvancedOptions && (
              <>
                <InputWithTooltip
                  id="inflationRate"
                  label="שיעור אינפלציה שנתי (%)"
                  value={formData.inflationRate}
                  onChange={(e) => handleInputChange({ target: { name: 'inflationRate', value: e.target.value } })}
                  error={errors.inflationRate}
                  tooltip={tooltips.inflationRate}
                />

                <InputWithTooltip
                  id="monthlyWithdrawal"
                  label="משיכה חודשית"
                  value={formData.monthlyWithdrawal}
                  onChange={(e) => handleInputChange({ target: { name: 'monthlyWithdrawal', value: e.target.value } })}
                  error={errors.monthlyWithdrawal}
                  tooltip={tooltips.monthlyWithdrawal}
                />

                <div className="md:col-span-2">
                  <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                    <input
                      type="checkbox"
                      name="showInflationAdjusted"
                      checked={formData.showInflationAdjusted}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">הצג ערכים מותאמי אינפלציה</span>
                  </label>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 mb-6">
            <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
              <input
                type="checkbox"
                name="capitalGainsTax"
                checked={formData.capitalGainsTax}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">הפחתת מס רווחי הון (25%)</span>
            </label>
          </div>

          <button
            onClick={calculateResults}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg 
                     transition-colors duration-200 font-medium text-lg"
          >
            חשב תוצאות
          </button>
        </div>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">תוצאות החישוב</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div className="p-4 bg-gray-50 rounded-lg">
    <p className="text-sm text-gray-600">סך הפקדות</p>
    <p className="text-lg font-bold text-gray-900">
      ₪{result.totalDeposit.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
    </p>
  </div>
  
  <div className="p-4 bg-green-50 rounded-lg">
    <p className="text-sm text-gray-600">רווחי ריבית</p>
    <p className="text-lg font-bold text-green-600">
      ₪{result.totalInterest.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
    </p>
  </div>

  <div className="p-4 bg-red-50 rounded-lg">
    <p className="text-sm text-gray-600">דמי ניהול</p>
    <p className="text-lg font-bold text-red-600">
      ₪{result.totalFees.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
    </p>
  </div>

  {result.totalCapitalGainsTax > 0 && (
    <div className="p-4 bg-yellow-50 rounded-lg">
      <p className="text-sm text-gray-600">הפחתת מס רווחי הון</p>
      <p className="text-lg font-bold text-yellow-600">
        -₪{result.totalCapitalGainsTax.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
      </p>
    </div>
  )}

  <div className="p-4 bg-blue-50 rounded-lg">
    <p className="text-sm text-gray-600">סה"כ בקופה</p>
    <p className="text-lg font-bold text-blue-600">
      ₪{result.finalAmount.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
    </p>
  </div>

  {formData.showAdvancedOptions && (
    <>
      {parseFloat(formData.monthlyWithdrawal) > 0 && (
        <div className="p-4 bg-green-100 rounded-lg">
          <p className="text-sm text-gray-600">הכנסה חודשית פוטנציאלית</p>
          <p className="text-lg font-bold text-green-700">
            ₪{result.monthlyIncome.toLocaleString('he-IL')}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            *מבוסס על משיכת הרווחים החודשיים בלבד
          </p>
        </div>
      )}

      {parseFloat(formData.inflationRate) > 0 && (
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-600">סכום סופי (מותאם לאינפלציה)</p>
          <p className="text-lg font-bold text-purple-600">
            ₪{result.finalRealAmount.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
          </p>
        </div>
      )}
    </>
  )}
</div>

            {formData.showInflationAdjusted && (
              <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600">סכום סופי (מותאם לאינפלציה)</p>
                <p className="text-lg font-bold text-purple-600">
                  ₪{result.finalRealAmount.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
                </p>
              </div>
            )}

            {/* גרף התפתחות החיסכון */}
            <div className="h-64 mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={yearlyData}
                  margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis 
                    width={80}
                    tickFormatter={(value) => `₪${(value / 1000)}K`}
                    dx={-10}
                  />
                  <Tooltip formatter={(value) => `₪${value.toLocaleString('he-IL', { maximumFractionDigits: 0 })}`} />
                  <Line 
                    type="monotone" 
                    dataKey="totalAmount" 
                    stroke="#2563eb"
                    name="סכום נומינלי"
                  />
                  {formData.showAdvancedOptions && parseFloat(formData.inflationRate) > 0 && (
                    <Line 
                      type="monotone" 
                      dataKey="realTotalAmount" 
                      stroke="#7c3aed"
                      name="סכום ריאלי"
                    />
                  )}
                  <Line 
                    type="monotone" 
                    dataKey="totalDeposit" 
                    stroke="#9ca3af"
                    name="סך הפקדות"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-600">
                התוצאות מבוססות על הנחת תשואה קבועה לאורך זמן. במציאות, התשואות משתנות משנה לשנה.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold mb-2">טיפים להשקעה:</h4>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pr-4">
                  <li>השקעה לטווח ארוך מאפשרת לריבית דריבית לעבוד לטובתך</li>
                  <li>דמי ניהול נמוכים משפיעים משמעותית על התשואה הסופית</li>
                  <li>חשוב להתחשב באינפלציה בתכנון פיננסי ארוך טווח</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};