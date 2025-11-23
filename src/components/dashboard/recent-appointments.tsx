'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ROUTES } from '@/lib/routes';
import { formatDate } from '@/lib/utils';
import { Appointment } from '@/types/appointment';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RecentAppointmentsProps {
  appointments: Appointment[];
}

const statusConfig = {
  pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' },
  completed: { label: 'Completed', className: 'bg-green-100 text-green-800 hover:bg-green-100' },
  cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-800 hover:bg-red-100' },
  unmarked: { label: 'Unmarked', className: 'bg-orange-100 text-orange-800 hover:bg-orange-100' },
};

export function RecentAppointments({ appointments }: RecentAppointmentsProps) {
  const recentAppointments = appointments.slice(0, 4);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="card-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Recent Appointments</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href={ROUTES.APPOINTMENTS} className="text-xs text-clinic-blue hover:text-clinic-blue-600">
            View all
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentAppointments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Clock className="h-12 w-12 text-gray-300" />
              <p className="mt-2 text-xs text-muted-foreground">No appointments yet</p>
            </div>
          ) : (
            recentAppointments.map((appointment) => (
              <Link
                key={appointment.id}
                href={ROUTES.APPOINTMENT_DETAILS(appointment.id)}
                className="flex items-center gap-4 rounded-lg border p-3 transition-colors hover:bg-gray-50"
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-clinic-blue/10 text-xs font-medium text-clinic-blue">
                    {getInitials(appointment.patientName)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium text-gray-900">
                      {appointment.patientName}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`text-2xs ${statusConfig[appointment.status].className}`}
                    >
                      {statusConfig[appointment.status].label}
                    </Badge>
                  </div>
                  <p className="text-2xs text-muted-foreground">
                    {appointment.department} • {formatDate(appointment.appointmentDate, 'short')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-right font-medium text-gray-900">
                    {appointment.appointmentTime}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}