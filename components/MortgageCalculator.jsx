import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';
import { 
  Info, 
  PlusCircle, 
  MinusCircle, 
  HelpCircle, 
  LineChart as LineChartIcon, 
  BarChart2, 
  PieChart,
  Calculator,
  AlertCircle
} from 'lucide-react';

// Constants
const TOOLTIPS = {
  loanAmount: "סכום ההלוואה הכולל שברצונך לקחת במסלול זה",
  interestRate: "שיעור הריבית השנתית באחוזים",
  loanTerm: "משך זמן ההלוואה בשנים",
  type: "סוג המסלול והתנאים הנלווים אליו"
};

const ROUTE_COLORS = {
  'פריים': {
    border: 'border-blue-500',
    gradient: 'from-[#eef2f3] to-[#e8f3ff]',
    accent: '#2563eb'
  },
  'קבועה צמודה למדד': {
    border: 'border-green-500',
    gradient: 'from-[#eef2f3] to-[#e8fff0]',
    accent: '#16a34a'
  },
  'קבועה לא צמודה': {
    border: 'border-purple-500',
    gradient: 'from-[#eef2f3] to-[#f0e8ff]',
    accent: '#9333ea'
  }
};

const CHART_TYPES = {
  balance: {
    icon: LineChartIcon,
    label: 'יתרת קרן',
    description: 'מעקב אחר יתרת הקרן לאורך תקופת ההלוואה'
  },
  yearly: {
    icon: BarChart2,
    label: 'תשלומים שנתיים',
    description: 'פילוח שנתי של תשלומי קרן וריבית'
  },
  breakdown: {
    icon: PieChart,
    label: 'התפלגות כללית',
    description: 'חלוקה כללית בין קרן לריבית'
  }
};

const formatCurrency = (amount) => 
  new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0
  }).format(amount);

const calculateAdjustedRate = (route) => {
  const ADJUSTMENTS = {
    'פריים': 0.5,
    'קבועה צמודה למדד': 2.0,
    'קבועה לא צמודה': 1.0
  };
  return route.interestRate + (ADJUSTMENTS[route.type] || 0);
};

const InputWithTooltip = ({ id, label, value, onChange, error, tooltip }) => (
  <div className="relative mb-4 group">
    <div className="flex items-center mb-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mr-2">
        <Info 
          size={16} 
          className="text-gray-400 group-hover:text-blue-500 transition-colors" 
        />
        <div className="
          invisible group-hover:visible
          absolute z-10 w-64 p-3
          bg-gray-800 text-white text-sm
          rounded-lg shadow-xl
          -right-2 top-6
          transform translate-y-1
          transition-all duration-200
        ">
          {tooltip}
        </div>
      </div>
    </div>
    <input
      id={id}
      type="number"
      value={value}
      onChange={onChange}
      className="
        w-full p-2.5
        border rounded-lg
        focus:ring-2 focus:ring-blue-500
        outline-none bg-white
        transition-all duration-200
        hover:border-blue-300
      "
    />
    {error && <InputError message={error} />}
  </div>
);

const InputError = ({ message }) => (
  <div className="
    mt-1 text-sm text-red-500
    flex items-center gap-1
    animate-fadeIn
  ">
    <AlertCircle size={14} />
    <span>{message}</span>
  </div>
);

const getRouteColors = (type) => {
  const colors = ROUTE_COLORS[type];
  if (!colors) {
    console.error(`No colors found for type: ${type}`);
    return {
      border: 'border-gray-500',
      gradient: 'from-[#eef2f3] to-[#e8f3ff]',
      accent: '#6B7280'
    };
  }
  return colors;
};

