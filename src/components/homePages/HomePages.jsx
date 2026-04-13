import React, { Suspense } from 'react';
import Banner from '../banner/Banner';
import State from '../stateSection/State';
import Friends from '../all friends/friends/Friends';
const friendsDataFetch = async()=>{
  const friendsRes = await fetch('/friends.json')
  return friendsRes.json()
}
const HomePages = () => {
  const friendsDataPromise = friendsDataFetch()
  return (
    <div>
      <Banner></Banner>
      <State></State>
      <Suspense>
        <Friends 
        friendsDataPromise={friendsDataPromise}>
        </Friends>
      </Suspense>
    </div>
  );
};

export default HomePages;