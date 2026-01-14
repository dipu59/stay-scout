"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { findCards } from "@/config/data";
import { Stars } from "@/components/icons";
import { useRef } from "react";

export default function FindBestSection() {
  const imageSwiperRef = useRef<any>(null);

  return (
    <section className="px-3 md:px-6 lg:px-0 mt-[40px] md:mt-[50px] lg:mt-[60px]">
      <div className="max-w-[1300px] mx-auto rounded-xl bg-[#1677BD] dark:bg-[#0F3D63] px-4 md:px-6 py-5 md:py-10">
        {/* Title */}
        <h2 className="text-white md:text-[32px] text-[18px] font-medium mb-4">
          Find the best restaurant ratings below
        </h2>

        {/* 🔁 OUTER SWIPER (cards auto scroll) */}
        <div
          onMouseEnter={() => imageSwiperRef.current?.autoplay.stop()}
          onMouseLeave={() => imageSwiperRef.current?.autoplay.start()}
        >
          <Swiper
            className="relative"
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={16}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {findCards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm">
                  {/* 🖼️ INNER SWIPER (image auto scroll) */}
                  <div
                    className="relative h-[213px] "
                    onMouseEnter={() => imageSwiperRef.current?.autoplay.stop()}
                    onMouseLeave={() =>
                      imageSwiperRef.current?.autoplay.start()
                    }
                  >
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
                      loop
                      className="h-full"
                    >
                      {card.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <Image
                            src={img}
                            quality={100}
                            // height={250}
                            // width={400}
                            alt={card.title}
                            fill
                            className="object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <h3 className="md:text-[19px] text-[17px] font-roboto md:font-semibold font-medium text-[#232323] dark:text-white">
                      {card.title}
                    </h3>

                    <p className="text-[11px] md:text-[14px] font-roboto text-[#8F8F8F] dark:text-gray-400 mt-1">
                      The lorem ipsum is, in printing, a series of meaningless
                      words used temporarily to calibrate a layout.
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Stars
                          key={i}
                          
                          className="fill-orange-400 text-orange-400"
                        />
                      ))}
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 ml-1">
                        5.0 (876 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation buttons */}
            <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800 p-2 rounded-full shadow">
              <ChevronLeft size={18} />
            </button>

            <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800 p-2 rounded-full shadow">
              <ChevronRight size={18} />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
