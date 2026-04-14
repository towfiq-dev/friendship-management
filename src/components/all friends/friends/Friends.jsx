import React, { use } from 'react';
import Friend from './friend/friend';

const Friends = ({friendsDataPromise}) => {
  const friends = use(friendsDataPromise)
  
  return (
    <div className='max-w-295 mx-auto mt-10 p-3'>
    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 text-indigo-700 py-3 px-6 rounded-2xl shadow-sm text-center max-w-xs mx-auto tracking-tight mb-8">
  ✨ Your Friends
</h2>

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