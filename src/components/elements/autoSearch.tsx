import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useState, memo, useEffect } from 'react';
import Loader from './loader';
import Input from './input';


export interface SearchResult {
  id: string;
  name: string;
}

interface AutoSearchProps {
  loading: boolean;
  data: SearchResult[] | undefined;
  fetchData: (query: string) => void;
  placeholder: string;
  onSelect: (id: string, label: string) => void;
}

const AutoSearch: React.FC<AutoSearchProps> = ({
  loading,
  data = [],
  placeholder,
  fetchData,
  onSelect,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string>('');
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    setResults(data || []);
    setNoResults(data?.length === 0);
  }, [data]);

  const searchQuery = async (searchTerm: string) => {
    console.log("searchQuery...",searchTerm)
    if (!searchTerm) {
      setResults([]);
      setNoResults(false);
      return;
    }
    setError('');
    setNoResults(false);
    console.log("fetchData searchTerm....",searchTerm)
    fetchData(searchTerm);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    searchQuery(e.target.value);
  };

  const handleSelect = (id: string, name: string) => {
    setQuery(name);
    setResults([]);
    onSelect(id, name);
  };

  return (
    <div className="relative w-[320px]">
      <MagnifyingGlassIcon className="h-6 w-6 absolute left-2 top-2 text-gray-400" />
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        name={'autoSearch'}
        className={'max-w-md pl-10'}
      />

      {query && (
        <div className="py-2 absolute z-10 w-full bg-white mt-2 max-h-60 overflow-y-auto rounded-lg">
          {loading && (
            <div>
              <Loader
                size={'w-4 h-4'}
                classname={
                  'flex flex-row justify-start items-center h-[38px] px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer'
                }
                msg={'loading...'}
              />
            </div>
          )}
          {error && <div className="p-4 text-red-500">{error}</div>}
          {data.length > 0 && (
            <ul>
              {results.map((result) => (
                <li
                  onClick={() => handleSelect(result.id, result.name)}
                  key={result.id}
                  className="h-[38px] px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
          {!loading && !error && noResults && (
            <div className="h-[38px] px-4 py-2 text-sm hover:bg-gray-50 text-gray-500">
              No Data Found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(AutoSearch);
