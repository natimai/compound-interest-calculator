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
    <div className="calculator">
      <h1>מחשבון ריבית דריבית</h1>
      
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

      <button onClick={calculateCompoundInterest}>חשב</button>

      {result && typeof result === 'object' && (
        <div className="result">
          <div className="summary">
            <div>סך הפקדות: <span className="green">{formatNumber(result.totalDeposit)} ש"ח</span></div>
            <div>רווחי ריבית: <span className="green">{formatNumber(result.totalInterest)} ש"ח</span></div>
            {result.totalCapitalGainsTax > 0 && (
              <div>מס רווחי הון: <span className="red">{formatNumber(result.totalCapitalGainsTax)} ש"ח</span></div>
            )}
            <div>עלות דמי ניהול: <span className="red">{formatNumber(result.totalFees)} ש"ח</span></div>
            <div>סה"כ בקופה: <strong>{formatNumber(result.finalAmount)} ש"ח</strong></div>
          </div>
          
          <div className="toggle-details" onClick={() => setShowYearlyDetails(!showYearlyDetails)}>
            {showYearlyDetails ? 'הסתר פירוט' : 'הצג פירוט'}
          </div>

          {showYearlyDetails && (
            <div id="details">
              <table className="result-table">
                <thead>
                  <tr>
                    <th>שנה</th>
                    <th>הפקדות מצטברות</th>
                    <th className="green">רווחים מצטברים</th>
                    <th className="red">דמי ניהול מצטברים</th>
                    <th>סה"כ חיסכון</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyData.map((year) => (
                    <tr key={year.year}>
                      <td>{year.year}</td>
                      <td>{formatNumber(year.accumulatedDeposits)} ש"ח</td>
                      <td className="green">{formatNumber(year.accumulatedInterest)} ש"ח</td>
                      <td className="red">{formatNumber(year.accumulatedFees)} ש"ח</td>
                      <td>{formatNumber(year.totalAmount)} ש"ח</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {result && typeof result === 'string' && (
        <div className="error">{result}</div>
      )}
    </div>
  )
}