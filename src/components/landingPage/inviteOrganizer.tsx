import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { memo } from "react";

const InviteOrganizer = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const backgroundStyle = isDark
    ? "bg-[linear-gradient(#48556354,#29323c00)] text-white"
    : "bg-white text-gray-800";

  const buttonStyle = isDark
    ? "bg-indigo-400 text-black"
    : "bg-indigo-600 text-white";

  return (
    <div className={`grid sm:grid-cols-2 grid-cols-1 rounded-xl ${backgroundStyle}`}>
      <div className="flex flex-col flex-wrap py-12 sm:pl-4 p-4">
        <div className="mb-12">
          <p className={`text-sm ${isDark ? "text-indigo-400" : "text-indigo-700"}`}>Welcome</p>
          <h2 className="font-bold text-xl capitalize">Make your events come true</h2>
        </div>
        <p className="text-base mb-2">
          Unlock the full potential of your event with our platform. Manage bookings, reach a broader audience, and ensure an extraordinary experience for every attendee. Let’s make your event unforgettable!
        </p>
        <button
          className={`flex flex-row justify-center items-center font-bold rounded-lg p-2 w-[120px] ${buttonStyle}`}
        >
          <HeartIcon className="size-6 mr-2" />
          <span>Join Us</span>
        </button>
      </div>
      <div className="relative min-h-[312px]">
        <div className="h-full w-full">
          <Image
            src="/home/invite.png"
            alt="Invite Organizer"
            layout="fill"
            objectFit="cover"
            priority
            className={`border-2 rounded-2xl ${
              isDark ? "border-gray-700 bg-black" : "border-white bg-white"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(InviteOrganizer);