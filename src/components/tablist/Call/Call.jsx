import React, { useContext } from 'react';
import { MdCall, MdDelete } from 'react-icons/md';
import { MainContext } from '../../contexts/MainContext';

const Call = ({ call }) => {
  const { handleDeleteCall } = useContext(MainContext)
  return (
    <div className='flex gap-5 bg-base-300 p-3 shadow-md rounded-xl items-center'>
      <MdCall className='w-8 h-10' />
      <div className='flex-1'>
        <p className='mb-1'>
          <small className='font-bold text-[17px]'>Call with </small>
          <small className='text-[15px] text-gray-600'>{call.name}</small>
        </p>
        <p className='text-gray-500'>{call.date}</p>
      </div>
      <button className='btn btn-ghost text-error' onClick={() => handleDeleteCall(call.id)}>
        <MdDelete className='text-xl' />
      </button>
    </div>
  );
};

export default Call;