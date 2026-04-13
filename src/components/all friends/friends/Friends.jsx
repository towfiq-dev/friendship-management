import React, { use } from 'react';
import Friend from './friend/friend';

const Friends = ({friendsDataPromise}) => {
  const friends = use(friendsDataPromise)
  
  return (
    <div className='max-w-295 mx-auto mt-10'>
    <h2 className='text-2xl font-bold mb-4'>Your Friends</h2>

    <div className='grid sm:grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-4 justify-between gap-5'>
      {
        friends.map((friend, index)=> 
        <Friend 
        friend={friend}
        key={index}>
        </Friend>)
      }
    </div>
    </div>
  );
};

export default Friends;