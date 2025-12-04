"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { publicMessageService } from "@/services/public-message.service";
import { formatPhoneForBackend, isValidPhoneNumber } from "@/utils/phone.utils";
import { useToast } from "@/hooks/use-toast";
import MessageSuccessDialog from "./MessageSuccessDialog";
import type { MessageSuccessData } from "@/types/message";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine(isValidPhoneNumber, {
    message: "Phone must be 10-11 digits without '+' symbol",
  }),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormSchema = z.infer<typeof formSchema>;

const ContactFormContent: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [messageResponse, setMessageResponse] = useState<MessageSuccessData | null>(null);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // ✅ Enable real-time validation
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Check URL params on mount to restore success dialog
  useEffect(() => {
    const messageId = searchParams.get('id');
    
    if (messageId) {
      // Try to get message data from sessionStorage
      const storedData = sessionStorage.getItem('message_success');
      
      if (storedData) {
        try {
          const data = JSON.parse(storedData);
          if (data.id === messageId) {
            setMessageResponse(data);
            setShowSuccessDialog(true);
          } else {
            // ID mismatch - redirect to clean URL
            router.replace('/contact');
          }
        } catch (error) {
          console.error('Failed to parse stored message data');
          router.replace('/contact');
        }
      } else {
        // No session data but URL has id - redirect to clean URL
        router.replace('/contact');
      }
    }
  }, [searchParams, router]);

  // Submit handler
  async function onSubmit(values: FormSchema) {
    setIsSubmitting(true);

    try {
      // Format phone number for backend
      const formattedPhone = formatPhoneForBackend(values.phone);

      const payload = {
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        contact_no: formattedPhone,
        subject: values.subject.trim(),
        message: values.message.trim(),
      };

      const response = await publicMessageService.createMessage(payload);

      if (!response.data) {
        throw new Error('No data returned from server');
      }

      // Store message data in sessionStorage
      sessionStorage.setItem('message_success', JSON.stringify(response.data));

      // Update URL with message ID
      const newUrl = `/contact?id=${response.data.id}`;
      router.push(newUrl, { scroll: false });

      // Show success dialog
      setMessageResponse(response.data);
      setShowSuccessDialog(true);

      // Reset form
      form.reset();

      // Show toast notification
      toast({
        title: "Success",
        description: response.message || "Message sent successfully!",
        className: "bg-white border-green-500 text-green-700",
        duration: 3000,
      });
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="drop-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 p-0">
              <div
                className="drop-item drop-img"
                style={{ backgroundImage: `url(/images/contact-form-bg.png)` }}
              >
                <div className="drop-left">
                  <h2>Drop your message for any info or question</h2>

                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="row">
                      {/* Name */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            {...form.register("name")}
                            className={`form-control ${
                              form.formState.errors.name ? 'border-red-500' : ''
                            }`}
                            placeholder="Your name"
                          />
                          {form.formState.errors.name && (
                            <p className="text-red-600 text-xs mt-1">
                              {form.formState.errors.name.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            {...form.register("email")}
                            className={`form-control ${
                              form.formState.errors.email ? 'border-red-500' : ''
                            }`}
                            placeholder="Your email address"
                          />
                          {form.formState.errors.email && (
                            <p className="text-red-600 text-xs mt-1">
                              {form.formState.errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            {...form.register("phone")}
                            className={`form-control ${
                              form.formState.errors.phone ? 'border-red-500' : ''
                            }`}
                            placeholder="Your Phone (e.g., 0123456789 or 60123456789)"
                            maxLength={11}
                          />
                          {form.formState.errors.phone && (
                            <p className="text-red-600 text-xs mt-1">
                              {form.formState.errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            {...form.register("subject")}
                            className={`form-control ${
                              form.formState.errors.subject ? 'border-red-500' : ''
                            }`}
                            placeholder="Your Subject"
                          />
                          {form.formState.errors.subject && (
                            <p className="text-red-600 text-xs mt-1">
                              {form.formState.errors.subject.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            {...form.register("message")}
                            cols={30}
                            rows={6}
                            className={`form-control ${
                              form.formState.errors.message ? 'border-red-500' : ''
                            }`}
                            placeholder="Your message (minimum 20 characters)..."
                          ></textarea>
                          {form.formState.errors.message && (
                            <p className="text-red-600 text-xs mt-1">
                              {form.formState.errors.message.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button 
                          type="submit" 
                          className="drop-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5 p-0">
              <div
                className="speciality-item speciality-right speciality-right-two speciality-right-three"
                style={{ backgroundImage: `url(/images/about4.jpg)` }}
              >
                <Image
                  src="/images/about4.jpg"
                  alt="Contact"
                  width={845}
                  height={850}
                />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>

                  <h3>Emergency Call</h3>
                  <p>+03 8769 9520</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <MessageSuccessDialog
        isOpen={showSuccessDialog}
        messageData={messageResponse}
      />
    </>
  );
};

const ContactForm: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactFormContent />
    </Suspense>
  );
};

export default ContactForm;