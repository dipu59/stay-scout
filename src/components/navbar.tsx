"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { Globe, MapPin, Search, SearchIcon } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
import { nav } from "framer-motion/client";
import { motion } from "framer-motion";
import Link from "next/link";
import Searchs from "./search";
import { LatestCard } from "../restrurentDB/data";
import SearchFilter from "./search";
type NavbarProps = {
  onSearch: (filters: { name: string; location: string }) => void;
};
export default function Navbar() {
  const [filteredData, setFilteredData] = useState(LatestCard);
  // 🔍 Search handler (called from Navbar)
  const handleSearch = ({
    name,
    location,
  }: {
    name: string;
    location: string;
  }) => {
    const n = name.toLowerCase();
    const l = location.toLowerCase();

    const result = LatestCard.filter((item) => {
      const matchName = n ? item.title.toLowerCase().includes(n) : true;

      const matchLocation = l
        ? item.dynamic.shortLocation.toLowerCase().includes(l)
        : true;

      return matchName && matchLocation;
    });

    setFilteredData(result);
  };

  // 🔹 All cards initially
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("scroll:", window.scrollY);

  return (
    <nav
      className={`max-w-[1300px] mx-auto  md:pt-[15px] pt-[28px] pb-4 lg:pb-[0px] sticky top-1 left-0 right-0 backdrop-blur-md z-30 rounded-2xl bg-white/25 dark:bg-[#010409]/25  transition-all duration-400 delay-300  ${show ? "translate-y-0" : "-translate-y-full"} `}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 1,
          type: "spring",
        }}
      >
        <div className="flex  justify-between items-center  lg:mt-[0px] mb-[10px] md:mb-[20px] lg:mb-[23px] gap-6 md:gap-0 px-3 ">
          <div className="flex justify-center items-center">
            <Link href="/">
              {" "}
              <Image
                src={"/logo.png"}
                height={200}
                width={200}
                quality={100}
                alt="Logo"
                className="md:w-[166px]  w-[150px] "
              />
            </Link>
          </div>

          <SearchFilter />

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
      </motion.div>
    </nav>
  );
}
