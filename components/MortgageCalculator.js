import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

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
     amortizationTable: []
   }
 ]);
 
 const [activeTab, setActiveTab] = useState('single');
 const [showTips, setShowTips] = useState(true);
 const [earlyRepayment, setEarlyRepayment] = useState({
   amount: 100000,
   afterYears: 5,
   penalty: 0.1
 });

 const calculateAmortizationTable = (route) => {
   const monthlyRate = (route.interestRate / 100) / 12;
   const monthlyPayment = route.monthlyPayment;
   let balance = route.loanAmount;
   const table = [];

   for (let month = 1; month <= route.loanTerm * 12; month++) {
     const interestPayment = balance * monthlyRate;
     const principalPayment = monthlyPayment - interestPayment;
     balance = Math.max(0, balance - principalPayment);

     if (month % 12 === 0) {
       table.push({
         payment: month,
         year: Math.ceil(month / 12),
         principalPayment,
         interestPayment,
         monthlyPayment,
         remainingBalance: balance
       });
     }
   }

   return table;
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
   
   for (let year = 1; year <= Math.min(route.loanTerm, 30); year++) {
     const yearlyInterest = balance * (route.interestRate / 100);
     const yearlyPrincipal = (monthlyPayment * 12) - yearlyInterest;
     balance -= yearlyPrincipal;
     
     schedule.push({
       year: year,
       remainingBalance: Math.max(0, balance),
       principalPaid: yearlyPrincipal,
       interestPaid: yearlyInterest
     });
   }

   const amortizationTable = calculateAmortizationTable({
     ...route,
     monthlyPayment
   });
   
   return {
     ...route,
     monthlyPayment,
     totalPayment,
     totalInterest,
     paymentSchedule: schedule,
     amortizationTable
   };
 };

 const calculateEarlyRepayment = (route) => {
   const originalTotalPayment = route.totalPayment;
   const yearsBeforeRepayment = earlyRepayment.afterYears;
   const remainingYears = route.loanTerm - yearsBeforeRepayment;
   
   const balanceAtRepayment = route.paymentSchedule.find(
     schedule => schedule.year === yearsBeforeRepayment
   )?.remainingBalance || 0;
   
   const newLoanAmount = balanceAtRepayment - earlyRepayment.amount;
   const penaltyAmount = earlyRepayment.amount * (earlyRepayment.penalty / 100);
   
   const newRoute = calculateMortgage({
     ...route,
     loanAmount: newLoanAmount,
     loanTerm: remainingYears
   });

   const totalPaymentWithEarlyRepayment = 
     (route.monthlyPayment * yearsBeforeRepayment * 12) + 
     earlyRepayment.amount +
     penaltyAmount +
     (newRoute.monthlyPayment * remainingYears * 12);

   const savings = originalTotalPayment - totalPaymentWithEarlyRepayment;

   return {
     newMonthlyPayment: newRoute.monthlyPayment,
     totalPaymentWithEarlyRepayment,
     savings,
     penaltyAmount
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
       paymentSchedule: [],
       amortizationTable: []
     };
     setRoutes([...routes, calculateMortgage(newRoute)]);
   }
 };

 const removeRoute = (id) => {
   if (routes.length > 1) {
     setRoutes(routes.filter(route => route.id !== id));
   }
 };

 const downloadAmortizationTable = (route) => {
    let csvRows = [];
    
    // Add headers
    csvRows.push(['תשלום', 'שנה', 'תשלום קרן', 'תשלום ריבית', 'תשלום חודשי', 'יתרה'].join(','));
    
    // Add data rows
    route.amortizationTable.forEach(row => {
      csvRows.push([
        row.payment,
        row.year,
        row.principalPayment.toFixed(2),
        row.interestPayment.toFixed(2),
        row.monthlyPayment.toFixed(2),
        row.remainingBalance.toFixed(2)
      ].join(','));
    });
  
    // Create CSV content
    const csvString = csvRows.join('\n');
    
    // Create and trigger download
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `לוח-סילוקין-${route.type}.csv`;
    link.click();
  };

  

 const formatCurrency = (value) => {
   return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(value);
 };

 const formatPercent = (value) => {
   return new Intl.NumberFormat('he-IL', { style: 'percent', minimumFractionDigits: 1 }).format(value / 100);
 };

 useEffect(() => {
   setRoutes(routes.map(route => calculateMortgage(route)));
 }, []);

 return (
   <div className="calculator">
     {showTips && (
       <div className="tips">
         <div className="tips-header">
           <h3>טיפים לשימוש במחשבון:</h3>
           <button onClick={() => setShowTips(false)} className="close-button">×</button>
         </div>
         <ul>
           <li>השתמשו בטאב 'השוואת מסלולים' כדי להשוות עד 3 מסלולי משכנתא שונים</li>
           <li>שימו לב שריבית נמוכה יותר לא תמיד אומרת תשלום כולל נמוך יותר</li>
           <li>הגרף מציג את התפתחות ההלוואה לאורך זמן - שימו לב לקצב הירידה של הקרן</li>
           <li>מומלץ להתייעץ עם יועץ משכנתאות לפני קבלת החלטה סופית</li>
         </ul>
       </div>
     )}

     <div className="calculator-tabs">
       <button 
         className={`tab-button ${activeTab === 'single' ? 'active' : ''}`}
         onClick={() => setActiveTab('single')}
       >
         מסלול בודד
       </button>
       <button 
         className={`tab-button ${activeTab === 'compare' ? 'active' : ''}`}
         onClick={() => setActiveTab('compare')}
       >
         השוואת מסלולים
       </button>
     </div>

     <div className="calculator-content">
       {activeTab === 'single' ? (
         <div className="single-route">
           <div className="input-group">
             <div className="input-field">
               <label>סוג מסלול</label>
               <input
                 type="text"
                 value={routes[0].type}
                 onChange={(e) => updateRoute(1, 'type', e.target.value)}
               />
             </div>
             <div className="input-field">
               <label>סכום ההלוואה</label>
               <input
                 type="number"
                 value={routes[0].loanAmount}
                 onChange={(e) => updateRoute(1, 'loanAmount', Number(e.target.value))}
               />
             </div>
             <div className="input-field">
               <label>ריבית שנתית (%)</label>
               <input
                 type="number"
                 step="0.1"
                 value={routes[0].interestRate}
                 onChange={(e) => updateRoute(1, 'interestRate', Number(e.target.value))}
               />
             </div>
             <div className="input-field">
               <label>תקופת ההלוואה (שנים)</label>
               <input
                 type="number"
                 value={routes[0].loanTerm}
                 onChange={(e) => updateRoute(1, 'loanTerm', Number(e.target.value))}
               />
             </div>
           </div>

           <div className="results-group">
             <div className="result-card">
               <h3>תשלום חודשי</h3>
               <div className="amount">{formatCurrency(routes[0].monthlyPayment)}</div>
             </div>
             <div className="result-card">
               <h3>סה״כ תשלום</h3>
               <div className="amount">{formatCurrency(routes[0].totalPayment)}</div>
             </div>
             <div className="result-card">
               <h3>סה״כ ריבית</h3>
               <div className="amount">{formatCurrency(routes[0].totalInterest)}</div>
               <div className="sub-amount">
                 {formatPercent(routes[0].totalInterest / routes[0].loanAmount)} מסכום ההלוואה
               </div>
             </div>
           </div>

           <div className="chart-container">
             <h3>התפתחות ההלוואה לאורך זמן</h3>
             <ResponsiveContainer width="100%" height={300}>
               <LineChart
                 data={routes[0].paymentSchedule}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
               >
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="year" />
                 <YAxis />
                 <Tooltip formatter={(value) => formatCurrency(value)} />
                 <Legend />
                 <Line 
                   type="monotone" 
                   dataKey="remainingBalance" 
                   name="יתרת הלוואה" 
                   stroke="#8884d8" 
                 />
                 <Line 
                   type="monotone" 
                   dataKey="principalPaid" 
                   name="קרן ששולמה" 
                   stroke="#82ca9d" 
                 />
                 <Line 
                   type="monotone" 
                   dataKey="interestPaid" 
                   name="ריבית ששולמה" 
                   stroke="#ffc658" 
                 />
               </LineChart>
             </ResponsiveContainer>
           </div>

           <div className="amortization-section">
             <h3>לוח סילוקין</h3>
             <button 
               className="download-button"
               onClick={() => downloadAmortizationTable(routes[0])}
             >
               הורד לוח סילוקין מלא
             </button>
             <div className="table-container">
               <table>
                 <thead>
                   <tr>
                     <th>שנה</th>
                     <th>תשלום קרן</th>
                     <th>תשלום ריבית</th>
                     <th>תשלום שנתי</th>
                     <th>יתרה</th>
                   </tr>
                 </thead>
                 <tbody>
                   {routes[0].amortizationTable
                     .filter((_, index) => index % 12 === 0)
                     .map((row, index) => (
                     <tr key={index}>
                       <td>{row.year}</td>
                       <td>{formatCurrency(row.principalPayment * 12)}</td>
                       <td>{formatCurrency(row.interestPayment * 12)}</td>
                       <td>{formatCurrency(row.monthlyPayment * 12)}</td>
                       <td>{formatCurrency(row.remainingBalance)}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>

           <div className="early-repayment-section">
             <h3>חישוב פירעון מוקדם</h3>
             <div className="input-group">
               <div className="input-field">
                 <label>סכום הפירעון המוקדם</label>
                 <input
                   type="number"
                   value={earlyRepayment.amount}
                   onChange={(e) => setEarlyRepayment({
                     ...earlyRepayment,
                     amount: Number(e.target.value)
                   })}
                 />
               </div>
               <div className="input-field">
                 <label>לאחר כמה שנים</label>
                 <input
                   type="number"
                   min="1"
                   max={routes[0].loanTerm - 1}
                   value={earlyRepayment.afterYears}
                   onChange={(e) => setEarlyRepayment({
                     ...earlyRepayment,
                     afterYears: Number(e.target.value)
                   })}
                 />
               </div>
               <div className="input-field">
                  <label>עמלת פירעון מוקדם (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={earlyRepayment.penalty}
                    onChange={(e) => setEarlyRepayment({
                      ...earlyRepayment,
                      penalty: Number(e.target.value)
                    })}
                  />
                </div>
              </div>

              {routes[0].loanAmount > 0 && (
                <div className="results-group">
                  <div className="result-card">
                    <h3>תשלום חודשי חדש</h3>
                    <div className="amount">
                      {formatCurrency(calculateEarlyRepayment(routes[0]).newMonthlyPayment)}
                    </div>
                    <div className="sub-amount">
                      חיסכון של {formatCurrency(routes[0].monthlyPayment - calculateEarlyRepayment(routes[0]).newMonthlyPayment)} בחודש
                    </div>
                  </div>
                  <div className="result-card">
                    <h3>סה״כ חיסכון</h3>
                    <div className="amount">
                      {formatCurrency(calculateEarlyRepayment(routes[0]).savings)}
                    </div>
                    <div className="sub-amount warning">
                      כולל עמלת פירעון מוקדם: {formatCurrency(calculateEarlyRepayment(routes[0]).penaltyAmount)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="compare-routes">
            {routes.map((route, index) => (
              <div key={route.id} className="route-container">
                <div className="route-header">
                  <h3>מסלול {index + 1}</h3>
                  <div className="route-actions">
                    {routes.length > 1 && (
                      <button
                        className="remove-button"
                        onClick={() => removeRoute(route.id)}
                      >
                        הסר מסלול
                      </button>
                    )}
                    {index === routes.length - 1 && routes.length < 3 && (
                      <button
                        className="add-button"
                        onClick={addRoute}
                      >
                        הוסף מסלול
                      </button>
                    )}
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-field">
                    <label>סוג מסלול</label>
                    <input
                      type="text"
                      value={route.type}
                      onChange={(e) => updateRoute(route.id, 'type', e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <label>סכום ההלוואה</label>
                    <input
                      type="number"
                      value={route.loanAmount}
                      onChange={(e) => updateRoute(route.id, 'loanAmount', Number(e.target.value))}
                    />
                  </div>
                  <div className="input-field">
                    <label>ריבית שנתית (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={route.interestRate}
                      onChange={(e) => updateRoute(route.id, 'interestRate', Number(e.target.value))}
                    />
                  </div>
                  <div className="input-field">
                    <label>תקופת ההלוואה (שנים)</label>
                    <input
                      type="number"
                      value={route.loanTerm}
                      onChange={(e) => updateRoute(route.id, 'loanTerm', Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="results-group">
                  <div className="result-card">
                    <h3>תשלום חודשי</h3>
                    <div className="amount">{formatCurrency(route.monthlyPayment)}</div>
                  </div>
                  <div className="result-card">
                    <h3>סה״כ תשלום</h3>
                    <div className="amount">{formatCurrency(route.totalPayment)}</div>
                  </div>
                  <div className="result-card">
                    <h3>סה״כ ריבית</h3>
                    <div className="amount">{formatCurrency(route.totalInterest)}</div>
                    <div className="sub-amount">
                      {formatPercent(route.totalInterest / route.loanAmount)} מסכום ההלוואה
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="comparison-chart">
              <h3>השוואת יתרות הלוואה</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
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
                      name={`יתרת הלוואה - ${route.type}`}
                      dataKey="remainingBalance"
                      stroke={`hsl(${index * 120}, 70%, 50%)`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;