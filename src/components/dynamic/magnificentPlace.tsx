"use client";
import { galleryImages } from "@/src/config/data";
import { useState } from "react";
import GalleryModal from "./galaryModal";

export default function MagnificentPlace() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-[1100px] w-full mx-auto ">
      <div className="px-3 lg:px-0">
        <h1 className=" text-[#1E1E1E] dark:text-gray-200 font-lexend font-semibold text-2xl md:text-[34px] mb-[13px] ">
          Discover our magnificent place in photos
        </h1>
        <p className="text-[#5E5E5E] dark:text-gray-400 font-roboto text-sm md:text-base px-[6px] max-w-[601px] mb-[30px] md:mb-[40px] ">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout.The lorem ipsum is, in printing.
        </p>
      </div>
      <div className="grid gap-1 md:grid-cols-2 px-2 lg:px-0 ">
        <div
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
          className="cursor-pointer max-h-[552px] h-full"
        >
          <img
            src={galleryImages[0]}
            className="rounded-xl w-full object-cover  h-full "
          />
        </div>

        <div className="grid grid-cols-2 gap-1 ">
          {galleryImages.slice(1, 5).map((img, i) => (
            <div key={i} className="max-w-[269px] max-h-[269px] h-full w-full ">
              {" "}
              <img
                src={img}
                onClick={() => {
                  setIndex(i + 1);
                  setOpen(true);
                }}
                className="cursor-pointer rounded-xl  object-cover h-full w-full "
              />
            </div>
          ))}
        </div>
      </div>

      <GalleryModal
        open={open}
        onClose={() => setOpen(false)}
        startIndex={index}
      />
    </div>
  );
}
