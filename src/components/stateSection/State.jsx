import React from 'react';

const State = () => {
  return (
    <div className='grid grid-cols-2 p-4 md:grid-cols-4 gap-5 mt-10 mb-7 max-w-300 mx-auto border-b border-b-gray-500 pb-6'>
      <div className='text-center space-y-3 p-5 rounded-xl shadow-md'>
        <h1 className='text-2xl md:text-3xl font-semibold'>10</h1>
        <p className='text-gray-500'>Total Friends</p>
      </div>
      <div className='text-center space-y-3 p-5 rounded-xl shadow-md'>
        <h1 className='text-2xl md:text-3xl font-semibold'>03</h1>
        <p className='text-gray-500'>On Track</p>
      </div>
      <div className='text-center space-y-3 p-5 rounded-xl shadow-md'>
        <h1 className='text-2xl md:text-3xl font-semibold'>06</h1>
        <p className='text-gray-500'>Need Attention</p>
      </div>
      <div className='text-center space-y-3 p-5 rounded-xl shadow-md'>
        <h1 className='text-2xl md:text-3xl font-semibold'>12</h1>
        <p className='text-gray-500'>Interactions This Month</p>
      </div>
    </div>
  );
};

export default State;