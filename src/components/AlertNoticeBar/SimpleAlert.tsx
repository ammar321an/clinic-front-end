"use client";

import React from "react";

interface SimpleAlertProps {
  type?: 'info' | 'danger' | 'success' | 'warning' | 'dark';
  title?: string;
  message: string;
  className?: string;
}

const SimpleAlert: React.FC<SimpleAlertProps> = ({
  type = 'info',
  title,
  message,
  className = ""
}) => {
  const colorSchemes = {
    info: "text-blue-800 bg-white border-2 border-blue-300",
    danger: "text-red-800 bg-white border-2 border-red-300", 
    success: "text-green-800 bg-white border-2 border-green-300",
    warning: "text-yellow-800 bg-white border-2 border-yellow-300",
    dark: "text-gray-800 bg-white border-2 border-gray-300"
  };

  return (
    <div 
      className={`p-4 mb-4 text-sm rounded-lg ${colorSchemes[type]} ${className}`} 
      role="alert"
    >
      {title && <span className="font-medium">{title}</span>}
      {title && " "}
      {message}
    </div>
  );
};

export default SimpleAlert;