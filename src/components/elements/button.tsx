import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean
}

const getClassName = (type: 'button' | 'submit' | 'reset'): string => {
  switch (type) {
    case 'reset':
      return 'bg-transparent border-[1px] border-primary text-primary hover:bg-primary/10';
    default:
      return 'bg-gray-600 text-white hover:bg-primary/90';
  }
};

const Button: React.FC<ButtonProps> = ({ type, onClick, className, disabled=false, children }) => {
  return (
    <button
      key={"button_" + Math.random()}
      type={type}
      onClick={onClick}
      className={` 
        mx-2 items-center text-nowrap flex w-sm justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary 
        ${getClassName(type)} 
        ${className}
        ${disabled ? 'opacity-50 pointer-events-none':''}
        `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
