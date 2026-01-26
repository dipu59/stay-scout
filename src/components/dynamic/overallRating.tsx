import { Progress } from "@heroui/react";
import React from "react";
import { OverallRatingicon } from "../icons";
import { RatingStars } from "../star";

type OverallRatings = {
  restaurant: {
   ratings:number;
};}

export default function OverallRating({ restaurant }: OverallRatings) {
  return (
    <div className="max-w-[1100px] mx-auto mt-[40px] md:mt-[50px] px-3 lg:px-0 border-b border-b-[#DCDCDC] dark:border-b-slate-700 pb-[60px] ">
      <div className="flex  flex-col md:flex-row gap-10 lg:gap-[50px]">
        <div className="flex gap-[15px] items-start justify-start ">
          <OverallRatingicon />
          <div>
            {" "}
            <h2 className="font-roboto font-bold text-[#232323] dark:text-gray-200 text-2xl md:text-[32px] ">
              Overall rating
            </h2>
            <p className="font-roboto text-base md:text-[19px] text-[#838383] dark:text-gray-400 mt-[9px] ">
              834 Reviews
            </p>
            <div className="md:mt-[28px] mt-[20px]">
              <RatingStars rating={restaurant.ratings} />
            </div>
          </div>
        </div>

        <div className="space-y-[15px]">
          <div className="items-center md:w-[400px]  lg:w-[559px] flex gap-3 w-full ">
            <p className="text-[#484848] dark:text-gray-400 font-roboto text-sm md:text-[17px] min-w-[52px] ">
              5 stars
            </p>
            <div className="md:max-w-[300px] max-w-[360px] lg:max-w-[487px]  w-full">
              <Progress aria-label="Loading..." size="md" value={100} />
            </div>
          </div>
          <div className="items-center md:w-[400px]  lg:w-[559px] flex gap-3 w-full ">
            <p className="text-[#484848] dark:text-gray-400 font-roboto text-sm md:text-[17px] min-w-[52px] ">
              0 star
            </p>
            <div className="md:max-w-[300px] max-w-[360px] lg:max-w-[487px]  w-full">
              <Progress aria-label="Loading..." size="md" value={50} />
            </div>
          </div>
          <div className="items-center md:w-[400px]  lg:w-[559px] flex gap-3 w-full ">
            <p className="text-[#484848] dark:text-gray-400 font-roboto text-sm md:text-[17px] min-w-[52px] ">
              0 star
            </p>
            <div className="md:max-w-[300px] max-w-[360px] lg:max-w-[487px]  w-full">
              <Progress aria-label="Loading..." size="md" value={40} />
            </div>
          </div>
          <div className="items-center md:w-[400px]  lg:w-[559px] flex gap-3 w-full ">
            <p className="text-[#484848] dark:text-gray-400 font-roboto text-sm md:text-[17px] min-w-[52px] ">
              0 star
            </p>
            <div className="md:max-w-[300px] max-w-[360px] lg:max-w-[487px]  w-full">
              <Progress aria-label="Loading..." size="md" value={30} />
            </div>
          </div>
          <div className="items-center md:w-[400px]  lg:w-[559px] flex gap-3 w-full ">
            <p className="text-[#484848] dark:text-gray-400 font-roboto text-sm md:text-[17px] min-w-[52px]">
              0 star
            </p>
            <div className="md:max-w-[300px] max-w-[360px] lg:max-w-[487px]  w-full">
              <Progress aria-label="Loading..." size="md" value={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
