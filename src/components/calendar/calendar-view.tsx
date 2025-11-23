'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { CalendarEvent } from '@/types/event';
import { cn } from '@/lib/utils';
import { EventDialog } from './event-dialog';

dayjs.extend(isoWeek);

interface CalendarViewProps {
  events: CalendarEvent[];
  onEventCreate: (event: Omit<CalendarEvent, 'id'>) => void;
  onEventClick: (event: CalendarEvent) => void;
  isDarkMode?: boolean;
}

const timeSlots = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00',
];

export function CalendarView({ events, onEventCreate, onEventClick, isDarkMode = false }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [eventDialogOpen, setEventDialogOpen] = useState(false);

  // Get the start of the week (Monday)
  const startOfWeek = currentDate.startOf('isoWeek');
  const weekDays = Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, 'day'));

  const goToPreviousWeek = () => {
    setCurrentDate(currentDate.subtract(1, 'week'));
  };

  const goToNextWeek = () => {
    setCurrentDate(currentDate.add(1, 'week'));
  };

  const goToToday = () => {
    setCurrentDate(dayjs());
  };

  const goToSpecificDate = (date: Date) => {
    setCurrentDate(dayjs(date));
  };

  const isToday = (date: dayjs.Dayjs) => {
    return date.isSame(dayjs(), 'day');
  };

  // Get events for a specific day and time slot
  const getEventsForSlot = (day: dayjs.Dayjs, timeSlot: string) => {
    return events.filter((event) => {
      const eventDate = dayjs(event.date);
      const eventStartTime = event.startTime;
      
      return (
        eventDate.isSame(day, 'day') &&
        eventStartTime === timeSlot
      );
    });
  };

  // Calculate event height based on duration
  const calculateEventHeight = (startTime: string, endTime: string) => {
    const start = dayjs(`2000-01-01 ${startTime}`);
    const end = dayjs(`2000-01-01 ${endTime}`);
    const durationInMinutes = end.diff(start, 'minute');
    const heightPerMinute = 60 / 60; // 60px per hour / 60 minutes
    return durationInMinutes * heightPerMinute;
  };

  return (
    <div className={cn('flex flex-col h-full', isDarkMode && 'dark')}>
      {/* Calendar Header */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousWeek}
              className="h-9 w-9 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToToday}
              className="text-xs"
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNextWeek}
              className="h-9 w-9 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {startOfWeek.format('MMM D')} - {startOfWeek.add(6, 'day').format('MMM D, YYYY')}
          </h2>
        </div>

        <Button
          onClick={() => setEventDialogOpen(true)}
          className="bg-clinic-blue text-xs hover:bg-clinic-blue-600"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-auto rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-700">
        <div className="min-w-[800px]">
          {/* Days Header */}
          <div className="sticky top-0 z-20 grid grid-cols-8 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="border-r p-2 dark:border-gray-700" />
            {weekDays.map((day) => (
              <div
                key={day.format('YYYY-MM-DD')}
                className={cn(
                  'border-r p-2 text-center dark:border-gray-700',
                  isToday(day) && 'bg-clinic-blue/10 dark:bg-clinic-blue/20'
                )}
              >
                <div className="text-2xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  {day.format('ddd')}
                </div>
                <div
                  className={cn(
                    'mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold',
                    isToday(day)
                      ? 'bg-clinic-blue text-white'
                      : 'text-gray-900 dark:text-white'
                  )}
                >
                  {day.format('D')}
                </div>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="relative">
            {timeSlots.map((timeSlot, index) => (
              <div
                key={timeSlot}
                className="grid grid-cols-8"
                style={{ height: '60px' }}
              >
                {/* Time Label */}
                <div className="border-r border-b p-2 text-2xs text-gray-500 dark:text-gray-400 dark:border-gray-700">
                  {timeSlot}
                </div>

                {/* Day Cells */}
                {weekDays.map((day) => {
                  const slotEvents = getEventsForSlot(day, timeSlot);
                  
                  return (
                    <div
                      key={`${day.format('YYYY-MM-DD')}-${timeSlot}`}
                      className={cn(
                        'relative border-r border-b p-1 dark:border-gray-700',
                        isToday(day) && 'bg-clinic-blue/5 dark:bg-clinic-blue/10'
                      )}
                    >
                      {slotEvents.map((event) => {
                        const height = calculateEventHeight(event.startTime, event.endTime);
                        
                        return (
                          <button
                            key={event.id}
                            onClick={() => onEventClick(event)}
                            className="absolute left-1 right-1 rounded px-2 py-1 text-left text-2xs font-medium text-white transition-all hover:opacity-90 hover:shadow-md"
                            style={{
                              backgroundColor: event.color,
                              height: `${height}px`,
                              minHeight: '30px',
                              zIndex: 10,
                            }}
                          >
                            <div className="truncate font-semibold">{event.title}</div>
                            {event.patientName && (
                              <div className="truncate opacity-90">{event.patientName}</div>
                            )}
                            <div className="truncate opacity-75">
                              {event.startTime} - {event.endTime}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Dialog */}
      <EventDialog
        open={eventDialogOpen}
        onOpenChange={setEventDialogOpen}
        onSave={onEventCreate}
      />
    </div>
  );
}