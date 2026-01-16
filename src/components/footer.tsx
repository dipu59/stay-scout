import { ArrowUp, CopyrightIcon, Icon } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-[1400px] w-full mx-auto border-t-1 border-t-[#DCDCDC] dark:border-t-gray-700 pt-[26px] mt-[64px] mb-[29px] ">
      <div className=" grid md:grid-cols-3  grid-cols-1 justify-center items-start  lg:gap-[200px] md:gap-[10px] gap-10 md:max-w-[600px] lg:max-w-[940px] w-full mx-auto px-7 md:px-2 lg:px-0  ">
        {/* About section */}
        <div>
          <h2 className="font-lexend font-bold lg:font-extrabold text-lg md:text-xl text-[#1E1E1E] dark:text-gray-200 ">
            About
          </h2>
          <div className="md:mt-[10px] mt-[7px] space-y-[13px] font-roboto text-xs md:text-sm text-[#5E5E5E] dark:text-gray-400 ">
            <p>About MyFeedback</p>
            <p>About MyFeedback</p>
          </div>
        </div>

        {/* MyFeedback section */}
        <div>
          <h2 className="font-lexend font-bold lg:font-extrabold text-lg md:text-xl text-[#1E1E1E] dark:text-gray-200 ">
            MyFeedback
          </h2>
          <div className="md:mt-[10px] mt-[7px] space-y-[13px] font-roboto text-xs md:text-sm text-[#5E5E5E] dark:text-gray-400 ">
            <p>About MyFeedback</p>
            <p>Collections</p>
            <p>Talk</p>
            <p>Events</p>
            <p>MyFeedback blog</p>
            <p>Support</p>
            <p>Developers</p>
          </div>
        </div>

        {/* Language section */}
        <div>
          <h2 className="font-lexend font-bold lg:font-extrabold text-lg md:text-xl text-[#1E1E1E] dark:text-gray-200 ">
            Language
          </h2>
          <div className="md:mt-[10px] mt-[7px] space-y-[13px] font-roboto text-xs md:text-sm text-[#5E5E5E] dark:text-gray-400 ">
            <div className="relative">
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-[#1E1E1E] dark:text-gray-200 cursor-pointer appearance-none pr-8">
                <option>English</option>
                <option>French</option>
                <option>Bangla</option>
                <option>Spanish</option>
                <option>German</option>
                <option>Chinese</option>
                <option>Japanese</option>
              </select>
            </div>
          </div>
          <h2 className="font-lexend font-bold lg:font-extrabold text-lg md:text-xl text-[#1E1E1E] dark:text-gray-200 md:mt-4 mt-3">
            Country
          </h2>
          <div className="md:mt-[10px] mt-[7px] space-y-[13px] font-roboto text-xs md:text-sm text-[#5E5E5E] dark:text-gray-400 ">
            <div className="relative">
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-[#1E1E1E] dark:text-gray-200 cursor-pointer appearance-none pr-8">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>France</option>
                <option>Germany</option>
                <option>Bangladesh</option>
                <option>Japan</option>
                <option>China</option>
                <option>Spain</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="mt-[66px]  text-center ">
        <p className="font-roboto font-semibold text-xs md:text-sm text-[#1E1E1E] dark:text-gray-300 flex justify-center items-center gap-1 ">
          Copyright <CopyrightIcon className="size-[12px]" />{" "}
          {new Date().getFullYear()} myfeedback, designed by scott
        </p>
      </div>
    </footer>
  );
}
