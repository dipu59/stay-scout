import Link from "next/link";
import React from "react";
import { ClockIcon, LocationIcon, Stars } from "../icons";
import { RatingStars } from "../star";
import { Clock3, LocateIcon } from "lucide-react";
import { LatestCard } from "@/src/restrurentDB/data";

type HeroProps = {
  restaurant: {
    slug: string;
    title: string;
    path: string;
    description: string;
    rating: string;
    ratings: number;
    review: string;
    dynamic: {
      coverPath: string;
      location: string;
      shortTime: string;
      time:string;
    };
  };
};

export default function Hero({ restaurant }: HeroProps) {
  return (
    <div className="max-w-[1440px] mx-auto border-t border-t-[#DCDCDC] dark:border-t-slate-700 ">
      <div className="flex gap-1 text-[#232323] dark:text-gray-300 font-roboto font-semibold text-sm md:text-base max-w-[1100px] mx-auto px-5 lg:px-0 pt-[16px] lg:pt-[20px] ">
        <Link className="hover:underline hover:underline-offset-2 " href={"/"}>
          Home
        </Link>
        /
        <Link
          className="hover:underline hover:underline-offset-2 "
          href={`/restaurants/${restaurant.slug}`}
        >
          <span className="capitalize">
            {restaurant.slug.replace("-", " ")}
          </span>
        </Link>
      </div>
      <div className="relative w-full h-[552px] overflow-x-hidden mt-[19px]">
        {/* Image */}
        <img
          src={`/${restaurant.dynamic.coverPath}`}
          className="w-full h-full object-cover"
          alt={restaurant.title}
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full gradient  z-10 " />

        {/* Content */}
        <div className="absolute z-20 inset-0 flex flex-col justify-start max-w-[1100px] mx-auto mt-[67px] px-5 lg:px-0 ">
          <h1 className=" font-lexend font-semibold text-[40px] md:text-[52px] text-white ">
            {restaurant.title}
          </h1>
          <div className="flex gap-2 items-center ">
            <RatingStars rating={restaurant.ratings} />
            <p className="font-roboto font-semibold text-white text-sm md:text-base ">
              {restaurant.rating} ({restaurant.review} reviews)
            </p>
          </div>
          <p className="text-white text-sm md:text-base font-roboto max-w-[528px] mt-[28px] ">
            {restaurant.description}
          </p>

          <div className="flex gap-2 items-center mb-[20px] md:mb-[37px] mt-[65px]">
            <LocationIcon className="fill-white" />
            <span className="font-roboto text-white text-sm md:text-base ">
              {restaurant.dynamic.location}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <ClockIcon className="" />
            <span className="font-roboto text-white text-sm md:text-base ">
              {restaurant.dynamic.time}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative -top-17 size-[139px] mx-auto z-20 rounded-full bg-white border-[5px] border-white ">
        <img
          className="object-cover rounded-full"
          src="/dynamic/logo.jpg"
          alt="Logo"
        />
        <h2 className="absolute text-[#D03123] font-lexend font-semibold text-xs md:text-sm mt-[4px] ">
          {restaurant.title}
        </h2>
      </div>
    </div>
  );
}
