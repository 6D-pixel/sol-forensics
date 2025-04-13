export interface ParametersTypes {
  address: string
  startDate?: Date | null | undefined
  endDate?: Date | null | undefined
  minValue?: number | undefined
}

export interface TransactionGraphProps {
  parameters: ParametersTypes
  isLoading: Boolean
  hasData: Boolean
}
