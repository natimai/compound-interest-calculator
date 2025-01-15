import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { InfoIcon, PlusCircle, MinusCircle } from 'lucide-react';

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
  
  const [activeTab, setActiveTab] = useState('single');
  const [showTips, setShowTips] = useState(true);

  const calculateMortgage = (route) => {
    const monthlyRate = (route.interestRate / 100) / 12;
    const numberOfPayments = route.loanTerm * 12;
    
    const monthlyPayment = (route.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - route.loanAmount;

    // Calculate amortization schedule
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

  const MortgageForm = ({ route }) => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label>סוג מסלול</Label>
          <Input
            value={route.type}
            onChange={(e) => updateRoute(route.id, 'type', e.target.value)}
            className="text-right"
          />
        </div>
        <div className="space-y-2">
          <Label>סכום ההלוואה</Label>
          <Input
            type="number"
            min="0"
            value={route.loanAmount}
            onChange={(e) => updateRoute(route.id, 'loanAmount', Number(e.target.value))}
            className="text-left"
          />
        </div>
        <div className="space-y-2">
          <Label>ריבית שנתית (%)</Label>
          <Input
            type="number"
            min="0"
            step="0.1"
            value={route.interestRate}
            onChange={(e) => updateRoute(route.id, 'interestRate', Number(e.target.value))}
            className="text-left"
          />
        </div>
        <div className="space-y-2">
          <Label>תקופת ההלוואה (שנים)</Label>
          <Input
            type="number"
            min="1"
            max="30"
            value={route.loanTerm}
            onChange={(e) => updateRoute(route.id, 'loanTerm', Number(e.target.value))}
            className="text-left"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-lg font-semibold">תשלום חודשי</div>
          <div className="text-2xl text-blue-600">{formatCurrency(route.monthlyPayment)}</div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-lg font-semibold">סה״כ תשלום</div>
          <div className="text-2xl text-green-600">{formatCurrency(route.totalPayment)}</div>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="text-lg font-semibold">סה״כ ריבית</div>
          <div className="text-2xl text-purple-600">{formatCurrency(route.totalInterest)}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div dir="rtl" className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {showTips && (
        <Alert className="bg-blue-50">
          <InfoIcon className="h-5 w-5" />
          <AlertDescription className="text-right mr-2">
            <div className="font-semibold mb-2">טיפים לשימוש במחשבון:</div>
            <ul className="list-disc list-inside space-y-1">
              <li>השתמשו בטאב ׳השוואת מסלולים׳ כדי להשוות עד 3 מסלולי משכנתא שונים</li>
              <li>שימו לב שריבית נמוכה יותר לא תמיד אומרת תשלום כולל נמוך יותר</li>
              <li>הגרף מציג את התפתחות ההלוואה לאורך זמן - שימו לב לקצב הירידה של הקרן</li>
              <li>מומלץ להתייעץ עם יועץ משכנתאות לפני קבלת החלטה סופית</li>
            </ul>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={() => setShowTips(false)}
            >
              הבנתי, תודה
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Card className="bg-white">
        <CardContent className="p-6">
          <Tabs defaultValue="single" className="space-y-4" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="single">מסלול בודד</TabsTrigger>
              <TabsTrigger value="compare">השוואת מסלולים</TabsTrigger>
            </TabsList>

            <TabsContent value="single" className="space-y-4">
              <MortgageForm route={routes[0]} />
            </TabsContent>

            <TabsContent value="compare" className="space-y-4">
              {routes.map((route, index) => (
                <div key={route.id} className="relative border p-4 rounded-lg mb-4">
                  <div className="absolute top-2 left-2 flex gap-2">
                    {routes.length > 1 && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeRoute(route.id)}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                    )}
                    {index === routes.length - 1 && routes.length < 3 && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={addRoute}
                      >
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="font-semibold mb-4">מסלול {index + 1}</div>
                  <MortgageForm route={route} />
                </div>
              ))}
            </TabsContent>
          </Tabs>

          <div className="mt-8 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
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
                    name={`יתרת הלוואה - מסלול ${index + 1}`}
                    dataKey="remainingBalance"
                    stroke={`hsl(${index * 120}, 70%, 50%)`}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MortgageCalculator;