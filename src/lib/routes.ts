export const ROUTES = {
  DASHBOARD: '/dashboard',
  APPOINTMENTS: '/appointments',
  APPOINTMENT_DETAILS: (id: string) => `/appointments/${id}`,
  CALENDAR: '/calendar',
  PROFILE: '/profile',
} as const;

export const PRIVATE_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.APPOINTMENTS,
  ROUTES.CALENDAR,
  ROUTES.PROFILE,
];