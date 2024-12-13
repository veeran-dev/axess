import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from './footer'
import Link from 'next/link'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
}
interface navigation {
  name: string;
  href: string;
  current: boolean;
}

let publicNavigation = [
  { name: 'Explore', href: '/explore', current: true },
  { name: 'Create Event', href: '/signup/organizer', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Tickets', href: '/profile' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PublicLayout({children}:{children:React.ReactNode}) {
  const router = useRouter()
  const [navigation, setNavigation] = useState<navigation[]>([])
  const isLoggedIn = true;
  const isEventPage = router.pathname === '/event/[id]' || router.asPath.startsWith('/event/');
  useEffect(()=>{
    const currentUrl = router.pathname;
    console.log("currentUrl...",currentUrl)
    // Update the navigation array based on the current URL
    publicNavigation = publicNavigation.map((item) => ({
      ...item,
      current: currentUrl === item.href,
    }));
    setNavigation(publicNavigation)
    console.log('navigation...',navigation)
  },[router])


  return (
    <>
      <div className="min-h-full bg-[#000]">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-12">
                <div className="flex shrink-0 items-center">
                  <Link href={'/'}>
                  <Image
                    alt="Axess"
                    src={'/axess_logo.webp'}
                    className="block h-8 w-auto lg:hidden"
                    height={80}
                    width={120}
                  />
                  <Image
                    height={80}
                    width={120}
                    alt="Axess"
                    src={'/axess_logo.webp'}
                    className="hidden h-8 w-auto lg:block"
                  />
                  </Link>
                </div>
              <div className=" hidden sm:-my-px sm:ml-auto sm:flex items-center sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'font-semibold text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                  {!isLoggedIn &&
                  <a
                    key={'login'}
                    href={'/auth/login'}
                    className={classNames(`text-sm px-6 py-1 text-white bg-gray-800 hover:bg-gray-600 rounded-full`
                    )}
                  >
                    {'Login'}
                  </a>
                  }
              </div>
              {isLoggedIn &&
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image height={48} width={48} alt="" src={'/avatar.png'} className="size-8 rounded-full" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none z-100"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
              }
              <div className="ml-auto -mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'border-gray-500 bg-gray-50 text-gray-700'
                      : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              {!isLoggedIn &&
              <a
                key={'login'}
                href={'/auth/login'}
                className={classNames(`'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium`
                )}
              >
                {'Login'}
              </a>
              }
            </div>
            {isLoggedIn &&
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="shrink-0">
                    <Image height={48} width={48} alt="Avatar" src={`/avatar.png`} className="size-10 rounded-full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            }
          </DisclosurePanel>
        </Disclosure>

        <div className=" bg-[#000] m-2 mx-auto rounded-lg">
          <main>
            <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 relative">
              {isEventPage &&
                <div
                  className="capitalize my-2 rounded-lg flex items-center justify-center px-4 py-[9px] bg-gradient-to-r from-[#C446FF] via-[#7801FB] to-[#3E0082] leading-[133%] font-medium text-[#E7E8EA] text-left relative z-[119] text-[16px] border-b-2 border-[#0C172F] h-[48px]"
                >
                  Use code #WELCOME500 to get ₹500/- Off on your first ticket
                </div>
              }
              {children}
              <div className='mt-8'>
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
