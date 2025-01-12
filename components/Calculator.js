import { useState } from 'react'

export const Calculator = () => {
  const [result, setResult] = useState(null)
  const [showYearlyDetails, setShowYearlyDetails] = useState(false)
  const [yearlyData, setYearlyData] = useState([])

  function formatNumber(number) {
    if (number === undefined || number === null) return '0.00'
    return number.toLocaleString('he-IL', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
  }

  function calculateCompoundInterest() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value) || 0
    const monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value) || 0
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 || 0
    const managementFeeDeposit = parseFloat(document.getElementById('managementFeeDeposit').value) / 100 || 0
    const managementFeeAccumulation = parseFloat(document.getElementById('managementFeeAccumulation').value) / 100 || 0
    const years = parseInt(document.getElementById('years').value) || 0
    const includeCapitalGainsTax = document.getElementById('capitalGainsTax').checked

    if (years === 0) {
      setResult('אנא הזן מספר שנים גדול מ-0')
      return
    }

    let totalDeposit = initialAmount
    let totalAmount = initialAmount
    let accumulatedFees = 0
    let accumulatedInterest = 0
    let totalCapitalGainsTax = 0
    let yearlyDetails = []
    let accumulatedDeposits = initialAmount

    for (let year = 1; year <= years; year++) {
      const yearStartAmount = totalAmount
      let yearlyFees = 0
      
      for (let month = 1; month <= 12; month++) {
        const depositFee = monthlyDeposit * managementFeeDeposit
        const accumulationFee = totalAmount * managementFeeAccumulation / 12
        yearlyFees += depositFee + accumulationFee
        accumulatedFees += depositFee + accumulationFee
        totalDeposit += monthlyDeposit
        totalAmount += monthlyDeposit - depositFee
        totalAmount *= (1 + interestRate / 12)
      }

      accumulatedDeposits += monthlyDeposit * 12
      const yearEndAmount = totalAmount
      const yearlyInterest = yearEndAmount - yearStartAmount - (monthlyDeposit * 12) + yearlyFees
      accumulatedInterest += yearlyInterest
      
      if (includeCapitalGainsTax) {
        totalCapitalGainsTax = accumulatedInterest * 0.25
      }

      const currentYearData = {
        year: new Date().getFullYear() + year - 1,
        accumulatedDeposits: accumulatedDeposits,
        accumulatedInterest: accumulatedInterest,
        accumulatedFees: accumulatedFees,
        totalAmount: yearEndAmount - (includeCapitalGainsTax ? totalCapitalGainsTax : 0)
      }

      Object.keys(currentYearData).forEach(key => {
        if (typeof currentYearData[key] === 'number' && !isFinite(currentYearData[key])) {
          currentYearData[key] = 0
        }
      })

      yearlyDetails.push(currentYearData)
    }

    setYearlyData(yearlyDetails)
    setResult({
      totalDeposit,
      totalInterest: accumulatedInterest,
      totalFees: accumulatedFees,
      totalCapitalGainsTax,
      finalAmount: totalAmount - totalCapitalGainsTax
    })
  }

  return (
    <div className="calculator max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* כותרת מעוצבת */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">מחשבון ריבית דריבית</h1>
        <p className="text-xl text-gray-600">חשב את התשואה העתידית על ההשקעות שלך</p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="form-group">
          <label htmlFor="initialAmount">סכום הפקדה ראשוני:</label>
          <input type="number" id="initialAmount" placeholder="הסכום הראשוני שיופקד" />
        </div>

        <div className="form-group">
          <label htmlFor="monthlyDeposit">סכום הפקדה חודשי:</label>
          <input type="number" id="monthlyDeposit" placeholder="הסכום שיופקד בכל חודש" />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">תשואה שנתית ממוצעת:</label>
          <input type="number" id="interestRate" placeholder="אחוז התשואה הממוצעת שיישיג התיק" />
        </div>

        <div className="form-group">
          <label htmlFor="managementFeeDeposit">דמי ניהול מהפקדה (%):</label>
          <input type="number" id="managementFeeDeposit" placeholder="אם אין דמי ניהול, השאר ריק או רשום 0" />
        </div>

        <div className="form-group">
          <label htmlFor="managementFeeAccumulation">דמי ניהול מהצבירה (%):</label>
          <input type="number" id="managementFeeAccumulation" placeholder="אם אין דמי ניהול, השאר ריק או רשום 0" />
        </div>

        <div className="form-group">
          <label htmlFor="years">מספר שנות השקעה:</label>
          <input type="number" id="years" placeholder="מספר השנים בהן יתבצעו ההפקדות החודשיות" />
        </div>

        <div className="form-group inline">
          <input type="checkbox" id="capitalGainsTax" />
          <label htmlFor="capitalGainsTax">מס רווחי הון (25% מהרווח)</label>
        </div>

        <button onClick={calculateCompoundInterest} 
          className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          חשב
        </button>

        {result && typeof result === 'object' && (
          <div className="result mt-8">
            <div className="summary bg-gray-50 p-6 rounded-lg">
              <div>סך הפקדות: <span className="green">{formatNumber(result.totalDeposit)} ש"ח</span></div>
              <div>רווחי ריבית: <span className="green">{formatNumber(result.totalInterest)} ש"ח</span></div>
              {result.totalCapitalGainsTax > 0 && (
                <div>מס רווחי הון: <span className="red">{formatNumber(result.totalCapitalGainsTax)} ש"ח</span></div>
              )}
              <div>עלות דמי ניהול: <span className="red">{formatNumber(result.totalFees)} ש"ח</span></div>
              <div>סה"כ בקופה: <strong>{formatNumber(result.finalAmount)} ש"ח</strong></div>
            </div>
            
            <div className="toggle-details text-center mt-6 text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={() => setShowYearlyDetails(!showYearlyDetails)}>
              {showYearlyDetails ? 'הסתר פירוט' : 'הצג פירוט'}
            </div>

            {showYearlyDetails && (
              <div id="details" className="mt-6 overflow-x-auto">
                <table className="result-table w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 border">שנה</th>
                      <th className="p-2 border">הפקדות מצטברות</th>
                      <th className="p-2 border green">רווחים מצטברים</th>
                      <th className="p-2 border red">דמי ניהול מצטברים</th>
                      <th className="p-2 border">סה"כ חיסכון</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearlyData.map((year) => (
                      <tr key={year.year} className="hover:bg-gray-50">
                        <td className="p-2 border">{year.year}</td>
                        <td className="p-2 border">{formatNumber(year.accumulatedDeposits)} ש"ח</td>
                        <td className="p-2 border green">{formatNumber(year.accumulatedInterest)} ש"ח</td>
                        <td className="p-2 border red">{formatNumber(year.accumulatedFees)} ש"ח</td>
                        <td className="p-2 border">{formatNumber(year.totalAmount)} ש"ח</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {result && typeof result === 'string' && (
          <div className="error mt-4 text-red-600">{result}</div>
        )}
      </div>
    </div>
  )
}