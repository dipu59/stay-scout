"use client";

import { useMemo, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { LatestCard } from "@/src/restrurentDB/data";
import { useSearch } from "../context/context";
import { RestIcon } from "./icons";

export default function SearchFilter() {
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

  return (
    <div className="relative w-full max-w-[625px] hidden lg:block -mt-2 mb-1">
      {/* Search bar */}
      <div
        className="
          flex items-center h-[52px]
          rounded-full
          border border-gray-200 dark:border-gray-700
          bg-white/80 dark:bg-gray-900/80
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

      {/* 💡 Suggestions dropdown */}
      {open && suggestions.length > 0 && (
        <div
          className="
            absolute z-50 mt-2 w-full
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
  );
}
