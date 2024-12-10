import React from 'react';

interface InputProps {
    value:string;
    className?:string;
    label?: string;
    name: string;
    type: string;
    placeholder?: string;
    error?:string;
    pattern?:string;
    rows?: number;
    onKeyPress?:(e:React.KeyboardEvent<HTMLInputElement>)=>void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?:()=>void
}

const Input:React.FC<InputProps> =(props:InputProps)=>{
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return(
        <div className="">
            {props.label &&
            <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>}
            <div>
                <input
                {...props}
                className={classNames(`block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-secondary  focus:ring-secondary sm:text-sm ${props.className}`)}
                />
            </div>
        </div>
    )
}

export default React.memo(Input)