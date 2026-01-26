"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { Globe, MapPin, Search, SearchIcon } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
import { nav } from "framer-motion/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LatestCard } from "../restrurentDB/data";
import { useSearch } from "../context/context";
import { RestIcon } from "./icons";
type NavbarProps = {
  onSearch: (filters: { name: string; location: string }) => void;
};
export default function Navbar() {
 const { setFilters } = useSearch();
 
   const [name, setName] = useState("");
   const [location, setLocation] = useState("");
   const [open, setOpen] = useState(false);
 
   // 🔍 Restaurant name suggestions
   const suggestions = useMemo(() => {
     if (!name.trim()) return [];
 
     const q = name.toLowerCase();
 
     return LatestCard.filter((item) =>
       item.title.toLowerCase().includes(q),
     ).slice(0, 6);
   }, [name]);
 
   const handleSearch = () => {
     setFilters({
       name,
       location,
     });
     setOpen(false);
   };

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

  return (
    <nav
      className={`max-w-[1300px] mx-auto  md:pt-[15px] pt-[28px] pb-4 lg:pb-[0px] sticky lg:top-1 top-0 left-0 right-0 backdrop-blur-md z-30 rounded-2xl bg-white/25 dark:bg-[#010409]/25  transition-all duration-400 delay-300  ${show ? "translate-y-0" : "-translate-y-full"} `}
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

          {/* Laptop devise */}
          <div className="relative w-full max-w-[625px] hidden lg:block -mt-2 mb-1">
            {/* Search bar */}
            <div
              className="
                  flex items-center h-[52px]
                  rounded-full
                  border border-gray-200 dark:border-gray-700
                  bg-white/80 dark:bg-gray-900
                  px-4
                  shadow-sm
                  focus-within:ring-2 focus-within:ring-blue-500/40
                "
            >
              {/* Restaurant name input */}
              <input
                type="text"
                value={name}
                placeholder="restaurant, hotel, service..."
                onChange={(e) => {
                  setName(e.target.value);
                  setOpen(true);
                }}
                className="
                    flex-1 text-sm
                    bg-transparent outline-none
                    text-gray-800 dark:text-gray-100
                    placeholder-gray-400 dark:placeholder-gray-500
                  "
              />

              {/* Divider */}
              <span className="mx-3 h-5 w-px bg-gray-300 dark:bg-gray-700" />

              {/* Location input */}
              <div className="flex items-center gap-1 w-[150px]">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  value={location}
                  placeholder="location..."
                  onChange={(e) => setLocation(e.target.value)}
                  className="
                      w-full text-sm
                      bg-transparent outline-none
                      text-gray-800 dark:text-gray-100
                      placeholder-gray-400 dark:placeholder-gray-500
                    "
                />
              </div>

              {/* Search button */}
              <button
                type="button"
                onClick={handleSearch}
                className="
                    ml-3 w-9 h-9
                    rounded-full
                    bg-blue-600
                    flex items-center justify-center
                    hover:bg-blue-700
                    active:scale-95
                  "
              >
                <Search size={18} className="text-white" />
              </button>
            </div>

            {/* 💡 Suggestions dropdown for Laptop only */}
            {open && suggestions.length > 0 && (
              <div
                className="
                    absolute hidden lg:block z-50 mt-2 w-full
                    rounded-xl bg-white dark:bg-gray-900
                    shadow-lg
                    border border-gray-200 dark:border-gray-700
                  "
              >
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    className="
                         py-4 my-2 cursor-pointer
                        hover:bg-gray-100 dark:hover:bg-gray-800 border-b-[0.75px] mx-5 px-3 rounded-2xl border-b-[#969696] dark:border-b-slate-700 shadow
                      "
                    onClick={() => {
                      setName(item.title);
                      setOpen(false);
                    }}
                  >
                    <div className="flex gap-2 items-center ">
                      <div className="bg-white dark:bg-gray-700 border border-[#F0F0F0] rounded-full flex items-center justify-center size-[48px] dark:border-slate-800 ">
                        <RestIcon />
                      </div>
                      <p className="text-base md:text-[19px] font-medium text-[#1E1E1E] dark:text-gray-100 font-roboto">
                        {item.title} ,
                        <span className="">{item.dynamic.shortLocation}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

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
        </div>
        {/* For Mobile and Tabletresponsive */}
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
              value={name}
              placeholder="restaurant, hotel, service..."
              onChange={(e) => {
                setName(e.target.value);
                setOpen(true);
              }}
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
              type="button"
              onClick={handleSearch}
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
            >
              <Search className="text-white size-4 md:size-6" />
            </button>
          </form>
          {/* 💡 Suggestions dropdown */}
          {open && suggestions.length > 0 && (
            <div
              className="
                    absolute z-50 mt-2 w-full
                    rounded-xl bg-white dark:bg-gray-900
                    shadow-lg
                    border border-gray-200 dark:border-gray-700 block lg:hidden
                  "
            >
              {/* For Mobile and tablet only */}
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  className="
                         py-4 my-2 cursor-pointer 
                        hover:bg-gray-100 dark:hover:bg-gray-800 border-b-[0.75px] mx-5 px-3 rounded-2xl border-b-[#969696] dark:border-b-slate-700 shadow
                      "
                  onClick={() => {
                    setName(item.title);
                    setOpen(false);
                  }}
                >
                  <div className="flex gap-2 items-center ">
                    <div className="bg-white dark:bg-gray-700 border border-[#F0F0F0] rounded-full flex items-center justify-center size-[48px] dark:border-slate-800 ">
                      <RestIcon />
                    </div>
                    <p className="text-base md:text-[19px] font-medium text-[#1E1E1E] dark:text-gray-100 font-roboto">
                      {item.title} ,
                      <span className="">{item.dynamic.shortLocation}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
