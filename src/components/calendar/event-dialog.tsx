'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ColorPicker } from './color-picker';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { CalendarEvent } from '@/types/event';
import { useToast } from '@/hooks/use-toast';

interface EventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (event: Omit<CalendarEvent, 'id'>) => void;
  event?: CalendarEvent;
}

export function EventDialog({ open, onOpenChange, onSave, event }: EventDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    date: new Date(),
    startTime: '09:00',
    endTime: '10:00',
    color: '#0046c0',
    description: '',
    patientName: '',
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title,
        date: new Date(event.date),
        startTime: event.startTime,
        endTime: event.endTime,
        color: event.color,
        description: event.description || '',
        patientName: event.patientName || '',
      });
    } else {
      setFormData({
        title: '',
        date: new Date(),
        startTime: '09:00',
        endTime: '10:00',
        color: '#0046c0',
        description: '',
        patientName: '',
      });
    }
  }, [event, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter an event title',
        variant: 'destructive',
      });
      return;
    }

    onSave({
      title: formData.title,
      date: formData.date.toISOString(),
      startTime: formData.startTime,
      endTime: formData.endTime,
      color: formData.color,
      description: formData.description,
      patientName: formData.patientName || undefined,
    });

    toast({
      title: 'Success',
      description: event ? 'Event updated successfully' : 'Event created successfully',
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">
            {event ? 'Edit Event' : 'Add New Event'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-xs">
              Event Title *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter event title"
              className="text-xs"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="patientName" className="text-xs">
              Patient Name (Optional)
            </Label>
            <Input
              id="patientName"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              placeholder="Enter patient name"
              className="text-xs"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs">Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left text-xs font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(formData.date, 'PPP')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => date && setFormData({ ...formData, date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime" className="text-xs">
                Start Time *
              </Label>
              <Input
                id="startTime"
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                className="text-xs"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endTime" className="text-xs">
                End Time *
              </Label>
              <Input
                id="endTime"
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                className="text-xs"
                required
              />
            </div>
          </div>

          <ColorPicker
            selectedColor={formData.color}
            onColorChange={(color) => setFormData({ ...formData, color })}
          />

          <div className="space-y-2">
            <Label htmlFor="description" className="text-xs">
              Description (Optional)
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter event description"
              className="text-xs"
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="text-xs">
              Cancel
            </Button>
            <Button type="submit" className="bg-clinic-blue text-xs hover:bg-clinic-blue-600">
              {event ? 'Update Event' : 'Create Event'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}