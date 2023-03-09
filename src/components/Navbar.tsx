import { useState } from 'react';
import Image from 'next/image';

import { close, applyify, applyifyLight, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  // mobile navbar toggle
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex justify-between items-center navbar select-none'>
      <div className='select-none pointer-events-none'>
        <span className='font-poppins text-[16px] sm:text-[20px] md:text-[24px]'>Beta Club</span>
        {/* <Image
          src={applyify}
          alt='logo'
          className='dark:hidden md:w-[400px] md:h-[70px] sm:w-[250px] sm:h-[60px] w-[200px] h-[52px] px-5'
        />
        <Image
          src={applyifyLight}
          alt='logo'
          className='hidden dark:inline md:w-[400px] md:h-[70px] sm:w-[250px] sm:h-[60px] w-[200px] h-[52px] px-5'
        /> */}
      </div>

      {/* desktop navbar */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={'font-poppins font-normal cursor-pointer text-[16px] sm:text-[20px] md:text-[24px] text-black px-5'}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* mobile navbar */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          alt='menu button'
          src={toggle ? close : menu}
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prevState) => !prevState)}
        />
      </div>
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={'font-poppins font-normal cursor-pointer text-[16px]  text-white my-2'}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
