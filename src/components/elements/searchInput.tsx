import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React, { useEffect, useState } from "react"
import Input from "./input"
import useDebounce from "@/utils/debounce"


const Search = ({placeholder, onSearch}:{placeholder:string, onSearch:(s:string)=>void}) => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    console.log("debouncedSearchTerm...",debouncedSearchTerm)

    useEffect(() => {
        if (debouncedSearchTerm && debouncedSearchTerm !== "") {
          console.log("1debouncedSearchTerm...",debouncedSearchTerm)
          onSearch(searchTerm)
        }
      }, [onSearch, searchTerm, debouncedSearchTerm]);

    return (
        <div className='relative'>
            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6 absolute left-2 top-2 text-gray-400" />
            <Input 
                placeholder={placeholder} 
                className={'pl-10 '} 
                name={'searchTable'} 
                type={'text'} 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
        </div>
    )
}

export const MemoizedSearch = React.memo(Search)