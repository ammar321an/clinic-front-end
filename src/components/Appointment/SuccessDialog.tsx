"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, User, Stethoscope, FileText, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface SuccessDialogProps {
  isOpen: boolean;
  appointmentData: {
    appointment_id: string;
    doctor: string;
    appointments_date_time: string;
    services: string;
    full_name: string;
    status: string;
  } | null;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ isOpen, appointmentData }) => {
  const router = useRouter();

  if (!isOpen || !appointmentData) return null;

  // Format the date and time
  const formattedDateTime = format(
    new Date(appointmentData.appointments_date_time),
    "dd MMM yyyy, h:mm a"
  );

    const handleGoToDashboard = () => {
    // Clear sessionStorage
    sessionStorage.removeItem('appointment_success');
    
    // Navigate to dashboard
    router.push("/");
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.preventDefault()} // Prevent closing on backdrop click
          />

          {/* Dialog */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon with Animation */}
            <div className="flex flex-col items-center pt-8 pb-6 px-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    times: [0, 0.2, 0.4, 0.6, 1],
                  }}
                >
                  <CheckCircle2 className="w-20 h-20 text-green-500" strokeWidth={2} />
                </motion.div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mt-6 mb-2 text-center"
              >
                🎉 Booking Successful! 🎉
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-center text-sm md:text-base"
              >
                Your appointment has been confirmed and confirmation emails have been sent.
              </motion.p>
            </div>

            {/* Appointment Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-6 space-y-4"
            >
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Appointment ID</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    {appointmentData.appointment_id}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Doctor</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base truncate">
                    {appointmentData.doctor}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Date & Time</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    {formattedDateTime}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Service</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base break-words">
                    {appointmentData.services}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Patient Name</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base truncate">
                    {appointmentData.full_name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {appointmentData.status}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="p-6 flex justify-end"
            >
              <button
                onClick={handleGoToDashboard}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Go to Dashboard
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessDialog;