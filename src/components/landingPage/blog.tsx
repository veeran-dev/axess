import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { memo } from "react";

const Blog = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const backgroundStyle = isDark
    ? "bg-[linear-gradient(#48556354,#29323c00)] text-white border-gray-700"
    : "bg-white text-gray-800";

  const buttonStyle = isDark
    ? "bg-indigo-400 text-black"
    : "bg-indigo-600 text-white";

  return (
    <div className={`rounded-xl h-full ${backgroundStyle}`}>
      <div className="flex flex-col py-12 sm:pl-4 p-4 col-span-3 space-y-8 h-full">
        <div>
          <p className={`text-sm ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>Blog</p>
          <h2 className="font-bold text-xl">
            Insights and Inspirations, The World of Events
          </h2>
        </div>
        <p className="text-base mb-2">
          {`
          Explore our curated collection of blogs featuring the latest trends,
          tips, and success stories in event planning, management, and experiences.
          Whether you're an organizer, attendee, or simply passionate about events,
          dive into expert advice, creative ideas, and industry insights to make
          your next event unforgettable.
          `}
        </p>
        <button
          className={`flex flex-row items-center justify-center font-bold rounded-lg p-2 w-[140px] ${buttonStyle}`}
        >
          <ArrowTopRightOnSquareIcon className="size-6 mr-2" />
          <span>Know More</span>
        </button>
        <div className="relative h-full min-h-[420px]">
          <div className="h-full w-full">
            <Image
              src="/home/blog5.png"
              alt="Blog"
              layout="fill"
              objectFit="fill"
              priority
              className={` rounded-2xl ${
                isDark ? "border-gray-700 bg-black" : "border-2 border-white bg-white"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Blog);
