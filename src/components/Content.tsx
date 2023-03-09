import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <div className='flex justify-start select-none pointer-events-none'>
      <div>
        <div className='text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold text-purple-400 '>
          <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text'>Gen Z VCs first ever Beta club</span>
        </div>
        <div className='text-[3rem] sm:text-[4rem] md:text-[5rem] font-bold text-purple-400 '>
          <span className='wave '>Join </span> <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text '>now.</span>
        </div>

        <div>Get started button</div>

        <div>Content</div>
      </div>
    </div>
  );
};

export default Content;
