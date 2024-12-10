import AutoSearch from '@/components/AutoSearch';
import Dropdown, { FilterItem } from '@/components/Dropdown';
import Header from '@/components/header';
import withAdminLayout from '@/lib/withAdminLayout';
import Link from 'next/link';
// import { useState } from 'react';
import { useCallback } from 'react';
import { horizontalCardEventData } from '../../constant/event';
import HorizontalCardEvent, { HorizontalCardProps } from '@/components/card/HorizontalCardEvent';
import Pagination from '@/components/table/pagination';
import withPagination from '@/lib/withPagination';

const Events = () => {
  // const [query, setQuery] = useState<string>('');

  const handleSelectedEvent = useCallback((id: string, label: string) => {
    console.log('id, label', id, label);
  }, []);

  const fetchData = useCallback((q: string) => {
    // setQuery(q)
    console.log("q..",q)
  }, []);

  return (
    <div className="">
      <div className="my-4">
        <Header title="Events" />
      </div>
      <div className="flex flex-row">
        <AutoSearch
          loading={false}
          data={undefined}
          fetchData={() => fetchData}
          placeholder={'Search Events'}
          onSelect={() => handleSelectedEvent}
        />
        <div className='w-md ml-4'>
          <Dropdown
            items={[]}
            onSelect={(selectedItems:FilterItem[])=>console.log(selectedItems)}
            placeholder={'Status'}
            showSelectedItems={false}
            multi={false}
          />
        </div>
        <div className='ml-auto'>
            <Link href={'./events/create'} className="relative inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
              Create Event
            </Link>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        {horizontalCardEventData.map((item: HorizontalCardProps, index:number) => (
          <HorizontalCardEvent key={index} {...item} />
        ))}
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  );
};

export default withPagination(withAdminLayout(Events))
