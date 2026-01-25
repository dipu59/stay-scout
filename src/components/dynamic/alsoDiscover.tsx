import React from "react";
import { RatingStars } from "../star";
import Link from "next/link";
import { LatestCard } from "@/src/restrurentDB/data";

export default function AlsoDiscover() {
  return (
    <div className="max-w-[1100px] mx-auto mt-[30px] md:mt-[40px] px-3 lg:px-0 pb-[60px] ">
      <h1 className="text-[#1E1E1E] dark:text-gray-200 font-lexend font-bold md:font-extrabold text-2xl md:text-[32px] mb-[30px] md:mb-[45px] ">Also discover...</h1>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-[6px] md:gap-[10px] px-2 lg:px-0 lg:gap-[49px] justify-between ">
        {LatestCard.sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((items, index) => (
            <div
              key={index}
              className="max-w-[319px] mx-auto overflow-hidden hover:-translate-y-1 hover:scale-[1] hover:delay-150 cursor-pointer transition-all duration-300  bg-[#F8F8F8] dark:bg-[#0d1017] rounded-[14px] dark:hover:shadow-blue-950 border border-[#E6E6E6] hover:border-[#cfcfcf] dark:border-[#40434a]
          dark:hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.45)]
          dark:hover:border-[#2ea0d198] group"
            >
              <div className="max-w-[319px] overflow-hidden max-h-[213px] rounded-[14px]">
                <img
                  src={items.path}
                  alt="Bella Italia"
                  className="w-full h-full object-cover hover:scale-110 hover:cursor-zoom-in transition-all duration-300"
                />
              </div>
              <div className="flex flex-col justify-center items-start max-w-[280px] px-1.5 md:px-2 lg:px-0 mx-auto mt-3 w-full">
                <Link href={`/restaurants/${items.slug}`}>
                  {" "}
                  <h2 className="font-roboto font-medium md:font-semibold text-[#232323] text-lg md:text-xl lg:text-[22px] dark:text-[#feffff] ">
                    {items.title}
                  </h2>
                </Link>
                <p className="font-roboto text-sm lg:text-base text-[#8F8F8F] mt-[4px] md:mt-[6px] mb-[15px] md:mb-[27px] line-clamp-2 lg:line-clamp-3 dark:group-hover:text-[#b6aeae] transition-all delay-150 duration-300 ">
                  {items.description}
                </p>
                <div className="flex gap-[3px] md:gap-[10px] pb-[19px] ">
                  <div className="flex ">
                    <RatingStars rating={items.ratings ?? 0} />
                  </div>
                  <div>
                    <p className="font-roboto text-[10px] md:text-sm font-semibold text-[#8F8F8F] ">
                      <span className="text-[#232323] dark:text-gray-200">
                        {items.rating}
                      </span>{" "}
                      ({items.review} reviews)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
