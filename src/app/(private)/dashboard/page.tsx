'use client';

import { useEffect, useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { RecentAppointments } from '@/components/dashboard/recent-appointments';
import { AppointmentsChart } from '@/components/dashboard/appointments-chart';
import { DepartmentDistribution } from '@/components/dashboard/department-distribution';
import { LoadingState } from '@/components/shared/loading-state';
import { Calendar, CheckCircle, Clock, Users } from 'lucide-react';
import { Appointment } from '@/types/appointment';
import appointmentsData from '@/lib/data/appointments.json';
import { isAppointmentUnmarked } from '@/lib/utils';

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Update unmarked status based on current date
      const updatedAppointments = appointmentsData.map(apt => ({
        ...apt,
        status: isAppointmentUnmarked(apt.appointmentDate, apt.status) 
          ? 'unmarked' as const
          : apt.status as Appointment['status']
      }));
      
      setAppointments(updatedAppointments);
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <LoadingState size="lg" text="Loading dashboard..." />;
  }

  // Calculate statistics
  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter((apt) => apt.status === 'pending').length;
  const completedAppointments = appointments.filter((apt) => apt.status === 'completed').length;
  const unmarkedAppointments = appointments.filter((apt) => apt.status === 'unmarked').length;

  // Mock total users - in real app, this would come from API
  const totalUsers = 156;

  // Prepare chart data (last 7 days)
  const chartData = [
    { name: 'Mon', total: 12 },
    { name: 'Tue', total: 19 },
    { name: 'Wed', total: 8 },
    { name: 'Thu', total: 15 },
    { name: 'Fri', total: 22 },
    { name: 'Sat', total: 10 },
    { name: 'Sun', total: 6 },
  ];

  // Prepare department distribution data
  const departmentCounts = appointments.reduce((acc, apt) => {
    acc[apt.department] = (acc[apt.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const departmentData = Object.entries(departmentCounts).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your clinic's appointments."
      />

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Appointments"
          value={totalAppointments}
          icon={Calendar}
          description="All time appointments"
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Pending"
          value={pendingAppointments}
          icon={Clock}
          description="Awaiting confirmation"
          className="border-l-4 border-l-yellow-500"
        />
        <StatsCard
          title="Completed"
          value={completedAppointments}
          icon={CheckCircle}
          description="Successfully completed"
          className="border-l-4 border-l-green-500"
        />
        <StatsCard
          title="Registered Users"
          value={totalUsers}
          icon={Users}
          description="Total patients"
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      {/* Charts and Recent Appointments */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AppointmentsChart data={chartData} />
        <DepartmentDistribution data={departmentData} />
      </div>

      {/* Recent Appointments */}
      <RecentAppointments appointments={appointments} />

      {/* Unmarked Appointments Alert */}
      {unmarkedAppointments > 0 && (
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-orange-600" />
            <div>
              <h3 className="text-xs font-semibold text-orange-900">
                {unmarkedAppointments} Unmarked Appointment{unmarkedAppointments > 1 ? 's' : ''}
              </h3>
              <p className="mt-1 text-xs text-orange-700">
                You have past appointments that haven't been marked as completed. Please review and update their status.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}