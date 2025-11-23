'use client';

import { CalendarIcon, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { useState } from 'react';
import { AppointmentStatus } from '@/types/appointment';

interface AppointmentFiltersProps {
  onStatusChange: (status: AppointmentStatus | 'all') => void;
  onDateRangeChange: (dateFrom?: Date, dateTo?: Date) => void;
  currentStatus: AppointmentStatus | 'all';
}

export function AppointmentFilters({
  onStatusChange,
  onDateRangeChange,
  currentStatus,
}: AppointmentFiltersProps) {
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  const handleDateFromChange = (date: Date | undefined) => {
    setDateFrom(date);
    onDateRangeChange(date, dateTo);
  };

  const handleDateToChange = (date: Date | undefined) => {
    setDateTo(date);
    onDateRangeChange(dateFrom, date);
  };

  const clearDates = () => {
    setDateFrom(undefined);
    setDateTo(undefined);
    onDateRangeChange(undefined, undefined);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Status Filter */}
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Select value={currentStatus} onValueChange={(value) => onStatusChange(value as AppointmentStatus | 'all')}>
          <SelectTrigger className="h-10 w-full text-xs sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="text-xs">All Appointments</SelectItem>
            <SelectItem value="pending" className="text-xs">Pending</SelectItem>
            <SelectItem value="completed" className="text-xs">Completed</SelectItem>
            <SelectItem value="unmarked" className="text-xs">Unmarked</SelectItem>
            <SelectItem value="cancelled" className="text-xs">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Range Filter */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full justify-start text-left text-xs font-normal sm:w-[150px]"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateFrom ? format(dateFrom, 'PP') : 'From date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateFrom}
              onSelect={handleDateFromChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <span className="hidden text-xs text-muted-foreground sm:inline">to</span>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full justify-start text-left text-xs font-normal sm:w-[150px]"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateTo ? format(dateTo, 'PP') : 'To date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateTo}
              onSelect={handleDateToChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {(dateFrom || dateTo) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearDates}
            className="h-10 text-xs"
          >
            Clear dates
          </Button>
        )}
      </div>
    </div>
  );
}