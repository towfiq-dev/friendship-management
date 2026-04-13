import React from 'react';

const Friend = ({friend}) => {
  const {picture, name, days_since_contact, status, tags} = friend
  return (
    <div className='shadow-md p-5 rounded-xl text-center'>
      <div className='flex justify-center mb-2'>
        <img className='rounded-full' src={picture} alt="" />
      </div>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <p className='text-gray-500'>{days_since_contact}d ago</p>
      <div className='flex justify-between'>
        {
        tags.map((tag, index)=> { 
          return(
          <div tag={tag} key={index} >
          <p className='flex'>{tag}</p>
          </div>
        )})
      }
      </div>
      <p>{status}</p>
    </div>
  );
};

export default Friend;