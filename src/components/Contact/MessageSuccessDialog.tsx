"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, User, FileText, Clock, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import type { MessageSuccessData } from "@/types/message";

interface MessageSuccessDialogProps {
  isOpen: boolean;
  messageData: MessageSuccessData | null;
}

const MessageSuccessDialog: React.FC<MessageSuccessDialogProps> = ({ 
  isOpen, 
  messageData 
}) => {
  const router = useRouter();

  if (!isOpen || !messageData) return null;

  // Format the date
  const formattedDate = format(
    new Date(messageData.created_at),
    "dd MMM yyyy, h:mm a"
  );

  const handleGoToDashboard = () => {
    // Clear sessionStorage
    sessionStorage.removeItem('message_success');
    
    // Navigate to dashboard
    router.push("/");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop - Cannot close by clicking */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.preventDefault()}
          />

          {/* Dialog - Cannot close by clicking outside */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon with Animation */}
            <div className="flex flex-col items-center pt-3 pb-2 px-6">
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
                className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-2 text-center"
              >
                Message Sent Successfully!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-center text-sm md:text-base"
              >
                Your message has been received. We will get back to you soon!
              </motion.p>
            </div>

            {/* Message Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-2 space-y-1 max-h-[30vh] md:max-h-none overflow-y-auto shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.15),inset_0_-10px_10px_-10px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Message ID</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base break-all">
                    {messageData.id}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Name</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base truncate">
                    {messageData.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base break-all">
                    {messageData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Subject</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base break-words">
                    {messageData.subject}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Sent At</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    {formattedDate}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Button - Only way to close dialog */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="p-3 flex justify-end"
            >
              <button
                onClick={handleGoToDashboard}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
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

export default MessageSuccessDialog;