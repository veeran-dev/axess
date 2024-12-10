import React from 'react';

interface DynamicFormSkeletonProps {
  fieldCount: number;
}

const DynamicFormSkeleton: React.FC<DynamicFormSkeletonProps> = ({ fieldCount=4 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-pulse">
      {Array.from({ length: fieldCount }).map((_, index) => (
        <div key={index} className="flex flex-col max-w-sm">
          <div className="h-4 w-32 rounded bg-gray-200 mb-2"></div>
          <div className="h-10 w-full rounded bg-gray-200 mb-1"></div>
        </div>
      ))}
      <div className="mt-12 col-span-2">
        <div className="h-10 w-32 rounded bg-gray-200"></div>
      </div>
    </div>
  );
};

export default DynamicFormSkeleton;
