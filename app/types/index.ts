export interface ParametersTypes {
  address: string
  startDate?: Date | null | undefined
  endDate?: Date | null | undefined
  minValue?: number | undefined
}

export interface TransactionGraphProps {
  preData:undefined | any
  isLoading: Boolean
  hasData: Boolean
}