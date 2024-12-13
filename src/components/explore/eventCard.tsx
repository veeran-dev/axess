import Image from "next/image"
import { memo } from "react"

const EventCard =() =>{
    return(
        <div className="border-gray-200 border-[1px] cursor-pointer flex flex-col items-center justify-center rounded-lg bg-white max-w-[240px] mb-8">
           <div className="relative w-[240px] h-[180px] rounded-lg overflow-hidden border-[2px] border-[#393939]">
                <div className="absolute top-2 left-2 z-10 bg-yellow-400 rounded-lg">
                    <p className="text-xs font-semibold text-gray-700 px-2 py-2">Drum and Bass</p>
                </div>
                <Image
                    src={'https://axess.zone/wp-content/uploads/2024/10/km-delhi-teaser-banner-1920x739.png'}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="text-md text-gray-600 p-4 flex flex-col justify-between items-center space-y-4">
                <h2 className=" font-bold">Digital Dialouge & Pandora Presents Kaufmann</h2>
                <p className=" text-ellipsis truncate max-w-[206px]">November 13, 2024 - November 14, 2024</p>
                <div className="w-full flex flex-row justify-between">
                    <p><span className="text-md font-bold text-indigo-500">120</span> <span className="text-sm">Available</span></p>
                    <p><span className="text-md font-bold text-indigo-500">₹999.00</span> <span className="text-sm">Onwards</span></p>
                </div>
            </div>

        </div>
    )
}

export default memo(EventCard)