export interface ParametersTypes {
  address: string
  startDate?: Date | null | undefined
  endDate?: Date | null | undefined
  minValue?: number | undefined
}

export interface TransactionGraphProps {
  preData: undefined | any
  isLoading: Boolean
  hasData: Boolean
}

export interface Node {
  key: String
  label: String
  size: Number
  x: Number
  y: Number
  color: String
  type?: "circle" | "square"
  hidden?: boolean
  zIndex?: Number
}

export interface Edge {
  key: String
  size: Number
  color: string
  label: String
  type?: "liner" | "arrow" | "curve"
  from: String
  to: String
  signature: String
  description: String
  Type?: "stake" | "Transfer"
  source?: undefined
  hidden?: Boolean
  zIndex?: Number
}

export interface GraphData {
  nodesMap: Map<
    string,
    {
      address: string
      balance: number
      size: number
      x: number
      y: number
      color: string
    }
  >
  edges: Array<{
    from: string
    to: string
    transferAmount: number
    signature: string
    description: string
    type: string
    source: string
  }>
}