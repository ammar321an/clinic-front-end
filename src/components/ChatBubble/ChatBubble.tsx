"use client";

import React, { useState } from "react";

interface ChatBubbleProps {
  name: string;
  message: string;
  timestamp: string;
  gender?: 'male' | 'female';
  avatar?: string;
  status?: string;
  showDropdown?: boolean;
  onReply?: () => void;
  onForward?: () => void;
  onCopy?: () => void;
  onReport?: () => void;
  onDelete?: () => void;
  className?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  name,
  message,
  timestamp,
  gender,
  avatar,
  status = "Delivered",
  showDropdown = true,
  onReply,
  onForward,
  onCopy,
  onReport,
  onDelete,
  className = ""
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAction = (action: (() => void) | undefined, actionName: string) => {
    if (action) {
      action();
    } else {
      console.log(`${actionName} clicked for message from ${name}`);
    }
    setIsDropdownOpen(false);
  };

  // Gender-based icon component
  const GenderIcon = () => {
    if (gender === 'male') {
      return (
        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 7a6 6 0 1112 0A6 6 0 014 7zM8 14a5 5 0 00-5 5 1 1 0 102 0 3 3 0 016 0 1 1 0 102 0 5 5 0 00-5-5z"/>
        </svg>
      );
    } else if (gender === 'female') {
      return (
        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 7a6 6 0 1112 0A6 6 0 014 7zM8 14a5 5 0 00-5 5 1 1 0 102 0 3 3 0 016 0 1 1 0 102 0 5 5 0 00-5-5z"/>
        </svg>
      );
    }
    return null;
  };

  return (
    <div className={`flex items-start gap-2.5 w-full mb-3 ${className}`}>
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
        {avatar ? (
          <img 
            className="w-8 h-8 rounded-full object-cover" 
            src={avatar} 
            alt={`${name} avatar`}
          />
        ) : (
          <GenderIcon />
        )}
      </div>

      {/* Message Bubble */}
      <div className="flex flex-col w-full leading-1.5 p-4 border-2 border-blue-300 bg-white rounded-e-xl rounded-es-xl dark:bg-gray-800 dark:border-blue-600">
        {/* Header */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold" style={{ color: '#232323' }}>
            {name}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {timestamp}
          </span>
        </div>

        {/* Message Content */}
        <p className="text-sm font-normal py-2.5 italic" style={{ color: '#344c5d' }}>
          {message}
        </p>

        {/* Status */}
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {status}
        </span>
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
            type="button"
          >
            <svg 
              className="w-4 h-4 text-gray-500 dark:text-gray-400" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 4 15"
            >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={() => handleAction(onReply, "Reply")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reply
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleAction(onForward, "Forward")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Forward
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleAction(onCopy, "Copy")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Copy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleAction(onReport, "Report")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleAction(onDelete, "Delete")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBubble;