"use client";

import { useEffect, useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@heroui/button";
import { DropdownIcon } from "./icons";

const OPTIONS = [
  { label: "All feedbacks", value: "all" },
  { label: "Highest rated", value: "highest" },
  { label: "Oldest rated", value: "oldest" },
];

export default function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("all");
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
        Sort
      </Button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute lg:right-0 left-0 mt-2 
            rounded-xl bg-white dark:bg-slate-950
            shadow-xl border border-gray-200 dark:border-slate-800
            p-2 z-50 w-[276px] 
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-2 pb-1">
            <span className="text-xs font-medium text-gray-400">Sort by</span>
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
            {OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setActive(opt.value);
                  setOpen(false);
                }}
                className={`
                  text-left px-3 py-2 rounded-lg text-sm md:text-[17px] font-roboto transition cursor-pointer
                  ${
                    active === opt.value
                      ? "bg-[#B0C2FF21] dark:bg-blue-950 text-[#2146C7]"
                      : "text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:dark:bg-blue-950/30"
                  }
                `}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
