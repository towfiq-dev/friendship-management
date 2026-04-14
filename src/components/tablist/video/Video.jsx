import React, { useContext } from 'react';
import { MdDelete, MdOutlineVideocam } from 'react-icons/md';
import { MainContext } from '../../contexts/MainContext';

const Video = ({ video }) => {
  const { handleVideoDelete } = useContext(MainContext)
  return (
    <div className='flex gap-5 bg-base-300 p-3 shadow-md rounded-xl items-center'>
      <MdOutlineVideocam className='w-8 h-10' />
      <div className='flex-1'>
        <p className='mb-1'>
          <small className='font-bold text-[17px]'>Video with </small>
          <small className='text-[15px] text-gray-600'>{video.name}</small>
        </p>
        <p className='text-gray-500'>{video.date}</p>
      </div>
      <button className='btn btn-ghost text-error' onClick={() => handleVideoDelete(video.id)}>
        <MdDelete className='text-xl' />
      </button>
    </div>
  );
};

export default Video;