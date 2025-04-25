import { ParametersTypes } from "@/app/types"

export default function processData(predata: any, parameters: ParametersTypes) {
  const nodesMap = new Map()
  const edges: any[] = []
  if (!predata) {
    console.warn("empty data was given", predata)
    return { nodesMap, edges }
  }

  //successful transaction
  //@ts-ignore
  let filterError = predata.filter((data) => data.transactionError === null)

  //filter by types
  //@ts-ignore
  //   let filterTypes = filterError.filter((data) => data.type === "UNKNOWN" || "WITHDRAW" || "DEPOSIT" || "TRANSFER")

  // console.log("filterError", filterError) // checkpoint working

  //loop all transactions
  for (const value of filterError) {
    const sig = value.signature
    const des = value.description
    const type = value.type
    const source = value.source
    const timestamp = value.timestamp

    // Convert Unix timestamp to JavaScript Date for comparison
    const txDate = new Date(Number(timestamp) * 1000)

    // Skip if transaction is before startDate (past date) or after endDate (recent date)
    if (parameters.startDate && txDate < parameters.startDate) continue
    if (parameters.endDate && txDate > parameters.endDate) continue

    //record native
    for (const nt of value.nativeTransfers || []) {
      const { fromUserAccount: from, toUserAccount: to, amount } = nt

      if (amount / 1e9 < (parameters.minValue ?? 0)) continue //minValue check

      for (const addrs of [from, to]) {
        if (!nodesMap.has(addrs)) {
          nodesMap.set(addrs, {
            address: addrs,
            balance: 0,
            size: 20,
          })
        }
      }

      //add edge
      edges.push({
        from,
        to,
        transferAmount: amount / 1e9,
        signature: sig,
        description: des,
        txType: type,
        source,
        timestamp,
      })
    }
  }
  //fetch balance for size

  return { nodesMap, edges }
}
