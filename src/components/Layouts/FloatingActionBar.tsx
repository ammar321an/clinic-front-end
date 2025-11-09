"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MessageCircle, Phone, MapPin } from "lucide-react";

const FloatingActionBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show/hide if we're on mobile (≤768px)
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide
          setIsVisible(false);
        } else {
          // Scrolling up - show
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleWhatsApp = () => {
    window.open("https://wa.me/60123456789", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+60123456789";
  };

  const handleMap = () => {
    // Coordinates for KL (example)
    const lat = 3.139;
    const lng = 101.6869;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <div
      className={`floating-action-bar ${isVisible ? "visible" : "hidden"}`}
    >
      <Link href="/appointment" className="action-item">
        <Calendar size={20} />
        <span>Appointment</span>
      </Link>

      <button onClick={handleWhatsApp} className="action-item">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </button>

      <button onClick={handleCall} className="action-item">
        <Phone size={20} />
        <span>Call</span>
      </button>

      <button onClick={handleMap} className="action-item">
        <MapPin size={20} />
        <span>Map</span>
      </button>
    </div>
  );
};

export default FloatingActionBar;