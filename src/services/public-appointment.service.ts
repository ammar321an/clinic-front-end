import { createClient } from '@/utils/supabase/client'
import type {
  Doctor,
  DoctorsResponse,
  BookedSlotsResponse,
  CreateAppointmentPayload,
  CreateAppointmentResponse,
} from '@/types/appointment'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const publicAppointmentService = {
  // Get all doctors
  async getDoctors(): Promise<Doctor[]> {
    const supabase = createClient()
    
    const { data, error } = await supabase.functions.invoke<DoctorsResponse>(
      'public-appointments',
      {
        method: 'GET',
      }
    )

    if (error) throw error

    return data?.data || []
  },

  // Get booked slots for a doctor on a specific date
  async getBookedSlots(doctorId: string, date: string): Promise<string[]> {
    const supabase = createClient()
    
    const { data, error } = await supabase.functions.invoke<BookedSlotsResponse>(
      `public-appointments/availability?doctor_id=${doctorId}&date=${date}`,
      {
        method: 'GET',
      }
    )

    if (error) throw error

    return data?.booked_slots || []
  },

  // Create appointment
  async createAppointment(
    payload: CreateAppointmentPayload
  ): Promise<CreateAppointmentResponse> {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/public-appointments`,
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

    // Handle any non-success response (including 409 conflict)
    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to create appointment')
    }

    return data
  }
}