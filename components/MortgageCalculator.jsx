import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';
import { Info, PlusCircle, MinusCircle, HelpCircle, LineChart as LineChartIcon, BarChart2, PieChart } from 'lucide-react';

const tooltips = {
  loanAmount: 'סכום ההלוואה המבוקש',
  interestRate: 'שיעור הריבית השנתית על ההלוואה',
  loanTerm: 'משך ההלוואה בשנים',
  type: 'סוג המסלול - פריים, קבועה צמודה או קבועה לא צמודה',
  monthlyPayment: 'התשלום החודשי הקבוע שתשלמו',
  totalPayment: 'סך כל התשלומים לאורך כל תקופת ההלוואה',
  totalInterest: 'סך כל הריבית שתשלמו על ההלוואה'
};

const chartTypes = {
  balance: { icon: LineChartIcon, label: 'יתרת קרן' },
  yearly: { icon: BarChart2, label: 'תשלומים שנתיים' },
  breakdown: { icon: PieChart, label: 'התפלגות כללית' }
};

const InputWithTooltip = ({ id, label, value, onChange, error, tooltip }) => (
  <div className="relative mb-4">
    <div className="flex items-center mb-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="group relative mr-2">
        <Info size={16} className="text-gray-400 hover:text-gray-600 cursor-help" />
        <div className="invisible group-hover:visible absolute z-10 w-64 p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg right-0 top-6">
          {tooltip}
        </div>
      </div>
    </div>
    <input
      id={id}
      type="number"
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all"
    />
  </div>
);

