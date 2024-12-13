import { TicketIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

const EventCard2 =() =>{
    return(
        <Link href={'/event/131n3kj1n'}>
        <div className=" cursor-pointer flex sm:flex-row flex-col items-center justify-center rounded-lg mb-8 backdrop-blur-md bg-black p-2">
            <div className="relative w-[240px] h-[180px] rounded-lg overflow-hidden border-[2px] border-[#393939]">
                <div className="absolute top-2 left-2 z-10 bg-yellow-400 rounded-lg">
                    {/* <p className="inline-flex justify-start items-center"><TicketIcon className="text-indigo-800 size-8 pr-2" /> 120 Available</p> */}
                    <p className="text-xs font-semibold text-gray-700 px-2 py-2">Drum and Bass</p>
                </div>
                <Image
                    src={'https://axess.zone/wp-content/uploads/2024/12/AH-axess-cover-2.jpg'}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="text-gray-100 flex flex-col sm:justify-center justify-start space-y-2 max-w-[240px] pl-4 sm:mt-0 mt-4">
                <h2 className=" font-bold">Digital Dialouge & Pandora Presents Kaufmann</h2>
                <p className=" text-ellipsis truncate">November 13, 2024 - November 14, 2024</p>
                <p className="inline-flex justify-start items-center"><TicketIcon className="text-yellow-400 size-8 pr-2" /> 120 Available</p>
                <p>₹999.00 Onwards</p>
                {/* <a href={`event/1234`} className="w-full rounded-lg bg-gray-950 border-[1px] border-gray-900 text-white text-center px-4 py-2">Buy Now</a> */}
            </div>

        </div>
        </Link>
    )
}

export default memo(EventCard2)