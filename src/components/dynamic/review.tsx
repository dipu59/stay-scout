import { User } from "lucide-react";
import React from "react";
import { RatingStars } from "../star";
import SortDropdown from "../dropdownButton";
import FilterDropdown from "../filterDropdown";

export default function Review() {
  return (
    <div className="max-w-[1100px] mx-auto mt-[30px] md:mt-[40px] px-3 lg:px-0 pb-[60px] ">
      <div className="flex gap-[38px] items-center mb-[30px] md:mb-[43px] ">
        <FilterDropdown />
        <SortDropdown />
      </div>
      {/* Card Section maping */}
      <div className="bg-[#F8F8F8] dark:bg-slate-900 dark:hover:bg-slate-900/80 max-w-[1055px] rounded-[20px] ">
        <div className="flex gap-2 p-[20px]">
          <div className="size-[59px] p-[16px] bg-white rounded-full ">
            <User className="stroke-[#626262] " />
          </div>
          <div>
            <h3 className=" text-[#232323] dark:text-gray-200 text-lg md:text-xl font-roboto font-semibold pb-[3px] ">
              Wei Jie
            </h3>
            <p className=" text-[#8A8A8A] dark:text-gray-400 text-sm md:text-base font-roboto pb-[10px] md:pb-[14px] ">
              Singapore, Little india
            </p>
            <div className="flex gap-2 ">
              <RatingStars rating={5} />
              <p className="text-[#343434] dark:text-gray-400 font-roboto text-xs md:text-sm pb-[20px] md:pb-[28px] ">
                29/11/2023
              </p>
            </div>
            <p className="text-[#5E5E5E] dark:text-gray-300 font-roboto text-sm md:text-base max-w-[511px] ">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
