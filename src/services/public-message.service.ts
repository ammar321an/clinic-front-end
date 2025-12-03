import { createClient } from '@/utils/supabase/client'
import type { CreateMessagePayload, CreateMessageResponse } from '@/types/message'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const publicMessageService = {
  // Create patient message
  async createMessage(
    payload: CreateMessagePayload
  ): Promise<CreateMessageResponse> {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/public-messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY || '',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()

    // Handle any non-success response
    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to send message')
    }

    return data
  }
}