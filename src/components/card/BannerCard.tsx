import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { memo } from 'react';
import Header from '../header';
import { useRouter } from 'next/router';

interface BannerCardProps {
    eventID:string;
    title: string;
    imageSrc: string;
    availableTickets: string;
    startDate: string;
    endDate?: string;
    location: string;
    downloadRegistrants?: (eventID:string) => void
}

const BannerCard: React.FC<BannerCardProps> = ({
    eventID,
    title,
    availableTickets,
    startDate,
    endDate,
    location,
    imageSrc,
    downloadRegistrants
}) => {
  const router = useRouter();

  const previewEvent = (id: string) => {
    const encodedID = btoa(encodeURIComponent(id));
    router.push(`/event/preview/${encodedID}`);
  };
  

  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          alt="banner"
          src={imageSrc}
          layout="responsive"
          width={1000}
          height={500}
          className="rounded-t-md"
        />
      </div>
      <div className="p-4 flex flex-row justify-between bg-white rounded-b-md">
        <div>
          <Header title={title} />
          <div className="my-4">
            <p>
              {startDate} - {endDate}
            </p>
            <p>{location}</p>
          </div>
          <div className="flex flex-row items-center">
            <TicketIcon className="h-6 w-6 mr-2 text-indigo-600" />
            <span>{availableTickets}</span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
            <div onClick={()=>previewEvent(eventID)} className="cursor-pointer flex flex-row items-center mb-2">
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 text-indigo-600" />
                <span>Preview</span>
            </div>
            {downloadRegistrants &&
            <div onCanPlay={()=>downloadRegistrants(eventID)} className="cursor-pointer flex flex-row items-center">
                <ArrowDownTrayIcon className="h-5 w-5 mr-2 text-indigo-600" />
                <span>Download Registrants</span>
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default memo(BannerCard);
