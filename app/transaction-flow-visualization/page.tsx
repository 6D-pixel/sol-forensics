import WalletAddress from "@/components/WalletAddress";

export default function TransactionFlowPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Transaction Flow Visualization
      </h1>
      {/* need a address state */}
      <WalletAddress/>
    </div>
  );
}
