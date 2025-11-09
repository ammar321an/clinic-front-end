"use client";

import { useState, useEffect } from "react";
import TopHeader from "./TopHeader";

const ConditionalTopHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return <TopHeader />;
};

export default ConditionalTopHeader;