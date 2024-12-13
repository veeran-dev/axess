import Image from "next/image";
import { memo } from "react";

const TopGenre = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const backgroundStyle = isDark
    ? "bg-[linear-gradient(#48556354,#29323c00)] text-white"
    : "bg-white text-gray-800";

  const tagStyle = isDark
    ? "bg-indigo-400 text-black"
    : "bg-indigo-600 text-white";

  return (
    <div className={`grid sm:grid-cols-5 grid-cols-1 rounded-xl h-full ${backgroundStyle}`}>
      <div className="flex flex-col py-12 sm:pl-4 p-2 col-span-3 space-y-12">
        <div>
          <p className={`text-sm ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>
            Top Genre
          </p>
          <h2 className="font-bold text-xl">
            Enter The Realm Of Unforgettable Experiences
          </h2>
        </div>
        <p className="text-base mb-2">
          Discover and book exclusive experiences across music, sports, festivals, and more
        </p>
        <div className="flex flex-row flex-wrap justify-start items-center my-2 gap-4">
          {["Concert", "Art Gathering", "Festival"].map((genre) => (
            <div
              key={genre}
              className={`cursor-pointer px-[16px] py-[4px] text-sm rounded-full ${tagStyle}`}
            >
              {genre}
            </div>
          ))}
        </div>
      </div>
      <div className="relative col-span-2 min-h-[216px]">
        <div className="flex flex-row justify-center space-x-0">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-[80px] h-full border-2 rounded-full overflow-hidden"
              style={{ borderColor: isDark ? "#29323c" : "#ffffff" }}
            >
              <Image
                src="/home/eventCard.png"
                alt={`Image ${index + 1}`}
                width={160}
                height={640}
                priority
                style={{
                  width: "80px",
                  height: "340px",
                  objectFit: "cover",
                  backgroundColor: isDark ? "#000" : "#fff",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TopGenre);
