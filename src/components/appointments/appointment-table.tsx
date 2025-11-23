'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
import { MoreVertical, Eye, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import { Appointment } from '@/types/appointment';
import { ROUTES } from '@/lib/routes';
import { formatDate } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface AppointmentTableProps {
  appointments: Appointment[];
  onStatusUpdate: (id: string, status: 'completed' | 'cancelled') => void;
  onDelete: (id: string) => void;
}

const statusConfig = {
  pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' },
  completed: { label: 'Completed', className: 'bg-green-100 text-green-800 hover:bg-green-100' },
  cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-800 hover:bg-red-100' },
  unmarked: { label: 'Unmarked', className: 'bg-orange-100 text-orange-800 hover:bg-orange-100' },
};

export function AppointmentTable({ appointments, onStatusUpdate, onDelete }: AppointmentTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const { toast } = useToast();

  const handleDeleteClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedAppointment) {
      onDelete(selectedAppointment.id);
      toast({
        title: 'Appointment deleted',
        description: `Appointment for ${selectedAppointment.patientName} has been deleted.`,
        variant: 'default',
      });
    }
    setDeleteDialogOpen(false);
    setSelectedAppointment(null);
  };

  const handleStatusUpdate = (appointment: Appointment, status: 'completed' | 'cancelled') => {
    onStatusUpdate(appointment.id, status);
    toast({
      title: 'Status updated',
      description: `Appointment marked as ${status}.`,
      variant: 'default',
    });
  };

  if (appointments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
        <p className="text-xs text-muted-foreground">No appointments found</p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs">Patient</TableHead>
              <TableHead className="text-xs">Email</TableHead>
              <TableHead className="text-xs">Department</TableHead>
              <TableHead className="text-xs">Date & Time</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} className="cursor-pointer hover:bg-gray-50">
                <TableCell className="text-xs font-medium">
                  <Link
                    href={ROUTES.APPOINTMENT_DETAILS(appointment.id)}
                    className="hover:text-clinic-blue"
                  >
                    {appointment.patientName}
                  </Link>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {appointment.patientEmail}
                </TableCell>
                <TableCell className="text-xs">{appointment.department}</TableCell>
                <TableCell className="text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span>{formatDate(appointment.appointmentDate, 'short')}</span>
                    <span className="text-muted-foreground">{appointment.appointmentTime}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`text-2xs ${statusConfig[appointment.status].className}`}
                  >
                    {statusConfig[appointment.status].label}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link
                          href={ROUTES.APPOINTMENT_DETAILS(appointment.id)}
                          className="cursor-pointer text-xs"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      {(appointment.status === 'pending' || appointment.status === 'unmarked') && (
                        <DropdownMenuItem
                          onClick={() => handleStatusUpdate(appointment, 'completed')}
                          className="cursor-pointer text-xs"
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mark as Completed
                        </DropdownMenuItem>
                      )}
                      {appointment.status === 'pending' && (
                        <DropdownMenuItem
                          onClick={() => handleStatusUpdate(appointment, 'cancelled')}
                          className="cursor-pointer text-xs"
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          Cancel Appointment
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        onClick={() => handleDeleteClick(appointment)}
                        className="cursor-pointer text-xs text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-base">Delete Appointment</AlertDialogTitle>
            <AlertDialogDescription className="text-xs">
              Are you sure you want to delete the appointment for{' '}
              <span className="font-semibold">{selectedAppointment?.patientName}</span>? This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-xs">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 text-xs hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}