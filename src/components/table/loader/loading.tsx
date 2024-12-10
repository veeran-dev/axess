import React from 'react';
import { useTableContext } from '../tableContext';

interface LoadingProps {
  rows?: number;
  columns?: number;
}

const Loading: React.FC<LoadingProps> = ({ rows = 9 }) => {
  const { tableHeaders } = useTableContext();
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <SkeletonRow key={rowIndex} columns={tableHeaders.length+1} />
      ))}
    </tbody>
  );
};

export default React.memo(Loading);

interface SkeletonRowProps {
  columns: number;
}

const SkeletonRow: React.FC<SkeletonRowProps> = ({ columns }) => (
  <tr className="h-[63px] fade-out transition-all">
    {Array.from({ length: columns+1 }).map((_, colIndex) => (
      <td key={colIndex} className="whitespace-nowrap px-3 py-4">
        <div className={`h-4 w-32'} rounded animate-pulse-shimmer`}></div>
      </td>
    ))}
  </tr>
);
