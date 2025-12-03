"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, InfoIcon, Loader2 } from "lucide-react";
import { publicAppointmentService } from "@/services/public-appointment.service";
import { SERVICES, generateTimeSlots, TOOLTIP_CONTENT, WORKING_DAYS, APPOINTMENT_DURATION_MINUTES } from "@/constants/appointment.constants";
import { useToast } from "@/hooks/use-toast";
import type { Doctor } from "@/types/appointment";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SuccessDialog from "./SuccessDialog";

// Form validation schema
const formSchema = z.object({
  doctorId: z.string().min(1, "Please select a doctor"),
  doctorName: z.string().min(1, "Doctor name is required"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().min(10, "Contact number must be at least 10 digits"),
  services: z.string().min(1, "Please select a service"),
  age: z.string().min(1, "Age is required"),
  appointmentDate: z.date().refine((date) => date !== undefined, {
    message: "Please select an appointment date",
  }),
  appointmentTime: z.string().min(1, "Please select an appointment time"),
  reasonForVisit: z.string().min(5, "Reason must be at least 5 characters"),
  additionalNotes: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

const AppointmentForm: React.FC = () => {
  const { toast } = useToast();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [appointmentResponse, setAppointmentResponse] = useState<any>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      doctorId: "",
      doctorName: "",
      fullName: "",
      email: "",
      contactNo: "",
      services: "",
      age: "",
      appointmentDate: undefined,
      appointmentTime: "",
      reasonForVisit: "",
      additionalNotes: "",
    },
  });

  // Check URL params on mount to restore success dialog
  useEffect(() => {
    const appointmentId = searchParams.get('appointment_id');
    
    if (appointmentId) {
      // Try to get appointment data from sessionStorage
      const storedData = sessionStorage.getItem('appointment_success');
      
      if (storedData) {
        try {
          const data = JSON.parse(storedData);
          if (data.appointment_id === appointmentId) {
            setAppointmentResponse(data);
            setShowSuccessDialog(true);
          }
        } catch (error) {
          console.error('Failed to parse stored appointment data');
        }
      } else {
        // If no session data but URL has appointment_id, redirect to clean URL
        router.replace('/appointment');
      }
    }
  }, [searchParams, router]);

  // Fetch doctors on mount
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const data = await publicAppointmentService.getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast({
          title: "Error",
          description: "Failed to load doctors. Please refresh the page.",
          className: "bg-white border-red-500 text-red-700",
          duration: 3000,
        });
      } finally {
        setLoadingDoctors(false);
      }
    }

    fetchDoctors();
  }, [toast]);

  // Fetch booked slots when doctor and date are selected
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if ((name === "doctorId" || name === "appointmentDate") && value.doctorId && value.appointmentDate) {
        fetchBookedSlots(value.doctorId, value.appointmentDate);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  async function fetchBookedSlots(doctorId: string, date: Date) {
    setLoadingSlots(true);
    try {
      const dateStr = format(date, "yyyy-MM-dd");
      const slots = await publicAppointmentService.getBookedSlots(doctorId, dateStr);
      setBookedSlots(slots);
    } catch (error) {
      console.error("Error fetching slots:", error);
      toast({
        title: "Error",
        description: "Failed to load available time slots.",
        className: "bg-white border-red-500 text-red-700",
        duration: 3000,
      });
    } finally {
      setLoadingSlots(false);
    }
  }

  // Generate available time slots
  const getAvailableTimeSlots = () => {
    const selectedDate = form.watch("appointmentDate");
    const allSlots = generateTimeSlots(APPOINTMENT_DURATION_MINUTES, selectedDate);
    
    if (!selectedDate) return allSlots;

    const now = new Date();
    const isToday = format(selectedDate, "yyyy-MM-dd") === format(now, "yyyy-MM-dd");

    return allSlots.filter((slot) => {
      // Disable past times if today
      if (isToday) {
        const [hours, minutes] = slot.split(":");
        const slotTime = new Date(selectedDate);
        slotTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        
        if (slotTime <= now) return false;
      }

      // Disable booked slots
      const slotDateTime = new Date(selectedDate);
      const [hours, minutes] = slot.split(":");
      slotDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      return !bookedSlots.some((bookedSlot) => {
        const bookedDate = new Date(bookedSlot);
        return bookedDate.getTime() === slotDateTime.getTime();
      });
    });
  };

  // Handle doctor selection
  const handleDoctorChange = (doctorId: string) => {
    const selectedDoctor = doctors.find((d) => d.id === doctorId);
    if (selectedDoctor) {
      form.setValue("doctorId", doctorId);
      form.setValue("doctorName", selectedDoctor.name);
      form.setValue("appointmentTime", "");
    }
  };

  // Handle date change
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      form.setValue("appointmentDate", date);
      form.setValue("appointmentTime", "");
    }
  };

  // Submit handler
  async function onSubmit(values: FormSchema) {
    setIsSubmitting(true);

    try {
      const dateStr = format(values.appointmentDate, 'yyyy-MM-dd');
      const [hours, minutes] = values.appointmentTime.split(":");
      const isoDateTime = `${dateStr}T${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00+08:00`;

      const payload = {
        doctor_profile_id: values.doctorId,
        patient_profile_id: null,
        full_name: values.fullName,
        email: values.email,
        contact_no: values.contactNo,
        services: values.services,
        doctor: values.doctorName,
        age: parseInt(values.age),
        appointments_date_time: isoDateTime,
        reason_for_visit: values.reasonForVisit,
        additional_notes: values.additionalNotes || null,
      };

      const response = await publicAppointmentService.createAppointment(payload);

      // Store appointment data in sessionStorage
      sessionStorage.setItem('appointment_success', JSON.stringify(response.data));

      // Update URL with appointment ID
      const newUrl = `/appointment?appointment_id=${response.data.appointment_id}`;
      router.push(newUrl, { scroll: false });

      // Show success dialog
      setAppointmentResponse(response.data);
      setShowSuccessDialog(true);

      // Reset form
      form.reset();
      setBookedSlots([]);
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to create appointment. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  // Disable Sundays and past dates
  const disabledDays = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return !WORKING_DAYS.includes(day) || date < today;
  };

  return (
    <div className="appointment-area-two ptb-100">
      <div className="container">
        <div className="row align-items-center appointment-wrap-two">
          <div className="col-lg-7">
            <div className="appointment-item appointment-item-two">
              <div className="appointment-shape">
                <Image
                  src="/images/hart-img1.png"
                  alt="Shape"
                  width={360}
                  height={264}
                />
              </div>

              <h2 className="text-[#0046c0] font-semibold text-[30px] mb-4">
                Book your appointment
              </h2>
              <span className="block text-[#344c5d] text-[15px] font-semibold mb-12">
                We will confirm your appointment within 2 hours
              </span>

              {/* SCOPED RESET CONTAINER - Bypasses template CSS */}
              <div className="mt-12 appointment-form-fix">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Full Name */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Name</label>
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  placeholder="Enter Your Name" 
                                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Email</label>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="Enter Your Email" 
                                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Phone */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Phone</label>
                        <FormField
                          control={form.control}
                          name="contactNo"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  placeholder="Enter Your Number" 
                                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Age */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Age</label>
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  type="number"
                                  placeholder="Your Age" 
                                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Services */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Services</label>
                        <FormField
                          control={form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full h-10 px-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white flex items-center justify-between">
                                    <span className="truncate text-left block flex-1">{field.value || "Select a service"}</span>
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white max-w-[400px] w-auto">
                                  {SERVICES.map((service) => (
                                    <SelectItem key={service} value={service} className="max-w-none">
                                      <div className="whitespace-normal break-words">{service}</div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Doctor */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Doctor</label>
                        <FormField
                          control={form.control}
                          name="doctorId"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={handleDoctorChange}
                                value={field.value}
                                disabled={loadingDoctors}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full h-10 px-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                                    <SelectValue placeholder="Choose Your Doctor" className="truncate" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white">
                                  {doctors.map((doctor) => (
                                    <SelectItem key={doctor.id} value={doctor.id} className="truncate">
                                      {doctor.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Appointment Date */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Appointment Date</label>
                        <FormField
                          control={form.control}
                          name="appointmentDate"
                          render={({ field }) => (
                            <FormItem>
                              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      disabled={!form.watch("doctorId")}
                                      className={`w-full h-10 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-left font-normal flex items-center justify-start disabled:opacity-50 disabled:cursor-not-allowed ${
                                        !field.value && "text-gray-500"
                                      }`}
                                    >
                                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                  <PopoverContent 
                                    className="w-auto p-0 bg-white rounded-lg overflow-hidden" 
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={(date) => {
                                        handleDateChange(date);
                                        setIsCalendarOpen(false);
                                      }}
                                      disabled={disabledDays}
                                      initialFocus
                                      className="rounded-lg"
                                    />
                                  </PopoverContent>
                              </Popover>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Appointment Time */}
                      <div className="w-full">
                        <label className="text-sm font-medium text-gray-700 block mb-2">Appointment Time</label>
                        <FormField
                          control={form.control}
                          name="appointmentTime"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                                disabled={!form.watch("doctorId") || !form.watch("appointmentDate") || loadingSlots}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full h-10 px-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white flex items-center">
                                    <SelectValue placeholder="Select a service" className="truncate text-left" />  {/* ADD text-left */}
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white">
                                  {getAvailableTimeSlots().map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                      {slot}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Reason for Visit - Full Width */}
                    <div className="w-full mb-6">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                        Reason for Visit
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-900 text-white">
                              <p className="max-w-xs">{TOOLTIP_CONTENT.reason_for_visit}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </label>
                      <FormField
                        control={form.control}
                        name="reasonForVisit"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., Routine checkup, follow-up visit, specific symptoms"
                                className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-600 mt-1" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Additional Notes - Full Width */}
                    <div className="w-full mb-6">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                        Additional Notes (Optional)
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-900 text-white">
                              <p className="max-w-xs">{TOOLTIP_CONTENT.additional_notes}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </label>
                      <FormField
                        control={form.control}
                        name="additionalNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., Allergies, current medications, special requirements"
                                className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-600 mt-1" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div
              className="appointment-item-two-right"
              style={{ backgroundImage: `url(/images/appointment1.jpg)` }}
            >
              <div className="appointment-item-content">
                <h2>Working Hours</h2>
                <ul>
                  <li>Monday <span>9:00 AM - 5:00 PM</span></li>
                  <li>Tuesday <span>9:00 AM - 5:00 PM</span></li>
                  <li>Wednesday <span>9:00 AM - 5:00 PM</span></li>
                  <li>Thursday <span>9:00 AM - 5:00 PM</span></li>
                  <li>Friday <span>9:00 AM - 5:00 PM</span></li>
                  <li>Saturday <span>9:00 AM - 1:00 PM</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Success Dialog */}
      <SuccessDialog
        isOpen={showSuccessDialog}
        appointmentData={appointmentResponse}
      />
    </div>
  );
};

export default AppointmentForm;