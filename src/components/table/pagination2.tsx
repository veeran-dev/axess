import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { PaginationAction, usePaginationContext } from '@/context/paginationContext';

function Pagination2() {
  const { totalCount, setPageSize, pageSize, currentPage, navigate, paginationData, setCursor } = usePaginationContext();
  const { next, prev, first, last } = paginationData;
  const pageSizeOptions = [24, 48, 100];

  return (
    <div className="flex items-center justify-between border-t border-gray-700 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => navigate(PaginationAction.PREV)}
          disabled={!prev}
          className={`${
            !prev ? 'bg-gray-800 text-gray-600' : 'bg-gray-900 text-white hover:bg-gray-700'
          } relative inline-flex items-center rounded-md border border-gray-600 px-4 py-2 text-sm font-medium`}
        >
          Previous
        </button>
        <button
          onClick={() => navigate(PaginationAction.NEXT)}
          disabled={!next}
          className={`${
            !next ? 'bg-gray-800 text-gray-600' : 'bg-gray-900 text-white hover:bg-gray-700'
          } relative ml-3 inline-flex items-center rounded-md border border-gray-600 px-4 py-2 text-sm font-medium`}
        >
          Next
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-300">
            Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to{' '}
            <span className="font-medium">{Math.min(currentPage * pageSize, totalCount)}</span> of{' '}
            <span className="font-medium">{totalCount}</span> results
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center mr-2">
            <label htmlFor="pageSize" className="mr-2 text-sm text-gray-300">
              Rows per page:
            </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => {
                if (setPageSize) {
                  setPageSize(parseInt(e.target.value));
                  setCursor('');
                }
              }}
              className="h-[36px] w-[60px] rounded-md border border-gray-600 bg-gray-900 text-gray-300 py-1 px-2 text-sm font-medium"
            >
              {pageSizeOptions.map((size) => (
                <option key={'pagesize' + size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <nav aria-label="Pagination" className="isolate flex space-x-1 rounded-md shadow-sm">
            <button
              onClick={() => navigate(PaginationAction.FIRST)}
              disabled={!first}
              className={`${
                !first
                  ? 'bg-gray-800 text-gray-600 pointer-events-none'
                  : 'bg-gray-900 text-white hover:bg-gray-700'
              } relative inline-flex items-center rounded-l-md border border-gray-600 px-4 py-2 text-sm font-medium`}
            >
              <ChevronDoubleLeftIcon aria-hidden="true" className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate(PaginationAction.PREV)}
              disabled={!prev}
              className={`${
                !prev ? 'bg-gray-800 text-gray-600 pointer-events-none' : 'bg-gray-900 text-white hover:bg-gray-700'
              } relative inline-flex items-center px-2 py-2 rounded text-gray-400 ring-1 ring-inset ring-gray-600 hover:bg-gray-700 focus:z-20 focus:outline-offset-0`}
            >
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            <button
              onClick={() => navigate(PaginationAction.NEXT)}
              disabled={!next}
              className={`${
                !next ? 'bg-gray-800 text-gray-600 pointer-events-none' : 'bg-gray-900 text-white hover:bg-gray-700'
              } relative inline-flex items-center px-2 py-2 rounded text-gray-400 ring-1 ring-inset ring-gray-600 hover:bg-gray-700 focus:z-20 focus:outline-offset-0`}
            >
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate(PaginationAction.LAST)}
              disabled={!last}
              className={`${
                !last
                  ? 'bg-gray-800 text-gray-600 pointer-events-none'
                  : 'bg-gray-900 text-white hover:bg-gray-700'
              } relative inline-flex items-center rounded-r-md border border-gray-600 px-4 py-2 text-sm font-medium`}
            >
              <ChevronDoubleRightIcon aria-hidden="true" className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Pagination2);
