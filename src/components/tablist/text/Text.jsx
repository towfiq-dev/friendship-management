import React, { useContext } from 'react';
import { BsChatText } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { MainContext } from '../../contexts/MainContext';

const Text = ({ text }) => {
  const { handleDeleteText } = useContext(MainContext)
  return (
    <div className='flex gap-5 bg-base-300 p-3 shadow-md rounded-xl items-center'>
      <BsChatText className='w-8 h-10' />
      <div className='flex-1'>
        <p className='mb-1'>
          <small className='font-bold text-[17px]'>Text with </small>
          <small className='text-[15px] text-gray-600'>{text.name}</small>
        </p>
        <p className='text-gray-500'>{text.date}</p>
      </div>
      <button className='btn btn-ghost text-error' onClick={() => handleDeleteText(text.id)}>
        <MdDelete className='text-xl' />
      </button>
    </div>
  );
};

export default Text;