export interface ApiResponseSignature {
  data: {
    jsonrpc: string
    id: string
    result: [
      {
        signature: string
        slot: number
        err: null
        memo: string | null
        blockTime: Number | null
        confirmationStatus: "processed" | "confirmed" | "finalized"
      }
    ]
  }
}

export interface ParametersTypes {
  address: string
  startDate?: Date | null | undefined
  endDate?: Date | null | undefined
  minValue?: number | undefined
}
