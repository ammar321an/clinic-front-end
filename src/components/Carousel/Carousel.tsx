"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  className?: string;
  indicatorColor?: string;
  controlColor?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showControls = true,
  indicatorColor,
  controlColor,
  className = "",
}) => {
  if (!items || items.length === 0) {
    return <div className="text-center text-gray-500">No images to display</div>;
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel wrapper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={
          autoPlay
            ? { delay: autoPlayInterval, disableOnInteraction: false }
            : false
        }
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={
          showIndicators
            ? {
                clickable: true,
                bulletClass: `swiper-pagination-bullet !bg-${
                  indicatorColor || "white"
                } opacity-50`,
                bulletActiveClass:
                  "swiper-pagination-bullet-active !opacity-100 !scale-110",
              }
            : false
        }
        className="relative rounded-lg shadow-lg h-96 md:h-[48rem]"
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.src}-${index}`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 600px, 600px"
            />
            {(item.title || item.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {item.title && (
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white bg-gray-800/80 px-2 py-1 rounded">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="text-sm text-white bg-gray-700/80 px-2 py-1 rounded">
                    {item.description}
                  </p>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      {showControls && items.length > 1 && (
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-50">
          {/* Previous Button */}
          <button className="custom-prev inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/70 hover:bg-gray-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={controlColor || "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Next Button */}
          <button className="custom-next inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/70 hover:bg-gray-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={controlColor || "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
