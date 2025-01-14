import Head from 'next/head';
import { GrossToNetCalculator } from '../components/GrossToNetCalculator';

export default function GrossToNetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <Head>
        <title>מחשבון שכר ברוטו לנטו | DeRibit</title>
        <meta
          name="description"
          content="חשב את השכר נטו שלך בקלות בעזרת מחשבון שכר ברוטו לנטו. מותאם לשנת 2025."
        />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">
          מחשבון שכר ברוטו לנטו
        </h1>
        <GrossToNetCalculator />
      </main>
    </div>
  );
}
