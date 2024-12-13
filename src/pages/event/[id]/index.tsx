import { memo } from 'react';
import Image from 'next/image';
import withPublicLayout from '@/lib/withPublicLayout';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';
import Terms from '@/components/eventDetails/terms';
import EventCard from '@/components/explore/eventCard';

const Event = () => {
  return (
    <>
    <div className="rounded-lg">
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-2">
        <div className="flex flex-col col-span-4 bg-white rounded-lg">
          <div className="relative pb-[80px] h-[315px] mb-24">
            <Image
              alt="Event Cover"
              src="/home/eventCover.png"
              layout='fill'
              objectFit="fill"
              className="rounded-lg border-2 border-gray-100"
            />
            <Image
              src="/home/eventCard.png"
              alt="Image 3"
              width={160}
              height={640}
              priority
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              className="rounded-lg border-2 border-gray-100 absolute -bottom-16 left-8"
            />
          </div>
          <div className="flex flex-col flex-wrap h-full">
            <div className="flex-1 flex flex-col py-4 px-8 space-y-4 h-full">
              <div className="">
                <p className="text-sm text-indigo-700">Drums and Bass Events</p>
                <h2 className="font-bold text-xl">
                  Digital Dialouge & Pandora Presents – Kaufmann
                </h2>
              </div>
              <p className="text-base mb-2" style={{ whiteSpace: 'pre-line' }}>
                {`
                                Chennai's greatest pop-culture extravaganza is back! Get ready for an epic showcase of comics, cosplay, collectible merch, toys, immersive  fan experiences, gaming, and more.

                                \n Join us for the best weekend of the year!

                                Comic Con India is the grandest pop-culture celebration on the subcontinent.  With multiple shows held across India, we draw in over 200K fans  annually, and our digital reach extends to over 20 Million fans with a  cumulative social reach of over 141 Million. Our events unite various  fandoms, encompassing comics, toys, merchandise, anime, cosplay, TV  shows, movies, gaming, and beyond.

                                Comic Con India is the grandest pop-culture celebration on the subcontinent.  With multiple shows held across India, we draw in over 200K fans  annually, and our digital reach extends to over 20 Million fans with a  cumulative social reach of over 141 Million. Our events unite various  fandoms, encompassing comics, toys, merchandise, anime, cosplay, TV  shows, movies, gaming, and beyond.
                            `}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 col-span-2 px-4 h-full">
            <div className="bg-white flex flex-col py-8 px-4 rounded-lg">
                <div className="mb-2">
                <p className="text-sm text-indigo-700">Drum and Bass</p>
                <h2 className="font-bold text-xl">
                    Digital Dialouge & Pandora Presents – Kaufmann
                </h2>
                </div>
                <div className="flex flex-row justify-start items-center mb-8">
                <CheckBadgeIcon className="size-6 text-indigo-600 mr-2" />
                <span>120 Available</span>
                </div>
                <p className="text-base mb-2 mt-auto">
                November 13, 2024 - November 14, 2024
                </p>
                <p className="text-base mb-8">House Of Chapora</p>
            </div>
            <div className='bg-gray-100 text-gray-800 py-8 px-4 rounded-lg h-full'>
                <div className='mb-8'>
                    <h2 className="font-bold text-xl">
                        Choose Tickets
                    </h2>
                </div>
                <div className='flex flex-col space-y-8'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <p className=' mb-2'>Sinlge Adult Pass</p>
                            <h2 className='font-bold text-xl'>₹ 999.00</h2>
                        </div>
                        <button className='bg-gray-300 rounded w-[90px] font-bold px-4 py-2 uppercase hover:bg-gray-200'>ADD</button>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <p className=' mb-2'>Sinlge Adult Pass</p>
                            <h2 className='font-bold text-xl'>₹ 999.00</h2>
                        </div>
                        <button className='bg-gray-300 rounded w-[90px] font-bold px-4 py-2 uppercase hover:bg-gray-200'>ADD</button>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <p className=' mb-2'>Sinlge Adult Pass</p>
                            <h2 className='font-bold text-xl'>₹ 999.00</h2>
                        </div>
                        <button className='bg-gray-300 rounded w-[90px] font-bold px-4 py-2 uppercase hover:bg-gray-200'>ADD</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-6 grid-cols-1 gap-2">
      <div className='bg-white mt-8 col-span-4 rounded-lg'>
        <Terms/>
      </div>
    </div>
    <div className='bg-transparent rounded-lg my-8'>
      <h2 className="text-white font-bold text-xl mb-4">
        Upcoming Events
      </h2>
      <div className="grid sm:grid-cols-4 grid-cols-1 place-items-start">
        {
            Array(4).fill(0).map((i)=>
                <EventCard key={i}/>
            )
        }
      </div>
    </div>
    </>
  );
};

export default memo(withPublicLayout(Event));
