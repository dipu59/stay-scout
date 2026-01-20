import React from 'react'

export default function MagnificentPlace() {
  return (
    <div className="max-w-[1100px] mx-auto mt-[70px] md:mt-[80px] px-3 lg:px-0 ">
      <h1 className="font-lexend font-semibold text-[#1E1E1E] dark:text-gray-200 text-[25px] md:text-[34px] mb-[13px] ">
        Discover our magnificent place in photos
      </h1>
      <p className="font-roboto text-[#5E5E5E] dark:text-gray-400 text-sm md:text-base mb-[30px] px-[10px] md:mb-[40px] max-w-[601px] ">
        The lorem ipsum is, in printing, a series of meaningless words used
        temporarily to calibrate a layout.The lorem ipsum is, in printing.
      </p>

      {/* GALARY */}
      <div className="grid gap-[15px] md:grid-cols-2 rounded-2xl">
        {/* Left big image */}
        <div className="relative overflow-hidden rounded-2xl ">
          <img
            src="/dynamic/bella_discover/image1.png"
            alt="Restaurant interior"
            className="h-full w-full object-cover min-h-[220px] md:min-h-[360px]"
          />

          {/* View all photos button */}
          <button
            className="
        absolute bottom-4 left-4
        flex items-center gap-2
        rounded-full bg-black/80 px-4 py-2
        text-sm text-white
        hover:bg-black transition
      "
          >
            📷 View all photos (7)
          </button>
        </div>

        {/* Right image grid */}
        <div className="grid grid-cols-2 gap-[15px] rounded-2xl">
          <div className="overflow-hidden ">
            <img
              src="/dynamic/bella_discover/image2.png"
              alt=""
              className="h-full w-full object-cover min-h-[120px]"
            />
          </div>

          <div className="overflow-hidden ">
            <img
              src="/dynamic/bella_discover/image3.png"
              alt=""
              className="h-full w-full object-cover min-h-[120px]"
            />
          </div>

          <div className="overflow-hidden  ">
            <img
              src="/dynamic/bella_discover/image4.png"
              alt=""
              className="h-full w-full object-cover min-h-[120px]"
            />
          </div>

          <div className="overflow-hidden ">
            <img
              src="/dynamic/bella_discover/image5.png"
              alt=""
              className="h-full w-full object-cover min-h-[120px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
