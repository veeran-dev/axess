import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useCallback, useState } from 'react';

const tabs = [
    {
        name: 'Terms and Conditions',
        href: '#',
        content: `In the event of any breach of these terms & conditions, the organizers reserve the right to cancel tickets, to refuse admission, to remove the holder or to confiscate offending articles, as the case may be, and in any case, to retain any money paid for the relevant ticket.

        Tickets cannot be transferred, re-sold, refunded, or re-issued. If this ticket is re-sold or transferred for profit or commercial gain by anyone other than the promoter or one of its authorized sub-agents, it will become void and the holder may be refused entry or removed from the venue.

        No tickets will be exchanged or transferred under any circumstances.

        The resale of tickets is prohibited. All rights reserved to cancel any tickets that have been resold.

        Lost, stolen, damaged, destroyed or undelivered QR codes or tickets cannot be replaced or refunded. There will be no admission without a valid QR / Code ticket.

        Tickets are sold subject to the organizer’s right to alter or vary the performances/artists or the festival without being obliged to refund money or exchange tickets.

        The organizers reserve the right to refuse admission to the festival if the holder is found in violation of these terms and conditions.

        Security personnel will conduct searches of persons entering the venue to ensure the safety of the persons at the venue. Anyone found carrying prohibited material will be denied entry at the gate.

        Any person who fails to comply with instructions or another person acting for the organizers or behaving against the peaceful atmosphere may be removed from the venue.

        No refund on tickets will be made under any circumstances except pursuant to conditions under Event Cancellation or Postponement. Please read more about our refund policy.`,
      },
  { name: 'Right to Admissions', href: '#', current: false, content: `The resale of tickets is prohibited. All rights reserved to cancel any tickets that have been resold.` },
  { name: 'Terms of Use', href: '#', current: false, content: `Any person who fails to comply with instructions or another person acting for the organizers or behaving against the peaceful atmosphere may be removed from the venue.` },
  { name: 'General Guidelines', href: '#', current: false, content: `No refund on tickets will be made under any circumstances except pursuant to conditions under Event Cancellation or Postponement. Please read more about our refund policy` },
];

export default function Terms() {
    const [activeTab, setActiveTab] = useState(tabs[0].name);
    
    const handleTabClick = (tabName:string) => {
        setActiveTab(tabName);
    };

    const activeTabContent = useCallback(()=>tabs.find((tab) => tab.name === activeTab)?.content,[activeTab])

  return (
    <div className="rounded-lg bg-white px-4 py-6 sm:px-6 lg:px-8 min-h-[320px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:hidden">
          <select
            onChange={(e) => handleTabClick(e.target.value)}
            value={activeTab}
            aria-label="Select a tab"
            className="text-gray-800 col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-white/10 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
          >
            {tabs.map((tab) => (
              <option className="text-gray-800" key={tab.name} value={tab.name}>{tab.name}</option>
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
                      tab.name === activeTab ? 'text-indigo-500 border-b-2 border-indigo-500' : ''
                    } pb-2`}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="px-4 mt-4 text-gray-700">
          <p style={{ whiteSpace: 'pre-line' }}>{activeTabContent()}</p>
        </div>
      </div>
    </div>
  );
}
