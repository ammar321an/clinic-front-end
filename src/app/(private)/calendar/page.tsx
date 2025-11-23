'use client';

import { useEffect, useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { CalendarView } from '@/components/calendar/calendar-view';
import { LoadingState } from '@/components/shared/loading-state';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CalendarEvent } from '@/types/event';
import eventsData from '@/lib/data/events.json';
import { useToast } from '@/hooks/use-toast';
import { Moon, Sun } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [eventDetailOpen, setEventDetailOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setEvents(eventsData as CalendarEvent[]);
      setIsLoading(false);
    };

    loadData();
  }, []);

  const handleEventCreate = (newEvent: Omit<CalendarEvent, 'id'>) => {
    const event: CalendarEvent = {
      ...newEvent,
      id: `evt-${Date.now()}`,
    };

    setEvents([...events, event]);
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setEventDetailOpen(true);
  };

  const handleEventDelete = () => {
    if (selectedEvent) {
      setEvents(events.filter((e) => e.id !== selectedEvent.id));
      toast({
        title: 'Event deleted',
        description: 'The event has been successfully deleted.',
      });
      setEventDetailOpen(false);
      setSelectedEvent(null);
    }
  };

  if (isLoading) {
    return <LoadingState size="lg" text="Loading calendar..." />;
  }

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col space-y-6">
      <PageHeader
        title="Calendar"
        description="View and manage your appointments and events"
        actions={
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-gray-500" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-clinic-blue"
              />
              <Moon className="h-4 w-4 text-gray-500" />
              <Label htmlFor="dark-mode" className="text-xs text-gray-600">
                Dark Mode
              </Label>
            </div>
          </div>
        }
      />

      <CalendarView
        events={events}
        onEventCreate={handleEventCreate}
        onEventClick={handleEventClick}
        isDarkMode={isDarkMode}
      />

      {/* Event Detail Dialog */}
      <Dialog open={eventDetailOpen} onOpenChange={setEventDetailOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg">Event Details</DialogTitle>
            <DialogDescription className="text-xs">
              View and manage event information
            </DialogDescription>
          </DialogHeader>

          {selectedEvent && (
            <div className="space-y-4">
              <div
                className="rounded-lg p-4 text-white"
                style={{ backgroundColor: selectedEvent.color }}
              >
                <h3 className="text-base font-semibold">{selectedEvent.title}</h3>
                {selectedEvent.patientName && (
                  <p className="mt-1 text-sm opacity-90">{selectedEvent.patientName}</p>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Date & Time</p>
                  <p className="mt-1 text-sm text-gray-900">
                    {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedEvent.startTime} - {selectedEvent.endTime}
                  </p>
                </div>

                {selectedEvent.description && (
                  <>
                    <Separator />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Description</p>
                      <p className="mt-1 text-sm text-gray-900">{selectedEvent.description}</p>
                    </div>
                  </>
                )}

                {selectedEvent.appointmentId && (
                  <>
                    <Separator />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        Linked Appointment
                      </p>
                      <Button
                        variant="link"
                        size="sm"
                        asChild
                        className="mt-1 h-auto p-0 text-xs text-clinic-blue"
                      >
                        <Link href={ROUTES.APPOINTMENT_DETAILS(selectedEvent.appointmentId)}>
                          View Appointment Details →
                        </Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setEventDetailOpen(false)}
                  className="flex-1 text-xs"
                >
                  Close
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleEventDelete}
                  className="flex-1 text-xs"
                >
                  Delete Event
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}