import { useCallback, useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';

export interface FilterItem {
  label: string;
  id?: string;
}

export interface DropdownProps {
  items: FilterItem[];
  onSelect: (selectedItems: FilterItem[]) => void;
  placeholder:string
  showSelectedItems: boolean;
  multi: boolean;
}

const Dropdown = ({ items, onSelect, placeholder, showSelectedItems=false, multi }: DropdownProps) => {
  const [selectedItems, setSelectedItems] = useState<FilterItem[]>([]);
  

  useEffect(()=>{
    console.log("Dropdown useEffect")
    onSelect(selectedItems)
  },[selectedItems])

  const handleSelect = useCallback((item: FilterItem) => {
    console.log("Dropdown handleSelect...")
    if(!multi){
      setSelectedItems([item]);
      
    }
    else{
      const isSelected = selectedItems.some(
        (selectedItem) => selectedItem.id === item.id || selectedItem.label === item.label
      );
      
      const updatedSelection = isSelected
        ? selectedItems.filter(
            (selectedItem) => selectedItem.id !== item.id && selectedItem.label !== item.label
          )
        : [...selectedItems, item];
      
      setSelectedItems(updatedSelection);
    }
  },[multi, selectedItems, setSelectedItems, onSelect])

  
  const handleRemove = (item: FilterItem) => {
    const updatedSelection = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id && selectedItem.label !== item.label
    );
    setSelectedItems(updatedSelection);
  };

  return (
    <div className='flex flex-row mr-4'>

      <Menu as="div" className="relative inline-block text-left w-full">
        <MenuButton className="h-[38px ] leading-[22px] flex flex-row w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-text shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <span>{!multi && selectedItems.length>0 ? selectedItems[0].label : placeholder}</span>
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
        >
          <div className="py-1">
            {items.map((item) => {
              const isSelected = selectedItems.some(
                (selectedItem) => selectedItem.id === item.id || selectedItem.label === item.label
              );
              
              return (
                <MenuItem key={item.id || item.label}>
                  {({ active }) => (
                    <button
                      onClick={() => handleSelect(item)}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        active ? 'bg-gray-100 text-text' : 'text-gray-700'
                      } ${isSelected ? 'bg-primary/20 font-semibold' : ''}`}
                    >
                      {item.label}
                    </button>
                  )}
                </MenuItem>
              );
            })}
          </div>
        </MenuItems>
      </Menu>

      {showSelectedItems &&
      <div className="ml-2 flex gap-2">
        {selectedItems.map((item) => (
          <div
            key={item.id || item.label}
            className="flex items-center px-4 py-1 bg-gray-200 text-sm rounded-full"
          >
            <span className='truncate text-text'>{item.label}</span>
            <button
              onClick={() => handleRemove(item)}
              className="ml-2 text-gray-600 hover:text-gray-800"
            >
              <XMarkIcon className="h-4 w-4 hover:text-red-600" />
            </button>
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default Dropdown;
