"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { assertIsAddress } from "gill";

export default function TransactionFlowPage() {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      assertIsAddress(address);
    } catch (e) {
      console.log("error wallet address", e);
    }
    console.log("Wallet address:", address);
  };
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Transaction Flow Visualization
      </h1>
      {/* wallet Address input */}
      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter Solana wallet address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button type="submit">Analyze Wallet</Button>
        </form>
      </div>
      
    </div>
  );
}
