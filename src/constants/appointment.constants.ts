export const SERVICES = [
  "Saringan dan Rawatan Awal Kanser Reproduktif",
  "Imbasan Antenatal dan Proses Kelahiran",
  "Pembedahan Ketumbuhan Ovari dan Rahim",
  "Pembedahan Tiub Peranakan dan Kesuburan",
  "Histeroskopi/Kolposkopi",
  "Lain-lain",
] as const

export const WORKING_DAYS = [1, 2, 3, 4, 5, 6] // Monday to Saturday (0 = Sunday)

export const APPOINTMENT_DURATION_MINUTES = 30 // Change to 60 for 1-hour slots

export const WORKING_HOURS = {
  start: 9, // 9 AM
  end: 17,  // 5 PM
} as const

// Generate time slots based on duration
export function generateTimeSlots(durationMinutes: number = APPOINTMENT_DURATION_MINUTES) {
  const slots: string[] = []
  const { start, end } = WORKING_HOURS
  
  for (let hour = start; hour < end; hour++) {
    for (let minute = 0; minute < 60; minute += durationMinutes) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      slots.push(time)
    }
  }
  
  // Add final slot if it fits
  if ((end * 60) % durationMinutes === 0) {
    slots.push(`${end.toString().padStart(2, '0')}:00`)
  }
  
  return slots
}

export const TOOLTIP_CONTENT = {
  reason_for_visit: "Describe the main purpose of your appointment (e.g., routine checkup, follow-up visit, specific symptoms)",
  additional_notes: "Any additional information the doctor should know (e.g., allergies, current medications, special requirements)"
} as const