const RouteCard = ({ route, onUpdate, onRemove, isRemovable }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleChange = (field, value) => {
    onUpdate(route.id, field, value);
  };

  const routeColors = {
    'פריים': 'border-blue-500 bg-gradient-to-b from-[#eef2f3] to-[#e8f3ff]',
    'קבועה צמודה': 'border-blue-500 bg-gradient-to-b from-[#eef2f3] to-[#e8fff0]',
    'קבועה לא צמודה': 'border-blue-500 bg-gradient-to-b from-[#eef2f3] to-[#f0e8ff]'
  };

  const routeInfo = {
    'פריים': {
      description: 'מסלול עם ריבית משתנה הצמודה לריבית בנק ישראל',
      advantages: ['ריבית נמוכה יחסית בתקופות של ריבית נמוכה במשק', 'גמישות ואפשרות למחזור קל', 'מתאים לתקופות של ריבית יורדת'],
      disadvantages: ['חשיפה לשינויי ריבית', 'תשלום חודשי לא קבוע', 'סיכון בתקופות של עליית ריבית']
    },
    'קבועה צמודה': {
      description: 'מסלול עם ריבית קבועה והצמדה למדד המחירים לצרכן',
      advantages: ['ודאות בגובה הריבית', 'הגנה מפני אינפלציה', 'תכנון תקציבי ארוך טווח'],
      disadvantages: ['ריבית גבוהה יחסית', 'חשיפה לעליית מדד', 'קנסות שבירה גבוהים']
    },
    'קבועה לא צמודה': {
      description: 'מסלול עם ריבית קבועה ללא הצמדה למדד',
      advantages: ['ודאות מוחלטת בתשלום החודשי', 'אין חשיפה למדד', 'מתאים לתקופות של אינפלציה גבוהה'],
      disadvantages: ['ריבית גבוהה יחסית', 'אין הגנה מפני ירידת ריבית', 'קנסות שבירה גבוהים']
    }
  };

  return (
    <div className={`w-full rounded-xl shadow-lg p-6 mb-4 border-2 ${routeColors[route.type]}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">מסלול {route.id}</h3>
        {isRemovable && (
          <button 
            onClick={() => onRemove(route.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <MinusCircle size={20} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <InputWithTooltip
          id={`loanAmount-${route.id}`}
          label="סכום הלוואה"
          value={route.loanAmount}
          onChange={(e) => handleChange('loanAmount', e.target.value)}
          tooltip={tooltips.loanAmount}
        />

        <InputWithTooltip
          id={`interestRate-${route.id}`}
          label="ריבית שנתית (%)"
          value={route.interestRate}
          onChange={(e) => handleChange('interestRate', e.target.value)}
          tooltip={tooltips.interestRate}
        />

        <InputWithTooltip
          id={`loanTerm-${route.id}`}
          label="תקופת הלוואה (שנים)"
          value={route.loanTerm}
          onChange={(e) => handleChange('loanTerm', e.target.value)}
          tooltip={tooltips.loanTerm}
        />

        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">סוג מסלול</label>
          <div className="relative">
            <select
              value={route.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full p-2 border rounded-lg bg-white"
            >
              <option value="פריים">פריים</option>
              <option value="קבועה צמודה">קבועה צמודה</option>
              <option value="קבועה לא צמודה">קבועה לא צמודה</option>
            </select>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="absolute left-2 top-2 text-gray-500 hover:text-blue-600"
            >
              <HelpCircle size={16} />
            </button>
          </div>
          
          {showInfo && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-2">{route.type}</h4>
              <p className="text-gray-600 mb-3">{routeInfo[route.type].description}</p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-green-600 mb-1">יתרונות:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {routeInfo[route.type].advantages.map((adv, i) => (
                      <li key={i} className="text-sm text-gray-600">{adv}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-red-600 mb-1">חסרונות:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {routeInfo[route.type].disadvantages.map((dis, i) => (
                      <li key={i} className="text-sm text-gray-600">{dis}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {route.monthlyPayment > 0 && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">תשלום חודשי</p>
            <p className="text-xl font-bold text-gray-900">
              ₪{route.monthlyPayment.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
            </p>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">סך תשלומים</p>
            <p className="text-xl font-bold text-gray-900">
              ₪{route.totalPayment.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
            </p>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">סך ריבית</p>
            <p className="text-xl font-bold text-blue-600">
              ₪{route.totalInterest.toLocaleString('he-IL', { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const calculateWithAdjustments = (route) => {
  let adjustedInterestRate = route.interestRate;
  
  // התאמות לפי סוג המסלול
  switch(route.type) {
    case 'פריים':
      // מוסיפים פרמיית סיכון לפריים
      adjustedInterestRate += 0.5;
      break;
    case 'קבועה צמודה':
      // מוסיפים הערכת אינפלציה ממוצעת
      adjustedInterestRate += 2.0;
      break;
    case 'קבועה לא צמודה':
      // מוסיפים פרמיה על חוסר הצמדה
      adjustedInterestRate += 1.0;
      break;
  }
  
  return adjustedInterestRate;
};

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
      paymentSchedule: []
    }
  ]);
  
  const [chartType, setChartType] = useState('balance');

  const calculateMortgage = (route) => {
    const adjustedInterestRate = calculateWithAdjustments(route);
    const monthlyRate = (route.interestRate / 100) / 12;
    const numberOfPayments = route.loanTerm * 12;
    
    const monthlyPayment = (route.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - route.loanAmount;

    let balance = route.loanAmount;
    const schedule = [];
    
    for (let year = 1; year <= route.loanTerm; year++) {
      const yearlyPayment = monthlyPayment * 12;
      const yearlyInterest = balance * (route.interestRate / 100);
      const yearlyPrincipal = yearlyPayment - yearlyInterest;
      balance -= yearlyPrincipal;
      
      schedule.push({
        year,
        remainingBalance: Math.max(0, balance),
        principalPaid: yearlyPrincipal,
        interestPaid: yearlyInterest,
        totalYearlyPayment: yearlyPayment
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

  const handleCalculate = () => {
    setRoutes(routes.map(route => calculateMortgage(route)));
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
      setRoutes([...routes, newRoute]);
    }
  };

  const removeRoute = (id) => {
    if (routes.length > 1) {
      setRoutes(routes.filter(route => route.id !== id));
    }
  };

  const updateRoute = (id, field, value) => {
    setRoutes(routes.map(route => {
      if (route.id === id) {
        return { ...route, [field]: value };
      }
      return route;
    }));
  };

  const routeColors = ['#2563eb', '#16a34a', '#dc2626'];

  return (
    <div className="w-full max-w-none p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">מחשבון משכנתא</h1>
        <p className="text-xl text-gray-600">השווה מסלולי משכנתא שונים וקבל תמונה מלאה על העלויות</p>
      </div>

      <div className="mb-6 space-y-4 w-full">
        {routes.map(route => (
          <RouteCard
            key={route.id}
            route={route}
            onUpdate={updateRoute}
            onRemove={removeRoute}
            isRemovable={routes.length > 1}
          />
        ))}
       

        {routes.length < 3 && (
          <button
            onClick={addRoute}
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center bg-white hover:bg-blue-50"
          >
            <PlusCircle className="mr-2" />
            הוסף מסלול להשוואה
          </button>
        )}
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors mb-8 font-medium text-lg shadow-lg hover:shadow-xl"
      >
        חשב השוואה
      </button>

      {routes[0].monthlyPayment > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">השוואה גרפית</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.entries(chartTypes).map(([type, { icon: Icon, label }]) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all whitespace-nowrap ${
                  chartType === type 
                    ? 'bg-blue-100 text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>

          <div className="h-96 w-full overflow-x-auto">
            <ResponsiveContainer width="100%" height="100%" minWidth={600}>
              {chartType === 'balance' ? (
                <LineChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" allowDecimals={false} />
                  <YAxis 
                    width={80}
                    tickFormatter={(value) => `₪${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip 
                    formatter={(value) => `₪${value.toLocaleString()}`}
                    labelFormatter={(year) => `שנה ${year}`}
                  />
                  <Legend />
                  {routes.map((route, index) => (
                    <Line
                      key={route.id}
                      type="monotone"
                      data={route.paymentSchedule}
                      dataKey="remainingBalance"
                      name={`${route.type} - מסלול ${route.id}`}
                      stroke={routeColors[index]}
                      strokeWidth={2}
                    />
                  ))}
                </LineChart>
              ) : chartType === 'yearly' ? (
                <BarChart 
                  data={routes[0].paymentSchedule}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" allowDecimals={false} />
                  <YAxis 
                    width={80}
                    tickFormatter={(value) => `₪${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    formatter={(value) => `₪${value.toLocaleString()}`}
                    labelFormatter={(year) => `שנה ${year}`}
                  />
                  <Legend />
                  <Bar dataKey="principalPaid" name="תשלום קרן" fill="#2563eb" stackId="a" />
                  <Bar dataKey="interestPaid" name="תשלום ריבית" fill="#9ca3af" stackId="a" />
                </BarChart>
              ) : (
                <BarChart data={routes} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `₪${(value / 1000000).toFixed(1)}M`} />
                  <YAxis type="category" dataKey="type" width={120} />
                  <Tooltip 
                    formatter={(value) => `₪${value.toLocaleString()}`}
                    labelFormatter={(type) => `מסלול ${type}`}
                  />
                  <Legend />
                  <Bar dataKey="loanAmount" name="קרן" fill="#2563eb" stackId="a" />
                  <Bar dataKey="totalInterest" name="ריבית" fill="#9ca3af" stackId="a" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {routes.map((route, index) => (
              <div key={route.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: routeColors[index] }} />
                  <h4 className="font-medium">מסלול {route.id} - {route.type}</h4>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-600">
                    סך תשלומים: ₪{route.totalPayment.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    אחוז ריבית מסך התשלום: {((route.totalInterest / route.totalPayment) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Info size={20} className="text-blue-500 mt-1" />
              <div>
                <p className="text-sm text-gray-600">
                  * החישובים מבוססים על ריבית קבועה לאורך כל תקופת ההלוואה. במציאות, הריבית עשויה להשתנות, במיוחד במסלול פריים.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  * התחשיב אינו לוקח בחשמון הצמדות למדד או שינויים בתנאי השוק.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;