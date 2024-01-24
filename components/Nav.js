import React, { useState } from 'react';
import { HiHome, HiWindow, HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router';


// icons
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'tugas', path: '/tugas', icon: <HiWindow /> },
  { name: 'report', path: '/tugas-bermasalah', icon: <HiEnvelope /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-20 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'
      style={{ boxShadow: '2px 4px 4px 8px rgba(0.1, 0, 0, 0.5)',
      border: '2px solid white' }}>
        {navData.map((link, index) => (
          <Link className={`${link.path === pathname && 'text-cyan-400'} relative flex items-center group hover:text-cyan-400
            transition-all duration-300`} href={link.path} key={index}>

              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-cyan-400 relative flex text-white items-center p-[6px] rounded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
                {/* triangle */}
                <div className='border-solid border-l-cyan-400 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* icon  */}
            <div>
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};



export default Nav;

