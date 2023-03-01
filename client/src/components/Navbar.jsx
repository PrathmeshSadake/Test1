import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-gray-50'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center sm:items-stretch sm:justify-start'>
                <Link to='/' className='flex flex-shrink-0 items-center'>
                  <img
                    className='block h-8 w-auto lg:hidden'
                    src={logo}
                    alt='Your Company'
                  />
                  <img
                    className='hidden h-8 w-auto lg:block'
                    src={logo}
                    alt='Your Company'
                  />
                </Link>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <Link
                  to='/create-post'
                  className={
                    "bg-indigo-600 text-white rounded-md px-3 py-2 text-xs font-medium tracking-wider"
                  }
                >
                  CREATE POST
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
