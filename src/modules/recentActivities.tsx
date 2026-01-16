"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SRecentActivities } from "../config/data";
import { User } from "lucide-react";
import { RatingStars } from "../components/star";
import Image from "next/image";

export default function RecentActivities() {
  return (
    <div className="max-w-[1270px] mx-auto ">
      <h1 className="text-[#1E1E1E] dark:text-gray-200 font-lexend font-bold md:font-extrabold text-2xl md:text-3xl lg:text-[32px] mt-[73px] md:mt-[83px] mb-[24px] text-center lg:text-start  ">
        Recents avtivities
      </h1>
      {/* card section */}
      <Swiper
        className="relative"
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={16}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        autoFocus
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.4 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2.7 },
        }}
      >
        {SRecentActivities.map((items, index) => (
          <SwiperSlide
            key={index}
            className="bg-[#F8F8F8] dark:bg-gray-900 rounded-[18px] ml-2 lg:ml-0 overflow-hidden "
          >
            <div className="max-w-[432px] mx-auto py-[24px] px-4 lg:px-0">
              {" "}
              <div className="flex  gap-[10] md:gap-[12px] justify-start items-center  ">
                <div className="size-[59px] rounded-full bg-white dark:bg-gray-400 flex justify-center items-center">
                  <User />
                </div>
                <div className="flex gap-[3px] flex-col">
                  <h1 className="text-[#232323] dark:text-gray-200 font-roboto font-semibold text-lg md:text-xl ">
                    {items.username}
                  </h1>
                  <p className="text-[#8A8A8A] dark:text-gray-600 font-roboto text-sm md:text-base  ">
                    {items.location}
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex gap-[12px] items-center  ">
                <RatingStars rating={items.star} />
                <p className=" text-[#343434] dark:text-gray-300 font-roboto text-xs md:text-sm ">
                  {items.date}
                </p>
              </div>
              <div className="space-y-4 mt-[18px]">
                <p className="font-roboto text-[#5E5E5E] dark:text-gray-400 text-sm md:text-base line-clamp-2 ">
                  {items.desc1}
                </p>
                <p className="font-roboto text-[#5E5E5E] dark:text-gray-400 text-sm md:text-base line-clamp-2 ">
                  {items.desc2}
                </p>
              </div>
              <div className="flex gap-1 md:gap-3 mt-[39px]">
                {items.path.map((item, index) => (
                  <div className="max-w-[118px] w-full ">
                    {" "}
                    <Image
                      key={index}
                      className="object-cover"
                      height={300}
                      width={300}
                      src={item}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-lexend font-medium underline underline-offset-3 cursor-pointer text-[#232323] dark:text-gray-200 text-base md:text-[17px] mt-[20px] ">
                  Discover
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
