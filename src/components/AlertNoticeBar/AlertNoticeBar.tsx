"use client";

import React, { useState } from "react";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";

interface MessageItem {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
  isCorrect: boolean;
}

interface AlertNoticeBarProps {
  type?: 'info' | 'danger' | 'success' | 'warning' | 'dark' | 'white' | 'faq';
  title?: string;
  message?: string; 
  messageItems?: MessageItem[]; 
  faqItems?: FaqItem[];
  linkText?: string;
  linkHref?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
}

const AlertNoticeBar: React.FC<AlertNoticeBarProps> = ({
  type = 'info',
  title,
  message,
  messageItems,
  faqItems,
  linkText,
  linkHref = "#",
  showCloseButton = true,
  onClose,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  const colorSchemes = {
    info: {
      container: "text-blue-800 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800",
      button: "bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700",
      icon: "text-blue-800 dark:text-blue-400"
    },
    danger: {
      container: "text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800",
      button: "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700",
      icon: "text-red-800 dark:text-red-400"
    },
    success: {
      container: "text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800",
      button: "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700",
      icon: "text-green-800 dark:text-green-400"
    },
    warning: {
      container: "text-yellow-800 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800",
      button: "bg-yellow-50 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700",
      icon: "text-yellow-800 dark:text-yellow-300"
    },
    dark: {
      container: "border-gray-300 bg-white text-gray-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300",
      button: "bg-white text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
      icon: "text-gray-800 dark:text-gray-300"
    },
    white: {
      container: "border-t-4 border-orange-400 bg-white text-gray-700 shadow-sm",
      button: "bg-white text-orange-500 focus:ring-orange-300 hover:bg-orange-50 hover:text-orange-600",
      icon: "text-orange-500"
    },
    faq: {
      container: "border-t-4 border-blue-400 bg-white text-gray-700 shadow-sm",
      button: "bg-white text-blue-500 focus:ring-blue-300 hover:bg-blue-50 hover:text-blue-600",
      icon: "text-blue-500"
    }
  };

  const colors = colorSchemes[type];

  return (
    <div 
      className={`flex p-4 mb-4 border-t-4 ${colors.container} ${className}`} 
      role="alert"
    >
      <div className="flex items-start gap-3 w-full">
        <svg 
          className={`shrink-0 w-4 h-4 mt-0.5 ${colors.icon}`}
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        
        <div className="text-[15px] font-medium flex-1 min-w-0">
          {title && <span className={`font-semibold ${isExpanded ? 'mb-3 block' : ''} ${type === 'white' ? 'text-orange-600' : type === 'faq' ? 'text-blue-600' : ''}`}>{title}</span>}
          
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px] overflow-y-auto' : 'max-h-0 opacity-0'}`}>
            {message && (
              <>
                {title && " "}
                {message}
              </>
            )}
            
            {messageItems && (
              <div className={message ? "mt-3 space-y-3" : "mt-2 space-y-3"}>
                {messageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-current flex-shrink-0">•</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-bold">{item.title}</span>
                      <div className="mt-1 text-gray-900">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {faqItems && (
              <div className="space-y-4 mt-2">
                {faqItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-2">
                        <p className="font-bold text-gray-900 text-[15px]">{item.question}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        {item.isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <p className="text-[#49677d] text-[15px] leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {linkText && (
              <div className="mt-3">
                <a 
                  href={linkHref} 
                  className={`font-semibold underline hover:no-underline ${type === 'white' ? 'text-orange-600 hover:text-orange-700' : type === 'faq' ? 'text-blue-600 hover:text-blue-700' : ''}`}
                >
                  {linkText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {showCloseButton && (
        <button 
          type="button" 
          className={`ml-3 -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 flex-shrink-0 transition-all duration-200 ${colors.button}`}
          onClick={handleToggle}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <span className="sr-only">{isExpanded ? "Collapse" : "Expand"}</span>
          <svg 
            className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-0' : 'rotate-180'}`}
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 14 14"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="m1 9 6-6 6 6"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AlertNoticeBar;