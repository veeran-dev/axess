import {
    ArrowDownTrayIcon,
    ArrowTopRightOnSquareIcon,
    EllipsisVerticalIcon,
  } from "@heroicons/react/24/outline";
  import { memo, useState } from "react";
import Pagination from "../table/pagination";
import withPagination from "@/lib/withPagination";
  
  const Tickets = () => {
    const [menuVisible, setMenuVisible] = useState<number | null>(null);
    
    
    const toggleMenu = (index: number) => {
      setMenuVisible(menuVisible === index ? null : index);
    };
  
    const closeMenu = () => setMenuVisible(null);
  
    return (
        <div>
            <div>
                {Array(3)
                .fill(0)
                .map((_, index) => (
                    <div
                    key={index}
                    className="flex flex-col space-y-2 py-4 pl-4 pr-8 mb-4 rounded-lg border-[1px] border-gray-200 relative"
                    >
                    <div className="absolute right-2 pt-2">
                        <EllipsisVerticalIcon
                        className="cursor-pointer size-6 ml-auto"
                        onClick={() => toggleMenu(index)}
                        />
                        {menuVisible === index && (
                        <div
                            className="absolute right-2 top-8 bg-white border border-gray-300 shadow-lg rounded-md p-2 w-[80px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                            className="block text-sm text-red-600 text-center hover:bg-gray-100 w-full rounded-md"
                            onClick={() => {
                                console.log(`Cancel ticket ${index}`);
                                closeMenu();
                            }}
                            >
                            Cancel
                            </button>
                        </div>
                        )}
                    </div>
                    <div className="text-sm font-bold text-indigo-600 flex flex-row justify-between">
                        <div>13, November 2024 12:45 PM</div>
                        <div>Single Adult Pass</div>
                    </div>
                    <div className="text-gray-800 font-bold flex flex-row justify-between pb-8">
                        <h2>Digital Dialogue & Pandora Presents – Kaufmann</h2>
                        <h2>3 Passes</h2>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div>November 13, 2024 - November 14, 2024</div>
                        <div className="cursor-pointer flex flex-row justify-center items-center hover:font-semibold">
                        <ArrowDownTrayIcon className="size-4 mr-2" />
                        <span>Download</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div>House Of Chapora</div>
                        <div className="cursor-pointer flex flex-row justify-center items-center hover:font-semibold">
                        <ArrowTopRightOnSquareIcon className="size-4 mr-2" />
                        <span>View</span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    );
  };
  
  export default memo(withPagination(Tickets));
  