export type AppointmentStatus = 'pending' | 'completed' | 'cancelled' | 'unmarked';

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorName: string;
  services: string;
  appointmentDate: string; // ISO string
  appointmentTime: string;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  createdAt: string;
}

export interface AppointmentFilters {
  status?: AppointmentStatus | 'all';
  dateFrom?: string;
  dateTo?: string;
  searchQuery?: string;
}


// Book Slot
export interface Doctor {
  id: string
  name: string
}

export interface BookedSlotsResponse {
  success: boolean
  booked_slots: string[]
}

export interface DoctorsResponse {
  success: boolean
  data: Doctor[]
}

export interface CreateAppointmentPayload {
  doctor_profile_id: string
  patient_profile_id?: string | null
  full_name: string
  email: string
  contact_no?: string
  services: string
  doctor: string
  age?: number
  appointments_date_time: string
  reason_for_visit?: string
  additional_notes?: string | null
}

export interface CreateAppointmentResponse {
  success: boolean
  message: string
  data?: any
  error?: string
}

export interface AppointmentFormData {
  doctorId: string
  doctorName: string
  fullName: string
  email: string
  contactNo: string
  services: string
  age: string
  appointmentDate: Date | undefined
  appointmentTime: string
  reasonForVisit: string
  additionalNotes: string
}