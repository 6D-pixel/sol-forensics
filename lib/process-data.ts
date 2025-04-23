export default function processData(predata: any) {
  const nodesMap = new Map()
  const edges: any[] = []
  if (!predata) {
    console.log("empty data was given", predata)
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

    //record native
    for (const nt of value.nativeTransfers || []) {
      const { fromUserAccount: from, toUserAccount: to, amount } = nt

      //add node
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
      })
    }
  }
  //fetch balance for size

  console.log(nodesMap)
  console.log("edges", edges)

  return { nodesMap, edges }
}