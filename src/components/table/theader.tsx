import React, { useRef } from 'react';
import { useTableContext } from './tableContext';

const TableHeader: React.FC = () => {
    const { isCheckbox, tableHeaders, toggleRowSelection } = useTableContext();
    const headerCheckboxRef = useRef<HTMLInputElement>(null);
    
    const selectToggle =()=>{
        if(toggleRowSelection){
            toggleRowSelection(headerCheckboxRef.current?.checked ? 'All':'None', '')
        }
    }

    return(
        <thead className="bg-gray-50">
            <tr>
                {isCheckbox && 
                    <th className="w-[18px] px-3 py-4" 
                        key={`checkbox_all}`}>
                        <div className="flex h-6 items-center">
                                <input
                                ref={headerCheckboxRef}
                                id="select_all"
                                type="checkbox"
                                className="h-4 w-4 rounded border-indigo/10 bg-primary/5 text-primary focus:ring-primary focus:ring-offset-gray-900"
                                onClick={()=>selectToggle()}
                                />
                        </div>
                    </th>}
                    
            {tableHeaders.map((header) => (
                <th
                key={header.path}
                scope="col"
                className={`${
                    header.path === 'Action'
                    ? "relative py-3.5 pl-3 pr-4 sm:pr-6 w-2 text-sm"
                    : "px-3 py-3.5 text-left text-sm font-semibold text-text capitalize text-nowrap"
                }`}
                >
                {header.as === 'edit' ? (
                    "Actions"
                ) : (
                    header.as || header.path
                )}
                </th>
            ))}
            </tr>
        </thead>
    )
};

export default React.memo(TableHeader);
