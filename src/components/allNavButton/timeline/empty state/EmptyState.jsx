import React from 'react';
import { MdCall, MdHistory, MdOutlineTextsms } from 'react-icons/md';
import { FiInbox } from 'react-icons/fi';
const EmptyState = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20'>
      <div className='bg-white border-2 border-dashed border-gray-100 rounded-3xl p-16 text-center shadow-xl hover:shadow-2xl transition-shadow'>

        <div className='flex justify-center mb-8'>
          <div className='p-6 bg-gray-50 rounded-full border border-dashed border-gray-100'>
            <FiInbox className='w-20 h-20 text-blue-500/80 stroke-1' />
          </div>
        </div>

        <h2 className='text-4xl font-extrabold text-gray-800 tracking-tight'>
          Your timeline is <span className='text-blue-600'>empty!</span>
        </h2>

        <p className='mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          You haven't recorded any contact yet. Log your calls, texts, and video meetings to keep track of your relationships and remember your past connections.
        </p>

        <div className='mt-12 flex gap-4 justify-center flex-wrap'>
          <button className='btn btn-md bg-white hover:bg-gray-50 border border-gray-100 shadow-sm text-gray-700 font-semibold gap-3 w-47'>
            <MdCall className='text-2xl text-amber-500' />
            Log a Call
          </button>
          <button className='btn btn-md bg-blue-50 border border-blue-100 hover:bg-blue-100 text-blue-700 font-semibold gap-3 w-47'>
            <MdOutlineTextsms className='text-2xl' />
            Text Record
          </button>
          <button className='btn btn-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-3 w-47'>
            <MdHistory className='text-2xl' />
            View Contact List
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;