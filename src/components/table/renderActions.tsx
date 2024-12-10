import React from 'react'
import { Action } from './tableInterface';


const renderActions = (
    actions: Action[],
    onClick: (label: string, id: string) => void
    
  ) => {
    return (
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <div className='flex flex-row'>
        {actions.map((action, i) => (
          <button
            type='button'
            key={i}
            onClick={()=>onClick(action.label, action.id ?? "")}
            className="w-full flex flex-row justify-center items-center text-primary hover:text-darkPrimary mr-2 px-2"
          >
            {action?.icon ? action.icon : action.label}
          </button>
        ))}
        </div>
      </td>
    );
  };

export default renderActions
