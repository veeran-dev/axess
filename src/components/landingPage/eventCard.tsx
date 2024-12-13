import { CheckBadgeIcon, TicketIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { memo } from "react";

const EventCards = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const backgroundStyle = isDark
    ? "bg-[linear-gradient(#48556354,#29323c00)] text-white border-gray-700"
    : "bg-white text-gray-800";

  const priceBadgeStyle = isDark
    ? "border-black"
    : "border-white";

  return (
    <div className={`grid sm:grid-cols-2 grid-cols-1 rounded-xl ${backgroundStyle}`}>
      <div className="flex flex-col py-12 pl-4">
        <div className="mb-2">
          <p className={`text-sm ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>
            Drum and Bass
          </p>
          <h2 className="font-bold text-xl">
            Digital Dialogue & Pandora Presents – Kaufmann
          </h2>
        </div>
        <div className="flex flex-row justify-start items-center mb-16">
          <CheckBadgeIcon
            className={`size-6 mr-2 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
          />
          <span>120 Available</span>
        </div>
        <p className="text-base mb-2 mt-auto">November 13, 2024 - November 14, 2024</p>
        <p className="text-base mb-8">House Of Chapora</p>
        <button
          className={`flex flex-row justify-center items-center font-bold rounded-lg p-2 w-[120px] ${
            isDark ? "bg-indigo-400 text-black" : "bg-indigo-600 text-white"
          }`}
        >
          <TicketIcon className="size-6 mr-2" />
          <span>Buy Now</span>
        </button>
      </div>
      <div className="relative min-h-[216px]">
        <div
          className={`absolute font-bold right-0 top-4 z-50 rounded-l-full py-1 px-4 border-2 bg-white text-gray-800 ${priceBadgeStyle}`}
        >
          ₹ 999.00
        </div>
        <div className="h-full w-full relative">
          <Image
            src="/home/eventCard.png"
            alt="Hero"
            layout="fill"
            objectFit="contain"
            priority
            className={`border-2 rounded-2xl ${
              isDark ? "border-gray-800 bg-black" : "border-white bg-black"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(EventCards);
