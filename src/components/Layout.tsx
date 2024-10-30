'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  TransitionChild,
} from '@headlessui/react';
import {
  IconLayoutDashboard,
  IconUsers,
  IconFolder,
  IconCalendar,
  IconFiles,
  IconChartPie,
  IconSettings,
  IconBell,
  IconMenu3,
  IconX,
  IconChevronDown,
} from '@tabler/icons-react';
import RequestAdvanceButton from './RequestAdvanceButton';
import BalanceDisplay from './BalanceDisplay';
import TransactionsList from './TransactionsList';

const navigation = [
  { name: 'Dashboard', href: '#', icon: IconLayoutDashboard, current: true },
  { name: 'Team', href: '#', icon: IconUsers, current: false },
  { name: 'Projects', href: '#', icon: IconFolder, current: false },
  { name: 'Calendar', href: '#', icon: IconCalendar, current: false },
  { name: 'Documents', href: '#', icon: IconFiles, current: false },
  { name: 'Reports', href: '#', icon: IconChartPie, current: false },
];
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-slate-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <IconX aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-700 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Bree Logo"
                    src="/assets/images/bree-logo.png"
                    className="h-8 w-auto"
                  />
                  <img
                    alt="Bree Text"
                    src="/assets/images/bree-text.png"
                    className="h-8 w-auto invert"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul className="flex flex-1 flex-col gap-y-7 ml-[0.85rem]">
                    <li>
                      <ul className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'text-blue-600'
                                  : 'text-slate-100',
                                'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold text-[1.1rem]',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current
                                    ? 'text-blue-600'
                                    : 'text-slate-400',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              <span className="transform transition-transform duration-200 group-hover:translate-x-1 font-afacadFlux text-[1.1rem]">
                                {item.name}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="/"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-slate-100 font-afacadFlux"
                      >
                        <IconSettings
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-slate-400"
                        />
                        <span className="transform transition-transform duration-200 group-hover:translate-x-1 font-afacadFlux text-[1.1rem]">
                          Settings
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-slate-600 bg-slate-800 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Bree Logo"
                src="/assets/images/bree-logo.png"
                className="h-8 w-auto"
              />
              <img
                alt="Bree Text"
                src="/assets/images/bree-text.png"
                className="h-8 w-auto invert"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7 ml-[0.9rem]">
                <li>
                  <ul className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-blue-600' : 'text-slate-100',
                            'group flex items-center gap-x-3 rounded-md p-2 text-[1.1rem] font-medium font-afacadFlux',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-blue-600' : 'text-slate-400',
                              'h-6 w-6 shrink-0',
                            )}
                          />
                          <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                            {item.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="/"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-slate-700"
                  >
                    <IconSettings
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-slate-400"
                    />
                    <span className="transform transition-transform duration-200 group-hover:translate-x-1 text-[1.1rem] font-afacadFlux text-slate-100">
                      Settings
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 justify-between items-center gap-x-4 border-b border-slate-600 bg-slate-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <div>
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="-m-2.5 p-2.5 text-slate-700 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <IconMenu3 aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-slate-400 hover:text-slate-500"
              >
                <span className="sr-only">View notifications</span>
                <IconBell aria-hidden="true" className="h-6 w-6" />
              </button>
              {/* Separator */}
              <div
                aria-hidden="true"
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-200"
              />
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="Xavier Portrait"
                    src="/assets/images/xavier-picture.jpg"
                    className="h-8 w-8 rounded-full bg-slate-50"
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span
                      aria-hidden="true"
                      className="ml-4 text-[1rem] font-semibold text-slate-100 font-afacadFlux"
                    >
                      Xavier Martin Demers
                    </span>
                    <IconChevronDown
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 text-slate-400"
                    />
                  </span>
                </MenuButton>
              </Menu>
            </div>
          </div>
          <main className="min-h-screen bg-slate-700">
            <div className="p-4 flex flex-col bg-slate-700">
              <div className="mb-4 grid grid-cols-2 grid-rows-1 gap-4">
                <div className="flex justify-center items-center col-span-1 bg-slate-800 rounded-md text-center">
                  <BalanceDisplay />
                </div>
                <div className="flex justify-center col-span-1 items-center bg-slate-800 rounded-md text-center">
                  <RequestAdvanceButton />
                </div>
              </div>
              <TransactionsList />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
