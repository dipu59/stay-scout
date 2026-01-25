"use client";

import { useEffect, useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@heroui/button";
import { DropdownIcon } from "./icons";
import { RatingStars } from "./star";

const OPTIONS = [
  { label: RatingStars, value: "all", rating: 5, ratings: "5" },
  { label: RatingStars, value: "highest", rating: 4, ratings: "4" },
  { label: RatingStars, value: "oldest", rating: 3, ratings: "3" },
  { label: RatingStars, value: "oldestt", rating: 2, ratings: "2" },
  { label: RatingStars, value: "oldestts", rating: 1, ratings: "1" },
];

export default function FilterDropdown() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Button */}
      <Button
        onClick={() => setOpen((p) => !p)}
        className={`
          flex items-center gap-2 rounded-full
          px-4 py-2 text-sm transition
          border border-[#5E5E5E] dark:border-slate-600
          ${
            open
              ? "bg-[#5E5E5E] text-white border-[#5E5E5E]"
              : "bg-white dark:bg-black dark:text-gray-200 text-[#1E1E1E] hover:bg-gray-50"
          }
        `}
      >
        <DropdownIcon
          className={` fill-[#5E5E5E] dark:fill-gray-200    ${
            open ? "fill-[#ece3e3]" : ""
          } `}
        />
        Filter
      </Button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute lg:-left-10 left-2 mt-[30px] 
            rounded-xl bg-white dark:bg-slate-950
            shadow-xl border border-gray-200 dark:border-slate-800
            p-3 z-50  w-[331px] pb-4
          "
        >
          {/* Header */}
          <div className="flex items-center justify-end px-2 pb-1 ">
            <div className="flex justify-center items-center size-[33px] rounded-full bg-[#D9D9D961] dark:bg-gray-900 cursor-pointer">
              <button
                onClick={() => setOpen(false)}
                className="text-[#717171] dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-600 cursor-pointer "
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex flex-col">
            <p className="text-[22px] font-bold text-[#232323] dark:text-gray-200 font-roboto text-center pb-2 -mt-3">
              filter by rating
            </p>
            {OPTIONS.map((opt) => (
              <div
                key={opt.value}
                className={`flex gap-[24px] items-center justify-center cursor-pointer rounded-lg w-full px-2  ${
                  active === opt.value
                    ? "bg-[#B0C2FF21] dark:bg-blue-950 text-[#2146C7]"
                    : "text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:dark:bg-blue-950/30"
                }`}
              >
                <p className=" text-[#E8A641] font-roboto font-medium text-[20px] md:text-[26px] ">
                  {opt.ratings}
                </p>
                <button
                  onClick={() => {
                    setActive(opt.value);
                    setOpen(false);
                  }}
                  className={`
                  text-left px-3 py-2  text-sm md:text-[17px] font-roboto transition cursor-pointer
                  
                `}
                >
                  <opt.label rating={opt.rating} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
