"use client";
import { useRouter } from "next/navigation";
import { RatingStars } from "@/src/components/star";
import { Button } from "@heroui/button";
import React from "react";
import Link from "next/link";
import { LatestCard } from "../restrurentDB/data";

type Props = {
  data: typeof LatestCard;
};

export default function LatestTrands({ data }: Props) {
  const router = useRouter();

  return (
    <section className="max-w-[1300px] mx-auto mt-[50px] md:mt-[70px] lg:mt-[102px]">
      <h1 className="font-lexend font-bold mb-[21px] md:font-extrabold text-2xl md:text-3xl lg:text-[32px] text-[#1E1E1E] dark:text-[#feffff] text-center md:text-start md:pl-3 lg:pl-0">
        The latest trends
      </h1>

      {/* card Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[6px] md:gap-[10px] px-2 lg:px-0 lg:gap-[20px]">
        {data.map((items, index) => (
          <Link
            href={`/restaurants/${items.slug}`}
            key={index}
            className="max-w-[319px] mx-auto overflow-hidden hover:-translate-y-1 hover:scale-[1] hover:delay-150 cursor-pointer transition-all duration-300  bg-[#F8F8F8] dark:bg-[#0d1017] rounded-[14px] dark:hover:shadow-blue-950 border border-[#E6E6E6] hover:border-[#cfcfcf] dark:border-[#40434a]
    dark:hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.45)]
    dark:hover:border-[#2ea0d198] group active:scale-90 "
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
          </Link>
        ))}
      </div>

      <div className=" flex flex-col justify-center items-center gap-[20] md:gap-[30px] mt-[40px] md:mt-[52px] ">
        <h1 className="font-lexend text-lg md:text-[22px] dark:text-[#feffff] text-[#1E1E1E] text-center ">
          Discover more cool restaurants
        </h1>
        <Button
          onPress={() => router.push("/allrestaurants")}
          className="text-center rounded-full bg-[#1a86d3] hover:bg-[#1677BD] text-lg text-white"
          variant="shadow"
          size="lg"
        >
          Show more
        </Button>
      </div>
    </section>
  );
}
