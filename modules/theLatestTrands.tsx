import { Stars } from '@/components/icons';
import { LatestCard } from '@/config/data';
import React from 'react'

export default function LatestTrands() {
  return (
    <section className="max-w-[1300px] mx-auto mt-[50px] md:mt-[70px] lg:mt-[102px]">
      <h1 className="font-lexend font-bold mb-[21px] md:font-extrabold text-2xl md:text-3xl lg:text-[32px] text-[#1E1E1E] dark:text-[#feffff] text-center md:text-start md:pl-3 lg:pl-0">
        The latest trends
      </h1>

      {/* card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[10px] px-2 lg:px-0 lg:gap-[20px]">
        {LatestCard.map((items, index) => (
          <div
            key={index}
            className="max-w-[319px] mx-auto overflow-hidden hover:-translate-y-8 hover:scale-110 hover:delay-200 cursor-pointer transition-all duration-300  bg-[#F8F8F8] rounded-[14px]"
          >
            <div className="max-w-[319px] overflow-hidden max-h-[213px] rounded-[14px]">
              <img
                src={items.path}
                alt="Bella Italia"
                className="w-full h-full object-cover hover:scale-110 hover:cursor-zoom-in transition-all duration-300"
              />
            </div>
            <div className="flex flex-col justify-center items-start max-w-[280px] md:px-2 lg:px-0 mx-auto mt-3 w-full">
              <h2 className="font-roboto font-medium md:font-semibold text-[#232323] text-lg md:text-xl lg:text-[22px] ">
                {items.title}
              </h2>
              <p className="font-roboto text-sm lg:text-base text-[#8F8F8F] mt-[7px] md:mt-[11px] mb-[20px] md:mb-[27px] ">
                {items.description}
              </p>
              <div className="flex gap-[6px] md:gap-[12px] pb-[19px] ">
                <div className="flex gap-[5px]">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
                <div>
                  <p className="font-roboto text-sm font-semibold text-[#8F8F8F] ">
                    <span className="text-[#232323]">{items.rating}</span> (
                    {items.review} reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
