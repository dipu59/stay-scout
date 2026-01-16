import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

export default function MyFeedback() {
  return (
    <section className="bg-[#F2F2F2] dark:bg-[#141A23]  mt-[60px] md:mt-[84px]">
      <div className="max-w-[1140px] w-full mx-auto flex flex-col md:flex-row items-center justify-between py-[26px] px-3">
        <div className="w-full">
          <h1 className="font-lexend font-semibold lg:font-extrabold text-xl md:text-[22px] md:leading-tight lg:leading-[1.2] lg:text-[26px] text-[#1E1E1E] dark:text-gray-200 max-w-[463px] px-4 md:px-2 lg:px-0 ">
            MyFeedback for Business has resources to help you plan, start, grow,
            and advertise your small business
          </h1>
          <p className="font-roboto text-[#5E5E5E] dark:text-gray-400 text-sm lg:text-base mt-[12px] md:mt-[17px] max-w-[453px] px-4 md:px-2 lg:px-0">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>
          <div className="px-4 md:px-2 lg:px-0">
            <Button
              className="
              bg-[#1E1E1E] dark:bg-[#2d669b] text-white rounded-full
              px-3 py-1.5 text-xs
              sm:px-4 sm:py-2 sm:text-sm
              md:px-6 md:py-4 md:text-base
              mt-[30px] mb-[20px] md:mb-0 md:mt-[40px] lg:mt-[60px]
            "
            >
              Explore MyFeedback business
            </Button>
          </div>
        </div>
        <div className="w-full md:w-[95%]  xl:w-full ">
          <Image
            height={476}
            width={612}
            className="rounded-4xl object-cover px-4 md:px-0 md:pr-2 lg:pr-0"
            src="/myfeetback/image1.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
