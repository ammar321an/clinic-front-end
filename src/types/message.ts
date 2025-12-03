export interface CreateMessagePayload {
  name: string
  email: string
  contact_no: number
  subject: string
  message: string
}

export interface CreateMessageResponse {
  success: boolean
  message: string
  data?: {
    id: string
    name: string
    email: string
    subject: string
    created_at: string
  }
  error?: string
}

export interface MessageSuccessData {
  id: string
  name: string
  email: string
  subject: string
  created_at: string
}