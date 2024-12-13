import { memo } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useCallback, useState } from 'react';
import EditProfile from './editProfile';
import Tickets from './tickets';

const tabs = [
  {
    name: 'Profile',
    component: <EditProfile />,
  },
  { name: 'Tickets', current: false, component: <Tickets/> },
];

const ProfileSetup = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const activeTabComponent = useCallback(
    () => tabs.find((tab) => tab.name === activeTab)?.component,
    [activeTab]
  );
  return (
    <div className="">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:hidden">
            <select
              onChange={(e) => handleTabClick(e.target.value)}
              value={activeTab}
              aria-label="Select a tab"
              className="text-gray-800 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-white/10 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            >
              {tabs.map((tab) => (
                <option
                  className="text-gray-800"
                  key={tab.name}
                  value={tab.name}
                >
                  {tab.name}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400"
            />
          </div>
          <div className="hidden sm:block">
            <nav className="flex border-b border-white/10 py-4">
              <ul
                role="list"
                className="flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-gray-400"
              >
                {tabs.map((tab) => (
                  <li key={tab.name}>
                    <button
                      onClick={() => handleTabClick(tab.name)}
                      className={`${
                        tab.name === activeTab
                          ? 'text-indigo-500 border-b-2 border-indigo-500'
                          : ''
                      } pb-2`}
                    >
                      {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            {activeTabComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProfileSetup);
