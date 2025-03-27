import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tooltips = {
  propertyPrice: 'מחיר הנכס הכולל',
  downPayment: 'סכום ההון העצמי שתתרמו',
  mortgageAmount: 'סכום המשכנתא',
  interestRate: 'ריבית המשכנתא השנתית',
  mortgageTerm: 'תקופת המשכנתא בשנים',
  monthlyRent: 'הכנסה חודשית משכירות',
  maintenanceCost: 'עלות תחזוקה חודשית ממוצעת',
  propertyTax: 'ארנונה חודשית',
  insurance: 'ביטוח חודשי',
  vacancyRate: 'אחוז תקופות ריקות בשנה',
  appreciationRate: 'קצב הערכה שנתי של הנכס',
  inflationRate: 'קצב אינפלציה שנתי'
};

const InputWithTooltip = ({ id, label, value, onChange, error, tooltip }) => (
  <div className="relative mb-4">
    <div className="flex items-center mb-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
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

export const RealEstateCalculator = () => {
  const [formData, setFormData] = useState({
    propertyPrice: '',
    downPayment: '',
    mortgageAmount: '',
    interestRate: '',
    mortgageTerm: '',
    monthlyRent: '',
    maintenanceCost: '0',
    propertyTax: '0',
    insurance: '0',
    vacancyRate: '5',
    appreciationRate: '3',
    inflationRate: '2'
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const validate = (name, value) => {
    if (name === 'mortgageTerm' && value < 1) {
      return 'יש להזין מספר שנים חיובי';
    }
    if ((name === 'interestRate' || name === 'appreciationRate' || name === 'inflationRate' || name === 'vacancyRate') && value < 0) {
      return 'יש להזין אחוז חיובי';
    }
    if ((name === 'propertyPrice' || name === 'downPayment' || name === 'mortgageAmount' || name === 'monthlyRent') && value < 0) {
      return 'יש להזין סכום חיובי';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    const error = validate(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const calculateResults = () => {
    // בדיקת ולידציה
    const newErrors = {};
    const requiredFields = ['propertyPrice', 'downPayment', 'mortgageAmount', 'interestRate', 'mortgageTerm', 'monthlyRent'];
    
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
    const propertyPrice = parseFloat(formData.propertyPrice);
    const downPayment = parseFloat(formData.downPayment);
    const mortgageAmount = parseFloat(formData.mortgageAmount);
    const interestRate = parseFloat(formData.interestRate) / 100;
    const mortgageTerm = parseInt(formData.mortgageTerm);
    const monthlyRent = parseFloat(formData.monthlyRent);
    const maintenanceCost = parseFloat(formData.maintenanceCost) || 0;
    const propertyTax = parseFloat(formData.propertyTax) || 0;
    const insurance = parseFloat(formData.insurance) || 0;
    const vacancyRate = parseFloat(formData.vacancyRate) / 100;
    const appreciationRate = parseFloat(formData.appreciationRate) / 100;
    const inflationRate = parseFloat(formData.inflationRate) / 100;

    // חישוב תשלום משכנתא חודשי
    const monthlyMortgagePayment = (mortgageAmount * (interestRate / 12) * Math.pow(1 + interestRate / 12, mortgageTerm * 12)) / 
      (Math.pow(1 + interestRate / 12, mortgageTerm * 12) - 1);

    // חישוב הכנסה חודשית נטו
    const monthlyIncome = monthlyRent * (1 - vacancyRate);
    const monthlyExpenses = monthlyMortgagePayment + maintenanceCost + propertyTax + insurance;
    const monthlyNetIncome = monthlyIncome - monthlyExpenses;

    // חישוב תשואה שנתית
    const annualROI = ((monthlyNetIncome * 12) / downPayment) * 100;

    // חישוב מינוף פיננסי
    const leverage = propertyPrice / downPayment;

    // חישוב נקודת איזון
    const breakEvenPoint = monthlyExpenses / (monthlyRent * (1 - vacancyRate));

    // חישוב נתונים שנתיים
    const yearlyResults = [];
    let currentValue = propertyPrice;
    let totalMortgage = mortgageAmount;
    let totalInvestment = downPayment;

    for (let year = 1; year <= mortgageTerm; year++) {
      // חישוב ערך הנכס
      currentValue *= (1 + appreciationRate);
      
      // חישוב יתרת משכנתא
      totalMortgage = (totalMortgage * (1 + interestRate)) - (monthlyMortgagePayment * 12);
      
      // חישוב השקעה מצטברת
      totalInvestment += (monthlyMortgagePayment * 12);

      yearlyResults.push({
        year,
        propertyValue: currentValue,
        mortgageBalance: Math.max(0, totalMortgage),
        totalInvestment,
        monthlyNetIncome: monthlyNetIncome * 12
      });
    }

    setYearlyData(yearlyResults);

    setResult({
      monthlyMortgagePayment,
      monthlyNetIncome,
      annualROI,
      leverage,
      breakEvenPoint,
      totalInvestment,
      finalPropertyValue: currentValue
    });
  };

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputWithTooltip
            id="propertyPrice"
            label="מחיר הנכס"
            value={formData.propertyPrice}
            onChange={handleInputChange}
            error={errors.propertyPrice}
            tooltip={tooltips.propertyPrice}
          />

          <InputWithTooltip
            id="downPayment"
            label="הון עצמי"
            value={formData.downPayment}
            onChange={handleInputChange}
            error={errors.downPayment}
            tooltip={tooltips.downPayment}
          />

          <InputWithTooltip
            id="mortgageAmount"
            label="סכום משכנתא"
            value={formData.mortgageAmount}
            onChange={handleInputChange}
            error={errors.mortgageAmount}
            tooltip={tooltips.mortgageAmount}
          />

          <InputWithTooltip
            id="interestRate"
            label="ריבית משכנתא (%)"
            value={formData.interestRate}
            onChange={handleInputChange}
            error={errors.interestRate}
            tooltip={tooltips.interestRate}
          />

          <InputWithTooltip
            id="mortgageTerm"
            label="תקופת משכנתא (שנים)"
            value={formData.mortgageTerm}
            onChange={handleInputChange}
            error={errors.mortgageTerm}
            tooltip={tooltips.mortgageTerm}
          />

          <InputWithTooltip
            id="monthlyRent"
            label="הכנסה חודשית משכירות"
            value={formData.monthlyRent}
            onChange={handleInputChange}
            error={errors.monthlyRent}
            tooltip={tooltips.monthlyRent}
          />

          <InputWithTooltip
            id="maintenanceCost"
            label="עלות תחזוקה חודשית"
            value={formData.maintenanceCost}
            onChange={handleInputChange}
            error={errors.maintenanceCost}
            tooltip={tooltips.maintenanceCost}
          />

          <InputWithTooltip
            id="propertyTax"
            label="ארנונה חודשית"
            value={formData.propertyTax}
            onChange={handleInputChange}
            error={errors.propertyTax}
            tooltip={tooltips.propertyTax}
          />

          <InputWithTooltip
            id="insurance"
            label="ביטוח חודשי"
            value={formData.insurance}
            onChange={handleInputChange}
            error={errors.insurance}
            tooltip={tooltips.insurance}
          />

          <InputWithTooltip
            id="vacancyRate"
            label="אחוז תקופות ריקות (%)"
            value={formData.vacancyRate}
            onChange={handleInputChange}
            error={errors.vacancyRate}
            tooltip={tooltips.vacancyRate}
          />

          <InputWithTooltip
            id="appreciationRate"
            label="קצב הערכה שנתי (%)"
            value={formData.appreciationRate}
            onChange={handleInputChange}
            error={errors.appreciationRate}
            tooltip={tooltips.appreciationRate}
          />

          <InputWithTooltip
            id="inflationRate"
            label="קצב אינפלציה שנתי (%)"
            value={formData.inflationRate}
            onChange={handleInputChange}
            error={errors.inflationRate}
            tooltip={tooltips.inflationRate}
          />
        </div>

        <button
          onClick={calculateResults}
          className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          חשב תוצאות
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">תוצאות החישוב</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">תשואה שנתית</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {result.annualROI.toFixed(1)}%
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">הכנסה חודשית נטו</h3>
                <p className="text-2xl font-bold text-green-600">
                  ₪{result.monthlyNetIncome.toFixed(0)}
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">מינוף פיננסי</h3>
                <p className="text-2xl font-bold text-purple-600">
                  {result.leverage.toFixed(1)}x
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">נקודת איזון</h3>
                <p className="text-2xl font-bold text-yellow-600">
                  {result.breakEvenPoint.toFixed(1)}%
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">תשלום משכנתא חודשי</h3>
                <p className="text-2xl font-bold text-red-600">
                  ₪{result.monthlyMortgagePayment.toFixed(0)}
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">ערך נכס סופי</h3>
                <p className="text-2xl font-bold text-indigo-600">
                  ₪{result.finalPropertyValue.toFixed(0)}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">התפתחות לאורך זמן</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="propertyValue" stroke="#4F46E5" name="ערך נכס" />
                    <Line type="monotone" dataKey="mortgageBalance" stroke="#EF4444" name="יתרת משכנתא" />
                    <Line type="monotone" dataKey="totalInvestment" stroke="#10B981" name="השקעה מצטברת" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 