'use client'
import { ModeToggle } from "@/components/theme/ModeToggle";
import { getTransaction } from "@/lib/services/TransactionService";
export default function Home() {
  
  async function getData() {    
    await getTransaction('7cypuG1vzo4wrcb9xAvbg9kMcX8qQ3tBFEtmgBFcyMi7');
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1>Home Page</h1>
    <ModeToggle/>
    <button onClick={getData}>Fetch Transaction</button>
    </div>
  );
}
