"use client"
import { NavLink } from "@/src/config/data";
import React from "react";
import {motion} from "framer-motion"
export default function NavLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-[1310px] mx-auto mt-[22px] md:mt-[30px] lg:mt-[42px]"
    >
      <div
        className="
          flex flex-nowrap
          gap-[20px] md:gap-[36px]  lg:gap-[57px]
          px-3 lg:px-0
          justify-start items-center
          overflow-x-auto
          scrollbar-hide
        "
      >
        {NavLink.map((items, index) => (
          <div
            key={index}
            className="
              flex flex-col
              justify-center items-center
              gap-[7px] md:gap-[12px]
              min-w-[48px]
            "
          >
            <items.path className="size-[20px] md:size-[21px]" />

            <p className="md:text-[12px] lg:text-[15px] text-[10px] text-[#AFAFAF] font-roboto whitespace-nowrap">
              {items.name}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