const ROUTE_INFO = {
  'פריים': {
    description: 'מסלול עם ריבית משתנה הצמודה לריבית בנק ישראל',
    advantages: ['ריבית נמוכה יחסית בתקופות של ריבית נמוכה במשק', 'גמישות ואפשרות למחזור קל', 'מתאים לתקופות של ריבית יורדת'],
    disadvantages: ['חשיפה לשינויי ריבית', 'תשלום חודשי לא קבוע', 'סיכון בתקופות של עליית ריבית']
  },
  'קבועה צמודה למדד': {
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

const RouteCard = ({ route, onUpdate, onRemove, isRemovable }) => {
  const [showInfo, setShowInfo] = useState(false);
  const colors = getRouteColors(route.type);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const getRouteInfo = (type) => {
    const info = ROUTE_INFO[type];
    if (!info) {
      return {
        description: 'מידע לא זמין',
        advantages: [],
        disadvantages: []
      };
    }
    return info;
  };

  const handleChange = (field, value) => {
    if (field === 'type') {
      onUpdate(route.id, field, value);
    } else {
      onUpdate(route.id, field, Number(value));
    }
  };

  return (
    <div className={`
      w-full rounded-xl p-6 mb-4
      border-2 ${colors.border}
      bg-gradient-to-b ${colors.gradient}
      transition-all duration-300
      hover:shadow-lg hover:scale-[1.01]
    `}>
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
          tooltip={TOOLTIPS.loanAmount}
        />

        <InputWithTooltip
          id={`interestRate-${route.id}`}
          label="ריבית שנתית (%)"
          value={route.interestRate}
          onChange={(e) => handleChange('interestRate', e.target.value)}
          tooltip={TOOLTIPS.interestRate}
        />

        <InputWithTooltip
          id={`loanTerm-${route.id}`}
          label="תקופת הלוואה (שנים)"
          value={route.loanTerm}
          onChange={(e) => handleChange('loanTerm', e.target.value)}
          tooltip={TOOLTIPS.loanTerm}
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
              <option value="קבועה צמודה למדד">קבועה צמודה למדד</option>
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
              <p className="text-gray-600 mb-3">{getRouteInfo(route.type).description}</p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-green-600 mb-1">יתרונות:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {getRouteInfo(route.type).advantages.map((adv, i) => (
                      <li key={i} className="text-sm text-gray-600">{adv}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-red-600 mb-1">חסרונות:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {getRouteInfo(route.type).disadvantages.map((dis, i) => (
                      <li key={i} className="text-sm text-gray-600">{dis}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showAdvancedOptions && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputWithTooltip
            id={`inflationRate-${route.id}`}
            label="הערכת אינפלציה שנתית (%)"
            value={route.inflationRate}
            onChange={(e) => handleChange('inflationRate', e.target.value)}
            tooltip="הערכת שיעור האינפלציה השנתי הממוצע"
          />
          <InputWithTooltip
            id={`earlyRepayment-${route.id}`}
            label="תשלום חד פעמי (₪)"
            value={route.earlyRepayment}
            onChange={(e) => handleChange('earlyRepayment', e.target.value)}
            tooltip="תשלום חד פעמי לפירעון מוקדם"
          />
        </div>
      )}
      
      <button
        onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
        className="mt-4 text-white bg-blue-600 hover:bg-blue-700 text-sm flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
      >
        {showAdvancedOptions ? 'הסתר' : 'הצג'} אפשרויות מתקדמות
      </button>

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

const TooltipContent = ({ title, description }) => (
  <div className="
    p-3 rounded-lg
    bg-gray-800 text-white
    shadow-xl
    border border-gray-700
    max-w-xs
  ">
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

const ValueChange = ({ oldValue, newValue }) => {
  const change = ((newValue - oldValue) / oldValue) * 100;
  
  return (
    <span className={`
      text-sm font-medium ml-2
      ${change > 0 ? 'text-green-500' : 'text-red-500'}
    `}>
      {change > 0 ? '↑' : '↓'} {Math.abs(change).toFixed(1)}%
    </span>
  );
};

const BalanceChart = ({ routes }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={routes[0].paymentSchedule}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis 
        dataKey="year" 
        allowDecimals={false}
        tick={{ fill: '#6b7280' }}
      />
      <YAxis 
        width={80}
        tickFormatter={(value) => `₪${(value / 1000000).toFixed(1)}M`}
        tick={{ fill: '#6b7280' }}
      />
      <Tooltip 
        contentStyle={{
          backgroundColor: '#1f2937',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '1rem'
        }}
        itemStyle={{ color: '#fff' }}
        formatter={(value) => formatCurrency(value)}
        labelFormatter={(year) => `שנה ${year}`}
      />
      <Legend />
      {routes.map((route) => (
        <Line
          key={route.id}
          type="monotone"
          dataKey="remainingBalance"
          data={route.paymentSchedule}
          name={`${route.type} - מסלול ${route.id}`}
          stroke={getRouteColors(route.type).accent}
          strokeWidth={2}
          dot={false}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

const YearlyPaymentsChart = ({ routes }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={routes[0].paymentSchedule}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis 
        dataKey="year" 
        tick={{ fill: '#6b7280' }}
      />
      <YAxis
        tickFormatter={(value) => `₪${(value / 1000).toFixed(0)}K`}
        tick={{ fill: '#6b7280' }}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: '#1f2937',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '1rem'
        }}
        formatter={(value) => formatCurrency(value)}
        labelFormatter={(year) => `שנה ${year}`}
      />
      <Legend />
      {routes.map((route) => (
        <Bar
          key={`${route.id}-principal`}
          dataKey="principalPaid"
          name={`קרן - מסלול ${route.id}`}
          fill={getRouteColors(route.type).accent}
          opacity={0.8}
          stackId={route.id}
        />
      ))}
      {routes.map((route) => (
        <Bar
          key={`${route.id}-interest`}
          dataKey="interestPaid"
          name={`ריבית - מסלול ${route.id}`}
          fill={getRouteColors(route.type).accent}
          opacity={0.4}
          stackId={route.id}
        />
      ))}
    </BarChart>
  </ResponsiveContainer>
);

const BreakdownChart = ({ routes }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={routes.map(route => ({
        name: `מסלול ${route.id}`,
        קרן: route.loanAmount,
        ריבית: route.totalInterest,
        type: route.type
      }))}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
      <XAxis 
        type="number"
        tickFormatter={(value) => `₪${(value / 1000000).toFixed(1)}M`}
        tick={{ fill: '#6b7280' }}
      />
      <YAxis 
        type="category" 
        dataKey="name"
        tick={{ fill: '#6b7280' }}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: '#1f2937',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '1rem'
        }}
        formatter={(value) => formatCurrency(value)}
      />
      <Legend />
      <Bar
        dataKey="קרן"
        name="קרן"
        fill="#3b82f6"
        opacity={0.8}
        stackId="a"
      />
      <Bar
        dataKey="ריבית"
        name="ריבית"
        fill="#ef4444"
        opacity={0.8}
        stackId="a"
      />
    </BarChart>
  </ResponsiveContainer>
);

export const MortgageCalculator = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      loanAmount: 1000000,
      interestRate: 4,
      loanTerm: 30,
      type: 'קבועה צמודה למדד',
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
      paymentSchedule: []
    }
  ]);
  
  const [chartType, setChartType] = useState('balance');
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  const removeRoute = (id) => {
    if (routes.length > 1) {
      setRoutes(routes.filter(route => route.id !== id));
      setHasCalculated(false);
    }
  };

  const calculateMortgage = (route) => {
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
    setIsCalculating(true);
    const updatedRoutes = routes.map(route => calculateMortgage(route));
    setRoutes(updatedRoutes);
    setHasCalculated(true);
    setIsCalculating(false);
  };

  const addRoute = () => {
    if (routes.length < 3) {
      const newRoute = {
        id: routes.length + 1,
        loanAmount: 1000000,
        interestRate: 4,
        loanTerm: 30,
        type: 'קבועה צמודה למדד',
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        paymentSchedule: []
      };
      setRoutes([...routes, newRoute]);
    }
  };

  const updateRoute = (id, field, value) => {
    setRoutes(routes.map(route => {
      if (route.id === id) {
        const newValue = field === 'type' ? value : Number(value);
        return {
          ...route,
          [field]: newValue,
          monthlyPayment: 0,
          totalPayment: 0,
          totalInterest: 0,
          paymentSchedule: []
        };
      }
      return route;
    }));
    setHasCalculated(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          מחשבון משכנתא חכם
        </h1>
        <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          השוו בין מסלולי משכנתא שונים וקבלו תמונה מלאה על העלויות והחסכונות האפשריים
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {routes.length < 3 && (
          <button
            onClick={addRoute}
            className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 
                     px-6 py-3 rounded-xl bg-blue-600 text-white
                     hover:bg-blue-100 transition-all duration-300
                     border-2 border-dashed border-blue-300 hover:bg-blue-700"
          >
            <PlusCircle size={20} />
            <span>הוסף מסלול להשוואה</span>
          </button>
        )}

        <div className="space-y-6">
          {routes.map(route => (
            <RouteCard
              key={route.id}
              route={route}
              onUpdate={updateRoute}
              onRemove={removeRoute}
              isRemovable={routes.length > 1}
            />
          ))}
        </div>

        <button
          onClick={handleCalculate}
          disabled={isCalculating}
          className="w-full sm:max-w-md mx-auto block
                   bg-gradient-to-r from-blue-600 to-blue-500
                   text-white py-4 px-8 rounded-xl
                   font-medium text-lg
                   transition-all duration-300
                   hover:shadow-lg hover:shadow-blue-200
                   hover:scale-[1.02]
                   disabled:opacity-50 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2
                   sticky bottom-4 sm:relative sm:bottom-0
                   shadow-lg"
        >
          {isCalculating ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : (
            <>
              <Calculator size={20} />
              חשב השוואה
            </>
          )}
        </button>
      </div>

      {hasCalculated && routes[0].monthlyPayment > 0 && (
        <div className="max-w-7xl mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {routes.map(route => (
              <div key={route.id} 
                className="bg-white rounded-xl shadow-sm p-6 
                         border border-gray-100 hover:shadow-md 
                         transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-12 rounded-full bg-${getRouteColors(route.type).accent}`} />
                  <div>
                    <h4 className="font-bold">מסלול {route.id}</h4>
                    <p className="text-sm text-gray-600">{route.type}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">תשלום חודשי</p>
                    <p className="text-2xl font-bold">{formatCurrency(route.monthlyPayment)}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">סך ריבית</span>
                      <span className="text-sm font-medium">
                        {formatCurrency(route.totalInterest)}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div 
                        className={`h-full rounded-full bg-${getRouteColors(route.type).accent}`}
                        style={{ 
                          width: `${(route.totalInterest / route.totalPayment) * 100}%`,
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              השוואה גרפית
            </h3>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6 px-2">
              {Object.entries(CHART_TYPES).map(([type, { icon: Icon, label, description }]) => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`
                    relative group px-4 py-2 rounded-lg 
                    flex items-center gap-2 
                    transition-all duration-300
                    ${chartType === type 
                      ? 'bg-blue-100 text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                  
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                                pointer-events-none opacity-0 group-hover:opacity-100
                                transition-opacity duration-200 sm:hidden">
                    <div className="bg-gray-800 text-white text-xs rounded-lg py-1 px-2">
                      {label}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="h-[300px] sm:h-[400px] w-full overflow-hidden">
              {chartType === 'balance' && <BalanceChart routes={routes} />}
              {chartType === 'yearly' && <YearlyPaymentsChart routes={routes} />}
              {chartType === 'breakdown' && <BreakdownChart routes={routes} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;