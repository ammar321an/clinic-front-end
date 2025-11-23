'use client';

import { useCallback, useEffect, useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { AppointmentSearch } from '@/components/appointments/appointment-search';
import { AppointmentFilters } from '@/components/appointments/appointment-filters';
import { AppointmentTable } from '@/components/appointments/appointment-table';
import { Pagination } from '@/components/shared/pagination';
import { LoadingState } from '@/components/shared/loading-state';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Appointment, AppointmentStatus } from '@/types/appointment';
import appointmentsData from '@/lib/data/appointments.json';
import { isAppointmentUnmarked } from '@/lib/utils';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';
import { isAfter, isBefore, startOfDay } from 'date-fns';

const ITEMS_PER_PAGE = 10;

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<AppointmentStatus | 'all'>('all');
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Update unmarked status based on current date
      const updatedAppointments = appointmentsData.map((apt) => ({
        ...apt,
        status: isAppointmentUnmarked(apt.appointmentDate, apt.status)
          ? ('unmarked' as const)
          : (apt.status as Appointment['status']),
      }));

      setAppointments(updatedAppointments);
      setFilteredAppointments(updatedAppointments);
      setIsLoading(false);
    };

    loadData();
  }, []);

  // Filter appointments
  useEffect(() => {
    let filtered = [...appointments];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (apt) =>
          apt.patientName.toLowerCase().includes(query) ||
          apt.patientEmail.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((apt) => apt.status === statusFilter);
    }

    // Date range filter
    if (dateFrom) {
      filtered = filtered.filter((apt) => {
        const aptDate = startOfDay(new Date(apt.appointmentDate));
        return isAfter(aptDate, startOfDay(dateFrom)) || aptDate.getTime() === startOfDay(dateFrom).getTime();
      });
    }

    if (dateTo) {
      filtered = filtered.filter((apt) => {
        const aptDate = startOfDay(new Date(apt.appointmentDate));
        return isBefore(aptDate, startOfDay(dateTo)) || aptDate.getTime() === startOfDay(dateTo).getTime();
      });
    }

    setFilteredAppointments(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [appointments, searchQuery, statusFilter, dateFrom, dateTo]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleStatusChange = useCallback((status: AppointmentStatus | 'all') => {
    setStatusFilter(status);
  }, []);

  const handleDateRangeChange = useCallback((from?: Date, to?: Date) => {
    setDateFrom(from);
    setDateTo(to);
  }, []);

  const handleStatusUpdate = useCallback((id: string, status: 'completed' | 'cancelled') => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status } : apt))
    );
  }, []);

  const handleDelete = useCallback((id: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  }, []);

  // Pagination
  const totalPages = Math.ceil(filteredAppointments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedAppointments = filteredAppointments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (isLoading) {
    return <LoadingState size="lg" text="Loading appointments..." />;
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Appointments"
        description="Manage and track all patient appointments"
        actions={
          <Button asChild className="bg-clinic-blue hover:bg-clinic-blue-600">
            <Link href={ROUTES.CALENDAR}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              Open Calendar
            </Link>
          </Button>
        }
      />

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 md:flex-row md:items-center md:justify-between">
        <AppointmentSearch onSearch={handleSearch} />
        <AppointmentFilters
          onStatusChange={handleStatusChange}
          onDateRangeChange={handleDateRangeChange}
          currentStatus={statusFilter}
        />
      </div>

      {/* Table */}
      <AppointmentTable
        appointments={paginatedAppointments}
        onStatusUpdate={handleStatusUpdate}
        onDelete={handleDelete}
      />

      {/* Pagination */}
      {filteredAppointments.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredAppointments.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      )}
    </div>
  );
}