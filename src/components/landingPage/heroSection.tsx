import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function HeroSection() {
    return (
      <div className="bg-white pt-16 pb-8 ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left py-8 pl-8">
            <h1 className="text-4xl font-bold mb-4">
              Your Gateway To <br />
              Unforgettable Events Awaits!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover and book exclusive experiences across music, sports,
              festivals, and more.
            </p>
            <div className="mt-12">
                <div className="relative">
                    <MagnifyingGlassIcon className="size-6 absolute text-indigo-600 top-3 left-4"/>
                    <input type="text" className="h-12 rounded-full w-full" />
                </div>
            </div>
            <div className="flex flex-wrap justify-between pl-4 pt-2">
              <a>Drum and Bass</a>
              <a>Concerts</a>
              <a>Carnival</a>
              <a>Festival</a>
              <a>Art Gathering</a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative ">
            <div className="w-full h-96 relative">
                <Image
                    src="/home/hero.jpg"
                    alt="Hero"
                    layout="fill"
                    objectFit="contain" // Ensures the image is contained within its box
                    priority // Optimizes the image for faster loading
                    className=""
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
  