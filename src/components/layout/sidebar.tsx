'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/routes';
import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const navigation = [
  {
    name: 'Dashboard',
    href: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    name: 'Appointments',
    href: ROUTES.APPOINTMENTS,
    icon: ClipboardList,
  },
  {
    name: 'Calendar',
    href: ROUTES.CALENDAR,
    icon: Calendar,
  },
];

export function Sidebar({ isOpen, onClose, isCollapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full transform bg-white shadow-lg transition-all duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          isCollapsed ? 'lg:w-20' : 'lg:w-64'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo and close button */}
          <div className="flex h-16 items-center justify-between border-b px-6">
            {!isCollapsed && (
              <Link href={ROUTES.DASHBOARD} className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-clinic-blue">
                  <span className="text-sm font-bold text-white">C</span>
                </div>
                <span className="text-lg font-bold text-gray-900">Clinic</span>
              </Link>
            )}
            
            {isCollapsed && (
              <Link href={ROUTES.DASHBOARD} className="mx-auto">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-clinic-blue">
                  <span className="text-sm font-bold text-white">C</span>
                </div>
              </Link>
            )}

            {/* Mobile close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => onClose()}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-clinic-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100',
                    isCollapsed && 'justify-center lg:px-0'
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {!isCollapsed && (
            <>
              <Separator />
              {/* Footer */}
              <div className="p-4">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-2xs font-medium text-gray-900">Need help?</p>
                  <p className="mt-1 text-2xs text-gray-600">
                    Contact support for assistance
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="mt-2 h-auto p-0 text-2xs text-clinic-blue"
                  >
                    Get Support
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}