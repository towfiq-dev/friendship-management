import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-semibold'>Friends to keep close in your life</h1>
      <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      
      <button className='btn bg-[#244D3F]'>
        <FaPlus />
        Add a Friend
      </button>
    </div>
  );
};

export default Banner;