import React from 'react';
import Image from 'next/image';
import { applyify, applyifyLight } from '../assets';

const Footer = () => {
  return (
    <footer className='container mx-auto flex justify-evenly items-center select-none'>
      <div className='items-center w-[32rem]'>
        <div className='pointer-events-none'>
        <span className='font-poppins text-[16px] sm:text-[20px] md:text-[24px]'>Beta Club</span>
          {/* <Image
            src={applyify}
            alt='logo'
            className='dark:hidden'
          />
          <Image
            src={applyifyLight}
            alt='logo'
            className='hidden dark:inline'
          /> */}
          <p className='py-2 text-[#3b307d] dark:text-[#6459af] text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum magna vel odio interdum ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum magna vel odio interdum ultrices.</p>
        </div>
      </div>
      <div className='items-center w-36'>
        <p className='text-[#6459af] dark:text-[#483a9e] text-left sm:text-[1.5rem] text-[13px]'>learn more...</p>
        <ul>
          <li>
            <a
              href='#placeholder'
              className='text-[#483a9e] dark:text-[#6459af] underline underline-offset-2 sm:text-[1.2rem] text-[12px]'
            >
              placeholder
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='text-[#483a9e] dark:text-[#6459af] underline underline-offset-2 sm:text-[1.2rem] text-[12px]'
            >
              about
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
