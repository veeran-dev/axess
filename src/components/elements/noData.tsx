import React from 'react';
import Button from './button';
import { FilmIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const NoData: React.FC = () => {
    
    const toDashboard = () => {
        window.location.href = '/dashboard';
    }

    const refresh = () => {
        window.location.reload()
    }

    return (
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className="fadeIn relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className='fadeIn'>
                    <div className='flex flex-row'>
                        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-danger/10">
                            <FilmIcon aria-hidden="true" className="size-12 text-yellow-600 animate-shake-infinite" />
                            <span className='absolute animate-slide-left-right translate-x-8'>
                                <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6 text-primary" />
                            </span>
                        </div>
                    </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3  className="text-base font-semibold leading-6 text-text">
                      {"No Data Found"}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-text/50">
                        {"Sorry, Please try again later"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <Button 
                        type={"reset"}
                        onClick={refresh}
                    >
                    Refresh
                  </Button>
                  <Button 
                        type={"button"}
                        onClick={toDashboard}
                    >
                    Dashboard
                  </Button>
                </div>
              </div>
            </div>
      )
}

export default NoData;
