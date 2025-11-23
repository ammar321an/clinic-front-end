export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO string
  startTime: string;
  endTime: string;
  color: string;
  description?: string;
  patientName?: string;
  appointmentId?: string;
}