'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { TopNav } from '@/components/layout/top-nav';
import { Toaster } from '@/components/ui/toaster';

// Mock user data - will be replaced with real auth later
const mockUser = {
  name: 'Dr. Sarah Johnson',
  email: 'sarah.johnson@clinic.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
        <TopNav 
          onMenuClick={() => setIsSidebarOpen(true)} 
          user={mockUser}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        
        <main className="page-container py-6 md:py-8">
          {children}
        </main>
      </div>

      <Toaster />
    </div>
  );
}