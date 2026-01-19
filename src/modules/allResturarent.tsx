"use client";
import React, { useState } from "react";
import SortDropdown from "../components/dropdownButton";
import Image from "next/image";
import { allResturarent } from "../config/data";
import { RatingStars } from "../components/star";
import { Button } from "@heroui/button";
import RestaurantMap from "../components/RestaurantMap";
import Link from "next/link";

const INITIAL_COUNT = 8;
export default function AllResturarent() {
  // const [visibleCount, setVisibleCount] = useState(8);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isExpanded = visibleCount >= allResturarent.length;

  return (
    <div className=" max-w-[1270px] mx-auto ">
      <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 overflow-hidden">
        <div className="px-3 lg:px-0">
          <p className="text-[#232323] dark:text-gray-200 font-bold md:font-semibold font-roboto text-sm md:text-base pt-[20px] pb-[11px] ">
            <Link
              href={"/"}
              className="hover:underline hover:underline-offset-2 transition-all duration-300 "
            >
              {" "}
              Home
            </Link>{" "}
            /{" "}
            <Link
              className="hover:underline hover:underline-offset-2 transition-all duration-300 "
              href={"/allrestaurants"}
            >
              All restaurants
            </Link>
          </p>
          <div className="flex justify-between items-center lg:pr-3 ">
            <h1 className="text-[#1E1E1E] dark:text-gray-200 font-lexend font-bold md:font-extrabold text-2xl md:text-[32px] ">
              best restaurants in singapore
            </h1>
            <SortDropdown />
          </div>
          {/* Card Section */}
          <div className="grid grid-cols-1 gap-[34px]">
            {allResturarent.slice(0, visibleCount).map((items, index) => (
              <div
                key={index}
                className="mt-[36px] md:mt-[47px] border-b border-b-[#DCDCDC] pb-[34px] dark:border-b-slate-700"
              >
                <div className="max-w-[504px] w-full flex gap-[15px]">
                  <div className="max-w-[209px] w-full rounded-[14px] overflow-hidden">
                    <Image
                      height={200}
                      width={200}
                      src={items.path}
                      className="object-cover"
                      alt={items.title}
                    />
                  </div>

                  <div>
                    {/* <Link href={`/restaurants/${items.slug}`}> */}
                    <h1 className="font-roboto font-semibold text-[#232323] dark:text-gray-200 text-xl md:text-[22px]">
                      {items.title}
                    </h1>
                    {/* </Link> */}

                    <p className="mt-[11px] font-roboto text-sm md:text-base text-[#8F8F8F] dark:text-gray-500">
                      {items.desc}
                    </p>

                    <div className="flex gap-2 mt-[27px]">
                      <RatingStars rating={items.stars ?? 0} />
                      <p className="font-roboto font-semibold text-sm text-[#7A7A7A] dark:text-gray-400">
                        <span className="text-[#232323] dark:text-gray-300">
                          {items.star}
                        </span>
                        ({items.review} reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Show more / less */}
            {allResturarent.length > INITIAL_COUNT && (
              <div className="flex justify-start mt-[40px]">
                {!isExpanded ? (
                  <Button
                    onClick={() => setVisibleCount(allResturarent.length)}
                    className="
                text-center rounded-full bg-[#1a86d3] hover:bg-[#1677BD] text-lg text-white
              "
                    variant="shadow"
                    size="lg"
                  >
                    Show more
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
        <div className="  overflow-hidden px-5 lg:px-0  ">
          <RestaurantMap />
        </div>
      </div>
    </div>
  );
}

//  <Button
//    onClick={() => setVisibleCount(allResturarent.length)}
//    className="text-center rounded-full bg-[#1a86d3] hover:bg-[#1677BD] text-lg text-white"
//    variant="shadow"
//    size="lg"
//  >
//    Show more
//  </Button>;
