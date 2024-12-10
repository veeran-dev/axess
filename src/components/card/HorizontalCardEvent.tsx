import { encodedID } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';

export interface HorizontalCardProps {
  eventID: string;
  imageUrl: string;
  title: string;
  location: string;
  date: string;
  status: string;
  totalSeats: number;
  reserved: number;
  couponCount: number;
  createdOn: string;
}

const HorizontalCardEvent = ({
  eventID,
  imageUrl,
  title,
  location,
  date,
  status,
  totalSeats,
  reserved,
  couponCount,
  createdOn,
}: HorizontalCardProps) => {
  const router = useRouter();
  const manageEvent = (id: string) => {
    router.push(`/events/manage/${encodedID(id)}`);
  };
  return (
    <div
      onClick={() => manageEvent(eventID)}
      className="cursor-pointer flex flex-col md:flex-row p-4 border rounded-lg shadow-md bg-white md:space-x-4 space-y-4 md:space-y-0 w-full"
    >
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <Image
          alt={title}
          height={120}
          width={120}
          src={imageUrl ? imageUrl : '/cardbanner.png'}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-2 text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="text-gray-600 items-center flex flex-col sm:flex-row space-y-1">
          <span className="w-[180px]">{location}</span>
          <span>{date}</span>
        </div>
        <div className="text-gray-700 items-center flex flex-col sm:flex-row space-y-1">
          <span className="w-[180px]">{`${reserved} / ${totalSeats} Seats`}</span>
          <span>{`${couponCount} Coupons`}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center md:items-end space-y-2">
        <div
          className={`px-3 py-1 rounded-full text-sm ${
            status === 'Active'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {status}
        </div>
        <div className="text-sm text-gray-500">{createdOn}</div>
      </div>
    </div>
  );
};

export default HorizontalCardEvent;
