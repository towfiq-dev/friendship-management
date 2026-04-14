import React, { Suspense } from 'react';
import Banner from '../banner/Banner';
import State from '../stateSection/State';
import Friends from '../all friends/friends/Friends';
import { HashRouter } from 'react-router-dom';
const friendsDataFetch = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const friendsRes = await fetch('/friends.json')
  return friendsRes.json()
}
const HomePages = () => {
  const friendsDataPromise = friendsDataFetch()
  return (
    <div>
      <Banner></Banner>
      <State></State>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[400px] -mt-50">
          <span className="loading loading-bars w-24 h-24 text-primary"></span>
        </div>
      }>
        <Friends
          friendsDataPromise={friendsDataPromise}>
        </Friends>
      </Suspense>
    </div>
  );
};

export default HomePages;