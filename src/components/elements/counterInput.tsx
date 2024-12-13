import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface CounterInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

const CounterInput: React.FC<CounterInputProps> = ({ value, onChange }) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value > 0 ? value - 1 : 0); // Prevent negative values
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0) {
      onChange(val);
    }
  };

  return (
    <div className="cursor-pointer w-[90px] flex flex-row justify-center items-center border-[1px] border-gray-300 rounded">
      <button
        onClick={increment}
        className="flex justify-center items-center w-[30px] h-[30px] text-gray-800 hover:bg-gray-100 rounded-l"
      >
        <PlusIcon className="w-5 h-5" />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="flex w-[40px] flex-shrink border-none text-center appearance-none focus:outline-none focus:ring-0"
      />
      <button
        onClick={decrement}
        className="flex justify-center items-center w-[30px] h-[30px] text-gray-800 hover:bg-gray-100 rounded-r"
      >
        <MinusIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CounterInput;
