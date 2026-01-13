"use client";
import Image from "next/image";
import React from "react";
import { Button, Input } from "@heroui/react";
import { Globe, MapPin, Search } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
// import Button from ''
export default function Navbar() {
  return (
    <nav className="max-w-[1300px] mx-auto border-b-1 pb-4 lg:pb-0 dark:border-b-gray-700 border-b-[#DCDCDC]">
      <div className="flex  justify-between items-center md:mt-[38px] mt-[28px] lg:mt-[46px] mb-[10px] md:mb-[20px] lg:mb-[23px] gap-6 md:gap-0 px-3 ">
        <div className="flex justify-center items-center">
          <Image
            src={"/logo.png"}
            height={200}
            width={200}
            quality={100}
            alt="Logo"
            className="md:w-[166px]  w-[150px] "
          />
        </div>

        <form
          className="
        w-full max-w-[625px]
        h-[52px]
        lg:flex hidden items-center
        rounded-full
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        px-4
        shadow-sm
        transition-all duration-300
        focus-within:ring-2 focus-within:ring-blue-500/40
        focus-within:shadow-md
        
      "
        >
          {/* Main Search */}
          <input
            type="text"
            placeholder="restaurant, hotel, service..."
            className="
          flex-1
          text-sm
          text-gray-800 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          bg-transparent
          outline-none
        "
          />

          {/* Divider */}
          <span className="mx-3 h-5 w-px bg-gray-300 dark:bg-gray-700" />

          {/* Location */}
          <div className="flex items-center gap-1 w-[140px]">
            <MapPin size={16} className="text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Singapour..."
              className="
            w-full
            text-sm
            text-gray-800 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            bg-transparent
            outline-none
          "
            />
          </div>

          {/* Button */}
          <button
            className="
          ml-3
          w-9 h-9
          rounded-full
          bg-blue-600
          flex items-center justify-center
          transition-all duration-300
          hover:bg-blue-700
          active:scale-95
          cursor-pointer
        "
            type="submit"
          >
            <Search size={18} className="text-white" />
          </button>
        </form>

        <div>
          <div className="flex gap-2 md:gap-4 items-center justify-center -mt-4 md:-mt-0 ">
            <ThemeSwitch />
            <Globe className="text-[#595959] hidden md:block " />
            <Button
              className="
    bg-[#1E1E1E] text-white rounded-full
    px-3 py-1.5 text-xs
    sm:px-4 sm:py-2 sm:text-sm
    md:px-6 md:py-2.5 md:text-base
  "
            >
              MyFeedback for business
            </Button>
          </div>
        </div>

        {/* For Mobile and Tabletresponsive */}
      </div>
      <div className="px-3">
        {" "}
        <form
          className="
        w-full max-w-[625px] mx-auto 
        h-[52px]
        flex lg:hidden items-center
        rounded-full
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        px-4
        shadow-sm
        transition-all duration-300
        focus-within:ring-2 focus-within:ring-blue-500/40
        focus-within:shadow-md
        
      "
        >
          {/* Main Search */}
          <input
            type="text"
            placeholder="restaurant, hotel, service..."
            className="
          flex-1
          text-sm
          text-gray-800 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          bg-transparent
          outline-none
        "
          />

          {/* Divider */}
          <span className="mx-3 h-5 w-px bg-gray-300 dark:bg-gray-700" />

          {/* Location */}
          <div className="flex items-center gap-1 w-[140px]">
            <MapPin size={16} className="text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Singapour..."
              className="
            w-full
            text-sm
            text-gray-800 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            bg-transparent
            outline-none
          "
            />
          </div>

          {/* Button */}
          <button
            className="
          ml-3
          min-w-[32px] min-h-[32px] h-9 w-9
          rounded-full
          bg-blue-600
          flex items-center justify-center
          transition-all duration-300
          hover:bg-blue-700
          active:scale-95
          cursor-pointer
        "
            type="submit"
          >
            <Search className="text-white size-4 md:size-6" />
          </button>
        </form>
      </div>
    </nav>
  );
}
