import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { InfoIcon, PlusCircle, MinusCircle, HelpCircle } from 'lucide-react';

const MortgageCalculator = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      loanAmount: 1000000,
      interestRate: 4,
      loanTerm: 30,
      type: 'פריים',
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      paymentSchedule: [],
      isNetSalary: true
    }
  ]);
  
  const [activeTab, setActiveTab] = useState('single');
  const [showTips, setShowTips] = useState(true);
  const [hoveredTip, setHoveredTip] = useState(null);
  const [chartType, setChartType] = useState('balance'); // 'balance' או 'breakdown'

  const calculateMortgage = (route) => {
    const monthlyRate = (route.interestRate / 100) / 12;
    const numberOfPayments = route.loanTerm * 12;
    
    const monthlyPayment = (route.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - route.loanAmount;

    let balance = route.loanAmount;
    const schedule = [];
    
    for (let year = 1; year <= Math.min(route.loanTerm, 30); year++) {
      const yearlyInterest = balance * (route.interestRate / 100);
      const yearlyPrincipal = (monthlyPayment * 12) - yearlyInterest;
      balance -= yearlyPrincipal;
      
      schedule.push({
        year: year,
        remainingBalance: Math.max(0, balance),
        principalPaid: yearlyPrincipal,
        interestPaid: yearlyInterest,
        totalYearlyPayment: yearlyPrincipal + yearlyInterest
      });
    }
    
    return {
      ...route,
      monthlyPayment,
      totalPayment,
      totalInterest,
      paymentSchedule: schedule
    };
  };

  const updateRoute = (id, field, value) => {
    const newRoutes = routes.map(route => {
      if (route.id === id) {
        const updatedRoute = { ...route, [field]: value };
        return calculateMortgage(updatedRoute);
      }
      return route;
    });
    setRoutes(newRoutes);
  };

  const addRoute = () => {
    if (routes.length < 3) {
      const newRoute = {
        id: routes.length + 1,
        loanAmount: 1000000,
        interestRate: 4,
        loanTerm: 30,
        type: 'פריים',
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        paymentSchedule: []
      };
      setRoutes([...routes, calculateMortgage(newRoute)]);
    }
  };

  const removeRoute = (id) => {
    if (routes.length > 1) {
      setRoutes(routes.filter(route => route.id !== id));
    }
  };

  useEffect(() => {
    setRoutes(routes.map(route => calculateMortgage(route)));
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
  };

  const tooltips = {
    loanAmount: 'סכום ההלוואה המבוקש',
    interestRate: 'שיעור הריבית השנתית על ההלוואה',
    loanTerm: 'משך ההלוואה בשנים',
    monthlyPayment: 'התשלום החודשי הקבוע שתשלמו',
    totalPayment: 'סך כל התשלומים לאורך כל תקופת ההלוואה',
    totalInterest: 'סך כל הריבית שתשלמו על ההלוואה'
  };

  const MortgageForm = ({ route }) => (
    <div className="space-y-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            סוג מסלול
            <div className="relative">
              <HelpCircle 
                className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors" 
                onMouseEnter={() => setHoveredTip('type')}
                onMouseLeave={() => setHoveredTip(null)}
              />
              {hoveredTip === 'type' && (
                <div className="absolute z-10 top-6 right-0 w-48 p-2 text-sm bg-gray-800 text-white rounded shadow-lg animate-fade-in">
                  בחרו את סוג המסלול המתאים לכם (פריים/קבועה/משתנה)
                </div>
              )}
            </div>
          </label>
          <input
            type="text"
            value={route.type}
            onChange={(e) => updateRoute(route.id, 'type', e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            סכום ההלוואה
            <div className="relative">
              <HelpCircle 
                className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors"
                onMouseEnter={() => setHoveredTip('loanAmount')}
                onMouseLeave={() => setHoveredTip(null)}
              />
              {hoveredTip === 'loanAmount' && (
                <div className="absolute z-10 top-6 right-0 w-48 p-2 text-sm bg-gray-800 text-white rounded shadow-lg animate-fade-in">
                  {tooltips.loanAmount}
                </div>
              )}
            </div>
          </label>
          <input
            type="number"
            min="0"
            value={route.loanAmount}
            onChange={(e) => updateRoute(route.id, 'loanAmount', Number(e.target.value))}
            className="w-full p-3 border border-gray-200 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            ריבית שנתית (%)
            <div className="relative">
              <HelpCircle 
                className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors"
                onMouseEnter={() => setHoveredTip('interestRate')}
                onMouseLeave={() => setHoveredTip(null)}
              />
              {hoveredTip === 'interestRate' && (
                <div className="absolute z-10 top-6 right-0 w-48 p-2 text-sm bg-gray-800 text-white rounded shadow-lg animate-fade-in">
                  {tooltips.interestRate}
                </div>
              )}
            </div>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={route.interestRate}
            onChange={(e) => updateRoute(route.id, 'interestRate', Number(e.target.value))}
            className="w-full p-3 border border-gray-200 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            תקופה (שנים)
            <div className="relative">
              <HelpCircle 
                className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors"
                onMouseEnter={() => setHoveredTip('loanTerm')}
                onMouseLeave={() => setHoveredTip(null)}
              />
              {hoveredTip === 'loanTerm' && (
                <div className="absolute z-10 top-6 right-0 w-48 p-2 text-sm bg-gray-800 text-white rounded shadow-lg animate-fade-in">
                  {tooltips.loanTerm}
                </div>
              )}
            </div>
          </label>
          <input
            type="number"
            min="1"
            max="30"
            value={route.loanTerm}
            onChange={(e) => updateRoute(route.id, 'loanTerm', Number(e.target.value))}
            className="w-full p-3 border border-gray-200 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl transition-transform hover:scale-105">
            <div className="text-lg font-medium text-gray-600 mb-2">תשלום חודשי</div>
            <div className="text-2xl font-bold text-blue-600">{formatCurrency(route.monthlyPayment)}</div>
          </div>
          <div className="hidden group-hover:block absolute top-full mt-2 left-0 right-0 p-2 text-sm bg-gray-800 text-white rounded animate-fade-in">
            {tooltips.monthlyPayment}
          </div>
        </div>
        <div className="relative group">
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl transition-transform hover:scale-105">
            <div className="text-lg font-medium text-gray-600 mb-2">סה״כ תשלום</div>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(route.totalPayment)}</div>
          </div>
          <div className="hidden group-hover:block absolute top-full mt-2 left-0 right-0 p-2 text-sm bg-gray-800 text-white rounded animate-fade-in">
            {tooltips.totalPayment}
          </div>
        </div>
        <div className="relative group">
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl transition-transform hover:scale-105">
            <div className="text-lg font-medium text-gray-600 mb-2">סה״כ ריבית</div>
            <div className="text-2xl font-bold text-purple-600">{formatCurrency(route.totalInterest)}</div>
          </div>
          <div className="hidden group-hover:block absolute top-full mt-2 left-0 right-0 p-2 text-sm bg-gray-800 text-white rounded animate-fade-in">
            {tooltips.totalInterest}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div dir="rtl" className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {showTips && (
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-start">
            <InfoIcon className="h-6 w-6 text-blue-200 mt-1" />
            <div className="mr-4">
              <div className="font-bold text-xl mb-3">ברוכים הבאים למחשבון המשכנתא</div>
              <ul className="space-y-2 text-blue-50">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
                  השתמשו בטאב ׳השוואת מסלולים׳ כדי להשוות עד 3 מסלולי משכנתא שונים
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
                  שימו לב שריבית נמוכה יותר לא תמיד אומרת תשלום כולל נמוך יותר
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
                  הגרף מציג את התפתחות ההלוואה לאורך זמן - שימו לב לקצב הירידה של הקרן
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
                  מומלץ להתייעץ עם יועץ משכנתאות לפני קבלת החלטה סופית
                </li>
              </ul>
              <button 
                className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                onClick={() => setShowTips(false)}
              >
                הבנתי, תודה
              </button>
            </div>
          </div>
        </div>
      )}
   <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-1 bg-white p-1 rounded-xl border">
              <button
                className={`p-3 rounded-lg transition-all ${
                  activeTab === 'single' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('single')}
              >
                מסלול בודד
              </button>
              <button
                className={`p-3 rounded-lg transition-all ${
                  activeTab === 'compare' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('compare')}
              >
                השוואת מסלולים
              </button>
            </div>
          </div>

          {/* תצוגת הטופס */}
          <div className="space-y-6">
            {activeTab === 'single' ? (
              <div>
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={routes[0].isNetSalary}
                      onChange={(e) => updateRoute(routes[0].id, 'isNetSalary', e.target.checked)}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="mr-2 text-gray-700">חישוב לפי שכר נטו</span>
                  </label>
                </div>
                <MortgageForm route={routes[0]} />
              </div>
            ) : (
              routes.map((route, index) => (
                <div key={route.id} className="relative rounded-xl">
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    {routes.length > 1 && (
                      <button
                        className="p-2 rounded-full hover:bg-red-50 text-red-500 transition-colors"
                        onClick={() => removeRoute(route.id)}
                      >
                        <MinusCircle className="h-5 w-5" />
                      </button>
                    )}
                    {index === routes.length - 1 && routes.length < 3 && (
                      <button
                        className="p-2 rounded-full hover:bg-green-50 text-green-500 transition-colors"
                        onClick={addRoute}
                      >
                        <PlusCircle className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={route.isNetSalary}
                        onChange={(e) => updateRoute(route.id, 'isNetSalary', e.target.checked)}
                        className="form-checkbox h-5 w-5 text-blue-500"
                      />
                      <span className="mr-2 text-gray-700">חישוב לפי שכר נטו</span>
                    </label>
                  </div>
                  <div className="text-xl font-bold text-gray-700 mb-4">מסלול {index + 1}</div>
                  <MortgageForm route={route} />
                </div>
              ))
            )}
          </div>

          {/* אזור הגרף */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-medium text-gray-700">תצוגת נתונים</div>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-lg transition-all ${
                    chartType === 'balance' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setChartType('balance')}
                >
                  יתרת הלוואה
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-all ${
                    chartType === 'breakdown' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setChartType('breakdown')}
                >
                  פילוח תשלומים
                </button>
              </div>
            </div>

            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === 'balance' ? (
                  <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="year" 
                      label={{ value: 'שנה', position: 'bottom' }} 
                      allowDuplicatedCategory={false}
                    />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Legend />
                    {routes.map((route, index) => (
                      <Line
                        key={route.id}
                        data={route.paymentSchedule}
                        type="monotone"
                        name={`יתרת הלוואה - מסלול ${index + 1}`}
                        dataKey="remainingBalance"
                        stroke={`hsl(${index * 120}, 70%, 50%)`}
                        strokeWidth={2}
                      />
                    ))}
                  </LineChart>
                ) : (
                  <BarChart
                    data={routes[0].paymentSchedule}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Legend />
                    <Bar dataKey="principalPaid" name="תשלום קרן" fill="#3B82F6" stackId="a" />
                    <Bar dataKey="interestPaid" name="תשלום ריבית" fill="#8B5CF6" stackId="a" />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;