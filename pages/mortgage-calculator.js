import MortgageCalculator from '../components/MortgageCalculator';
import Layout from '../components/Layout';

export default function MortgageCalculatorPage() {
  return (
    <Layout>
      <div className="calculator-container">
        <h1>מחשבון משכנתא</h1>
        <MortgageCalculator />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'מחשבון משכנתא | מחשבונים פיננסיים',
      description: 'מחשבון משכנתא מתקדם - השוואת מסלולים, לוח סילוקין ופירעון מוקדם'
    }
  };
}