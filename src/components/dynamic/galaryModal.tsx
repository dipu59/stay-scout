"use client";

import { Modal, ModalContent } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { galleryImages } from "@/src/config/data";

export default function GalleryModal({
  open,
  onClose,
  startIndex,
}: {
  open: boolean;
  onClose: () => void;
  startIndex: number;
}) {
  const [active, setActive] = useState(startIndex);

  return (
    <Modal
      isOpen={open}
      onOpenChange={onClose}
      size="5xl"
      backdrop="blur"
      motionProps={{
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
        transition: { duration: 0.3 },
      }}
    >
      <ModalContent className="bg-[#F6F6F6] rounded-2xl overflow-hidden">
        <div className="relative w-full">
          {/* Top counter */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20  bg-black/70 text-white text-sm px-3 py-1 rounded-full"
          >
            {active + 1}/{galleryImages.length}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20  w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow hover:bg-gray-200"
          >
            ✕
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
              bulletClass: "swiper-bullet",
              bulletActiveClass: "swiper-bullet-active",
            }}
            initialSlide={startIndex}
            onSlideChange={(s) => setActive(s.activeIndex)}
            className="w-full h-[60vh] md:h-[70vh]"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <div className="flex justify-center gap-3 py-4 bg-white">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActive(i)}
                className={`h-[55px] w-[70px] object-cover rounded cursor-pointer
                border-2 ${
                  i === active ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </ModalContent>

      {/* Swiper bullets style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </Modal>
  );
}
