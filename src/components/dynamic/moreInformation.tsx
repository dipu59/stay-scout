import React from "react";
import {
  Clock,
  Facebook,
  Instagran,
  Location,
  Menu,
  Phone,
  Tiktok,
  Website,
  Whatsapp,
} from "../icons";

type MoreInformationProps = {
  restaurant: {
    dynamic: {
      phone: string;
      shortLocation: string;
      shortTime: string;
      websiteLink: string;
    };
  };
};

export default function MoreInformation({ restaurant }: MoreInformationProps) {
  const lat = 1.2868;
  const lng = 103.8523;

  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div className="max-w-[1100px] mx-auto mt-[70px] md:mt-[90px] px-3 lg:px-0 ">
      <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-center gap-10 md:gap-0 border-b border-b-[#DCDCDC] dark:border-b-slate-700 pb-[50px] ">
        <div>
          <h1 className="font-lexend font-semibold text-[#1E1E1E] dark:text-gray-200 text-[25px] md:text-[34px]  ">
            More informations
          </h1>
          <div className="flex flex-col gap-[35px] mt-[40px] ">
            <div className="flex items-center justify-start gap-[17px] font-roboto text-base md:text-xl text-[#232323] dark:text-gray-300 ">
              <Menu />
              <span className="underline underline-offset-2 ">
                See the menu
              </span>
            </div>
            <div className="flex items-center justify-start gap-[17px] font-roboto text-base md:text-xl text-[#232323] dark:text-gray-300 ">
              <Phone />
              <span>{restaurant.dynamic.phone}</span>
            </div>
            <div className="flex items-center justify-start gap-[17px] font-roboto text-base md:text-xl text-[#232323] dark:text-gray-300 ">
              <Location />
              <span>{restaurant.dynamic.shortLocation}</span>
            </div>
            <div className="flex items-center justify-start gap-[17px] font-roboto text-base md:text-xl text-[#232323] dark:text-gray-300 ">
              <Clock />
              <span>{restaurant.dynamic.shortTime}</span>
            </div>
            <div className="flex items-center justify-start gap-[17px] font-roboto text-base md:text-xl text-[#232323] dark:text-gray-300 ">
              <Website />
              <a
                href={`https://${restaurant.dynamic.websiteLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-3"
              >
                {restaurant.dynamic.websiteLink}
              </a>
            </div>
            <div className="flex items-center gap-[27px] ">
              <Facebook className="fill-black dark:fill-gray-200 " />
              <Instagran className="fill-black dark:fill-gray-200 " />{" "}
              <Tiktok className="fill-black dark:fill-gray-200 " />
              <Whatsapp className="fill-black dark:fill-gray-200 " />
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div>
          <div
            className="
        relative lg:w-[579px] md:w-[400px]  overflow-hidden rounded-[8px]
        border border-gray-200 dark:border-gray-700
        h-[380px] sm:h-[432px] 
      "
          >
            {/* Map iframe */}
            <iframe
              title="Restaurant location map"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=103.83%2C1.27%2C103.88%2C1.31&marker=${lat}%2C${lng}&layer=mapnik`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay UI */}
            {/* <div className="absolute top-3 right-3 z-10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
            flex items-center gap-2
            rounded-full bg-white/95 backdrop-blur
            px-4 py-2 text-sm font-medium
            text-[#1E1E1E]
            shadow-lg
            hover:bg-gray-100
            transition
          "
              >
                📍 Open in Google Maps
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
