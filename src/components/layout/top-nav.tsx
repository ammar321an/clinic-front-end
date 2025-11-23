'use client';

import { Menu, PanelLeftClose, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileDropdown } from './profile-dropdown';
import { NavUser } from './test-profiledropdown';

interface TopNavProps {
  onMenuClick: () => void;
  onToggleCollapse?: () => void;
  isSidebarCollapsed?: boolean;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function TopNav({ onMenuClick, onToggleCollapse, isSidebarCollapsed, user }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop sidebar toggle button */}
          {onToggleCollapse && (
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleCollapse}
              className="hidden h-9 w-9 p-0 lg:flex"
            >
              {isSidebarCollapsed ? (
                <PanelLeft className="h-5 w-5" />
              ) : (
                <PanelLeftClose className="h-5 w-5" />
              )}
            </Button>
          )}

          {/* Logo for mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-clinic-blue">
              <span className="text-sm font-bold text-white">C</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Clinic</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ProfileDropdown user={user} />
        </div>
      </div>
    </header>
  );
}