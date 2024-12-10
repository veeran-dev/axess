import React from 'react';
import { useTableContext } from '../tableContext';

interface HeaderLoaderProps {
  columns?: number;
}

const HeaderLoader:React.FC<HeaderLoaderProps> = () => {
  const { tableHeaders } = useTableContext();
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="w-[18px] px-3 py-4">
          <div className="flex h-6 items-center">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </th>

        {[...Array(tableHeaders.length+1)].map((_, index) => (
          <th key={index} className="px-3 py-3.5">
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default HeaderLoader;
