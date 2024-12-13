import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { memo } from "react";

const HeroSection = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const backgroundStyle = isDark
    ? "bg-[linear-gradient(#48556354,#29323c00)] text-white border border-none"
    : "bg-white text-gray-800";

  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="bg-black rounded-t-2xl">
        <div className={`sm:pt-32 pt-16 pb-16 rounded-2xl relative ${backgroundStyle}`}>
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left sm:py-8 sm:pl-8 sm:p-0 p-4">
              <div>
                <h1 className="text-4xl font-bold mb-8 lg:scale-125 lg:translate-x-[12%]">
                  Your Gateway To <br />
                  Unforgettable Events Awaits!
                </h1>
                <p className={`text-lg mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Discover and book exclusive experiences across music, sports,
                  festivals, and more.
                </p>
              </div>
              <div className="sm:mt-24 mt-16 max-w-md">
                <div className="relative">
                  <MagnifyingGlassIcon className={`size-6 absolute ${isDark ? "text-white" : "text-indigo-600"} top-3 left-4`} />
                  <input
                    type="text"
                    className={`h-12 rounded-full w-full px-12 ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100"}`}
                  />
                  <div className="flex items-center cursor-pointer h-full size-12 absolute top-0 right-0">
                    <ArrowRightIcon className={`size-6 ${isDark ? "text-white" : "text-indigo-600"}`} />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between pl-4 pt-2 max-w-md leading-loose">
                {["Drum and Bass", "Concerts", "Carnival", "Festival", "Art Gathering"].map((category) => (
                  <a
                    key={category}
                    className={`cursor-pointer hover:underline ${isDark ? "text-white" : "text-gray-800"}`}
                  >
                    {category}
                  </a>
                ))}
              </div>
              <div
                className={`mt-16 flex flex-row justify-between text-gray-400 max-w-md`}
              >
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">1000 +</div>
                  <div>Events</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">15000 +</div>
                  <div>Users</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">112</div>
                  <div>Organizers</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full mt-8 lg:mt-0 relative">
              <div className="w-full h-96 relative">
                <Image
                  src="/home/hero5.png"
                  alt="Hero"
                  layout="fill"
                  objectFit="contain"
                  priority
                  className="lg:scale-125 scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
