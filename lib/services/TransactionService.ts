import { Address, createSolanaClient, getAddressCodec, getPublicKeyFromAddress, isAddress } from "gill";

const { rpc, rpcSubscriptions } = createSolanaClient({
  urlOrMoniker: `${process.env.NEXT_PUBLIC_SOLANA_API_URL}`,
});

export const getTransaction = async (address: string) => {
  try {
    const pubKey = address as Address;
    if (!isAddress(pubKey)) {
      throw new Error("Invalid address");
    }
    const transaction = await rpc.getSignaturesForAddress(pubKey, {
      limit: 100,
      before: undefined,
      until: undefined,
      commitment: "confirmed",
      minContextSlot: undefined,
    });
    console.log("Transaction:", transaction);
    return transaction;
  } catch (error) {
    console.error("Error fetching transaction:", error);
  }
  return {};
};
