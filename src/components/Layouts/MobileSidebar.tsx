"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface MenuItem {
  label: string;
  link: string;
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menus: MenuItem[];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose, menus }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[380px] p-0">
        <SheetHeader className="border-b px-6 py-4">
            <div className="flex items-center justify-center">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={120}
                    height={32}
                />
            </div>
        </SheetHeader>
        
        <nav className="flex flex-col px-6 py-4">
          {menus.map((menuItem) => (
            <Link
              key={menuItem.label}
              href={menuItem.link}
              onClick={onClose}
              className="py-3 text-base font-medium text-gray-700 hover:text-[#0046c0] transition-colors border-b border-gray-100 last:border-b-0"
            >
              {menuItem.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;