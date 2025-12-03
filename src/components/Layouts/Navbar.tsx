"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Stethoscope, Menu } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="w-full max-w-7xl mx-auto px-4">
            <nav className="navbar navbar-expand-md navbar-light">
              {/* Mobile Menu Button - Only visible on mobile */}
              <button
                onClick={toggleNavbar}
                className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                type="button"
                aria-label="Toggle navigation"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>

              {/* Logo - Hidden on mobile, visible on desktop */}
              <Link href="/" className="navbar-brand hidden md:block">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={120}
                  height={32}
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>
              </div>

              {/* Get Appointment Button */}
              <div className="ml-auto">
                <Link href="/appointment">
                  <Button 
                    className="bg-[#0046c0] text-white hover:bg-[#003a9e] transition-all duration-300 hover:scale-105"
                  >
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Get Appointment
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={menu} 
        onClose={() => setMenu(false)} 
        menus={menus} 
      />
    </>
  );
};

export default Navbar;