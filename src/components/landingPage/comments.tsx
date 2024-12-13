import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { memo } from "react";

const Comments = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const backgroundStyle = isDark
    ? "bg-[linear-gradient(#48556354,#29323c00)] text-white"
    : "bg-white text-gray-800";

  const borderStyle = isDark ? "border-gray-700" : "border-gray-200";

  const textColor = isDark ? "text-indigo-400" : "text-indigo-700";

  return (
    <div className={`flex flex-row flex-wrap rounded-xl h-full ${backgroundStyle}`}>
      <div className="flex-1 flex flex-col py-12 sm:pl-4 p-4 col-span-3 space-y-8 h-full">
        <div>
          <p className={`text-sm ${textColor}`}>Comments</p>
          <h2 className="font-bold text-xl">
            See What People Are Saying About Their Ticket Booking Experience!
          </h2>
        </div>
        <p className="text-base mb-2">
          Don’t just take our word for it. Discover honest reviews from real users about their
          seamless, reliable, and enjoyable ticket booking experiences. Whether it’s concerts,
          festivals, or sports events, find out why our platform is the preferred choice for
          hassle-free bookings and unforgettable moments.
        </p>
      </div>
      <div className="flex-1 relative h-full p-4">
        <div
          className={`flex flex-col justify-center items-center rounded-xl border-2 p-8 ${borderStyle}`}
        >
          <div className="size-24 rounded-full overflow-hidden mb-4">
            <Image
              src="/home/face.jpg"
              alt="User Review"
              width={96}
              height={96}
              priority
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center mb-4">
            <h2 className="mb-2 text-lg font-semibold">Annie Marrow</h2>
            <p>Coordinator - Saz Events</p>
          </div>
          <p className="text-center mb-2">
            Don’t just take our word for it. Discover honest reviews from real users about their
            seamless, reliable, and enjoyable ticket booking experiences. Whether it’s concerts,
            festivals
          </p>
          <div className="flex flex-row gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                className={`size-8 ${isDark ? "text-yellow-300" : "text-yellow-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Comments);
