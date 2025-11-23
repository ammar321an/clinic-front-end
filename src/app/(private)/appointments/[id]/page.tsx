'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { PageHeader } from '@/components/shared/page-header';
import { LoadingState } from '@/components/shared/loading-state';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  Mail,
  Phone,
  User,
  Building2,
  FileText,
  CheckCircle,
  XCircle,
  Trash2,
} from 'lucide-react';
import { Appointment } from '@/types/appointment';
import appointmentsData from '@/lib/data/appointments.json';
import { formatDate, isAppointmentUnmarked } from '@/lib/utils';
import { ROUTES } from '@/lib/routes';
import { useToast } from '@/hooks/use-toast';

const statusConfig = {
  pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' },
  completed: { label: 'Completed', className: 'bg-green-100 text-green-800 hover:bg-green-100' },
  cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-800 hover:bg-red-100' },
  unmarked: { label: 'Unmarked', className: 'bg-orange-100 text-orange-800 hover:bg-orange-100' },
};

export default function AppointmentDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const foundAppointment = appointmentsData.find((apt) => apt.id === params.id);

      if (foundAppointment) {
        const updatedAppointment = {
          ...foundAppointment,
          status: isAppointmentUnmarked(foundAppointment.appointmentDate, foundAppointment.status)
            ? ('unmarked' as const)
            : (foundAppointment.status as Appointment['status']),
        };
        setAppointment(updatedAppointment);
      }

      setIsLoading(false);
    };

    loadData();
  }, [params.id]);

  const handleStatusUpdate = (status: 'completed' | 'cancelled') => {
    if (!appointment) return;

    setAppointment({ ...appointment, status });
    toast({
      title: 'Status updated',
      description: `Appointment marked as ${status}.`,
      variant: 'default',
    });
  };

  const handleDelete = () => {
    toast({
      title: 'Appointment deleted',
      description: 'The appointment has been successfully deleted.',
      variant: 'default',
    });
    router.push(ROUTES.APPOINTMENTS);
  };

  if (isLoading) {
    return <LoadingState size="lg" text="Loading appointment details..." />;
  }

  if (!appointment) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-sm text-muted-foreground">Appointment not found</p>
        <Button variant="outline" onClick={() => router.push(ROUTES.APPOINTMENTS)} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Appointments
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Appointment Details"
        description={`Appointment ID: ${appointment.id}`}
        actions={
          <Button variant="outline" onClick={() => router.push(ROUTES.APPOINTMENTS)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        }
      />

      {/* Status and Actions */}
      <Card className="card-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground">Status:</span>
              <Badge
                variant="secondary"
                className={`text-xs ${statusConfig[appointment.status].className}`}
              >
                {statusConfig[appointment.status].label}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              {(appointment.status === 'pending' || appointment.status === 'unmarked') && (
                <Button
                  size="sm"
                  onClick={() => handleStatusUpdate('completed')}
                  className="bg-green-600 text-xs hover:bg-green-700"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as Completed
                </Button>
              )}
              {appointment.status === 'pending' && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleStatusUpdate('cancelled')}
                  className="text-xs"
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Cancel Appointment
                </Button>
              )}
              <Button
                size="sm"
                variant="destructive"
                onClick={() => setDeleteDialogOpen(true)}
                className="text-xs"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Patient Information */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Patient Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="mt-0.5 h-5 w-5 text-clinic-blue" />
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">Full Name</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{appointment.patientName}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-clinic-blue" />
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">Email Address</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{appointment.patientEmail}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-clinic-blue" />
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">Phone Number</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{appointment.patientPhone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointment Information */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Appointment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CalendarIcon className="mt-0.5 h-5 w-5 text-clinic-blue" />
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">Date</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {formatDate(appointment.appointmentDate, 'long')}
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-clinic-blue" />
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">Time</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{appointment.appointmentTime}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 text-clinic-blue" />
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">Department</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{appointment.department}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <User className="mt-0.5 h-5 w-5 text-clinic-blue" />
              <div className="flex-1">
                <p className="text-xs font-medium text-muted-foreground">Doctor</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{appointment.doctorName}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Details */}
      <Card className="card-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Additional Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 text-clinic-blue" />
            <div className="flex-1">
              <p className="text-xs font-medium text-muted-foreground">Reason for Visit</p>
              <p className="mt-1 text-sm text-gray-900">{appointment.reason}</p>
            </div>
          </div>

          {appointment.notes && (
            <>
              <Separator />
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-5 w-5 text-clinic-blue" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground">Notes</p>
                  <p className="mt-1 text-sm text-gray-900">{appointment.notes}</p>
                </div>
              </div>
            </>
          )}

          <Separator />

          <div className="flex items-start gap-3">
            <CalendarIcon className="mt-0.5 h-5 w-5 text-clinic-blue" />
            <div className="flex-1">
              <p className="text-xs font-medium text-muted-foreground">Created At</p>
              <p className="mt-1 text-sm text-gray-900">
                {formatDate(appointment.createdAt, 'long')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Unmarked Warning */}
      {appointment.status === 'unmarked' && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-orange-600" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-orange-900">Unmarked Appointment</h3>
                <p className="mt-1 text-xs text-orange-700">
                  This appointment date has passed but hasn't been marked as completed. Please update
                  the status to keep your records accurate.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-base">Delete Appointment</AlertDialogTitle>
            <AlertDialogDescription className="text-xs">
              Are you sure you want to delete this appointment? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-xs">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 text-xs hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}