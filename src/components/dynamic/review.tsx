'use client'
import { User } from "lucide-react";
import React, { useState } from "react";
import { RatingStars } from "../star";
import SortDropdown from "../dropdownButton";
import FilterDropdown from "../filterDropdown";
import { Button } from "@heroui/button";

type reviewProp = {
  restaurant: {
    dynamic: {
      reviews: {
        username: string;
        location: string;
        stars: number;
        date: string;
        description: string;
      }[];
    };
  };
};

const INITIAL_COUNT = 10;
export default function Review({ restaurant }: reviewProp) {
  // const [visibleCount, setVisibleCount] = useState(8);
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  
    const isExpanded = visibleCount >= restaurant.dynamic.reviews.length;
  
  return (
    <div className="max-w-[1100px] mx-auto mt-[30px] md:mt-[40px] px-3 lg:px-0 pb-[60px] ">
      <div className="flex gap-[38px] items-center mb-[30px] md:mb-[43px] ">
        <FilterDropdown />
        <SortDropdown />
      </div>
      {/* Card Section maping */}
      <div className="flex flex-col gap-[27px] ">
        {restaurant.dynamic.reviews
          .slice(0, visibleCount)
          .map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] dark:bg-slate-900 dark:hover:bg-slate-900/80 max-w-[1055px] rounded-[20px] "
            >
              <div className="flex gap-2 p-[20px]">
                <div className="size-[59px] p-[16px] bg-white rounded-full ">
                  <User className="stroke-[#626262] " />
                </div>
                <div>
                  <h3 className=" text-[#232323] dark:text-gray-200 text-lg md:text-xl font-roboto font-semibold pb-[3px] ">
                    {item.username}
                  </h3>
                  <p className=" text-[#8A8A8A] dark:text-gray-400 text-sm md:text-base font-roboto pb-[10px] md:pb-[14px] ">
                    {item.location}
                  </p>
                  <div className="flex gap-2 ">
                    <RatingStars rating={item.stars} />
                    <p className="text-[#343434] dark:text-gray-400 font-roboto text-xs md:text-sm pb-[20px] md:pb-[28px] ">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-[#5E5E5E] dark:text-gray-300 font-roboto text-sm md:text-base max-w-[511px] line-clamp-4 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        {/* Show more / less */}
        {restaurant.dynamic.reviews.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-[40px]">
            {!isExpanded ? (
              <Button
                onClick={() =>
                  setVisibleCount(restaurant.dynamic.reviews.length)
                }
                className="
                        text-center rounded-full bg-[#1a86d3] hover:bg-[#1677BD] text-lg text-white
                      "
                variant="shadow"
                size="lg"
              >
                Show more reviews
              </Button>
            ) : (
              <Button
                onClick={() => setVisibleCount(INITIAL_COUNT)}
                className="
                        px-8 py-3 rounded-full
                        border border-[#D0D0D0]
                        text-[#1E1E1E] dark:text-gray-200
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition
                      "
              >
                Show less
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
