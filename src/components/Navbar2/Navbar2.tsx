import Link from 'next/link';
import React from 'react';
import { Transition } from '@headlessui/react';

// For when you want to implement dropdowns with screen clicks to close: https://codesandbox.io/s/w62xl39907?file=/src/Dropdown.js

interface NavbarProps {
  title: string;
  links: [string, string][];
}

export const Navbar2: React.FC<NavbarProps> = ({ title, links }) => {
  // const [isActive, setIsActive] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center max-w-7xl border-b-2 border-gray-100 mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="font-mono ml-1 font-semi-bold tracking-widest text-purple-500">
              <span className="sr-only">{title}</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                alt=""
              />
              HIDDENFOREST
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            {/* <!-- Heroicon name: outline/menu --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-10">
          {links.map(([page, path]) => (
            <Link key={path} href={path}>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">{page}</a>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link href="#">
            <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
          </Link>
          <Link href="#">
            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Sign up
            </a>
          </Link>
        </div>
      </div>

      {/* <!--
            Mobile menu, show/hide based on mobile menu state.
        --> */}
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close menu</span>
                      {/* <!-- Heroicon name: outline/x --> */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {links.map(([page, path]) => (
                    <Link key={path} href={path}>
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {page}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="#">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    >
                      Sign up
                    </a>
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?&nbsp;
                    <Link href="#">
                      <a href="#" className="text-gray-900">
                        Sign in
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};
