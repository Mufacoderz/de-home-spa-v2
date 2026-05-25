// types/midtrans.d.ts
export interface MidtransResponse {
  status_code: string
  status_message: string
  transaction_id: string
  order_id: string
  gross_amount: string
  payment_type: string
  transaction_time: string
  transaction_status: string
  fraud_status: string
}

export interface SnapPayOptions {
  onSuccess?: (result: MidtransResponse) => void
  onPending?: (result: MidtransResponse) => void
  onError?: (result: MidtransResponse) => void
  onClose?: () => void
}

export interface SnapInstance {
  pay: (token: string, options?: SnapPayOptions) => void
}

declare global {
  interface Window {
    snap?: SnapInstance
  }
}