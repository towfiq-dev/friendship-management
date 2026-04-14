import React, { use, useContext } from 'react';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { MdDelete, MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { MainContext } from '../contexts/MainContext';

const friendsDetailsFetch = fetch('/friends.json').then(res => res.json())

const FriendsDetails = () => {
  const friendsDetailsData = use(friendsDetailsFetch)
  const { friendsDetailsId } = useParams()

  const expectedFriends = friendsDetailsData.find((friends) => friends.id == friendsDetailsId)
  const { name, picture, tag, status, bio, goal, next_due_date, days_since_contact, email } = expectedFriends
  const { handleCall, handleText, handleVideos } = useContext(MainContext)

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-12 pb-10'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10'>

        {/* first-column (Profile & Actions) */}
        <div className='lg:col-span-5 xl:col-span-4'>
          <div className='bg-white border border-gray-100 shadow-xl rounded-3xl p-8 text-center mb-6 transition-all hover:shadow-2xl'>
            <div className='flex justify-center mb-4'>
              <div className='p-1 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full'>
                <img className='rounded-full w-32 h-32 object-cover border-4 border-white' src={picture} alt={name} />
              </div>
            </div>

            <h2 className='text-3xl font-extrabold text-gray-800 tracking-tight'>{name}</h2>

            <div className='flex flex-wrap justify-center items-center gap-3 mt-4'>
              <p className={`px-4 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-sm 
                ${status === 'overdue' ? 'bg-rose-500'
                  : status === 'on track' ? 'bg-emerald-600'
                    : 'bg-amber-500'}`}>
                {status}
              </p>

              <div className='flex gap-2'>
                {tag.map((singleTag, index) => (
                  <span key={index} className={`px-3 py-1 text-xs font-semibold rounded-full border
                    ${singleTag === 'WORK' ? 'bg-green-50 border-green-200 text-green-700'
                      : singleTag === 'FAMILY' ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-orange-50 border-orange-200 text-orange-700'}`}>
                    {singleTag}
                  </span>
                ))}
              </div>
            </div>

            <p className='text-gray-600 mt-5 leading-relaxed italic'>"{bio}"</p>
            <p className='text-blue-500 font-medium mt-3 hover:underline cursor-pointer'>{email}</p>
          </div>

          <div className='grid grid-cols-1 gap-3'>
            <button className='flex gap-3 cursor-pointer items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 border border-gray-200 rounded-2xl shadow-sm transition-all active:scale-95'>
              <HiOutlineBellAlert className='text-xl text-amber-500' />
              Snooze 2 weeks
            </button>
            <button className='flex gap-3 cursor-pointer items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 border border-gray-200 rounded-2xl shadow-sm transition-all active:scale-95'>
              <FiArchive className='text-xl text-blue-500' />
              Archive
            </button>
            <button
            
              className='flex gap-3 cursor-pointer items-center justify-center bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold py-3.5 px-6 border border-rose-100 rounded-2xl shadow-sm transition-all active:scale-95'>
              <MdDelete className='text-xl' />
              Delete Profile
            </button>
          </div>
        </div>

        {/* second-column (Stats & Goals) */}
        <div className='lg:col-span-7 xl:col-span-8 space-y-6'>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg rounded-2xl p-6 text-center transform transition hover:-translate-y-1'>
              <h3 className='text-4xl font-black text-gray-800 mb-1'>{days_since_contact}</h3>
              <h3 className='text-sm uppercase tracking-widest text-gray-500 font-bold'>Days Since Contact</h3>
            </div>
            <div className='bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg rounded-2xl p-6 text-center transform transition hover:-translate-y-1'>
              <h3 className='text-4xl font-black text-teal-600 mb-1'>{goal}</h3>
              <h3 className='text-sm uppercase tracking-widest text-gray-500 font-bold'>Goal Days</h3>
            </div>
            <div className='bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg rounded-2xl p-6 text-center transform transition hover:-translate-y-1'>
              <h3 className='text-2xl font-black text-gray-800 mb-1 pt-2'>{next_due_date}</h3>
              <h3 className='text-sm uppercase tracking-widest text-gray-500 font-bold'>Next Due</h3>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className='bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden'>
            <div className='flex items-center justify-between p-5 border-b border-gray-50 bg-gray-50/50'>
              <p className='text-lg font-bold text-gray-800'>Relationship Goal</p>
              <button className='px-4 py-1.5 text-sm font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer'>Edit</button>
            </div>
            <div className='p-6'>
              <div className='flex items-center gap-3 bg-blue-50/30 p-4 rounded-xl border border-dashed border-blue-200'>
                <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                <p className='text-gray-700 font-medium'>
                  Connect every <span className='text-blue-700 font-extrabold text-lg'>{days_since_contact} days</span> to maintain this bond.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Check-in Card */}
          <div className='bg-white border border-gray-100 shadow-xl rounded-2xl p-6'>
            <h2 className='text-lg font-bold text-gray-800 mb-5 flex items-center gap-2'>
              <span className='w-1.5 h-6 bg-indigo-500 rounded-full'></span>
              Quick Check-in
            </h2>
            <div className='grid grid-cols-3 gap-4'>
              <button onClick={() => handleCall(expectedFriends)}
                className='group cursor-pointer flex flex-col items-center gap-2 py-6 rounded-2xl bg-gray-50 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm'>
                <FiPhoneCall className='w-6 h-6 text-indigo-500 group-hover:text-white transition-colors' />
                <p className='font-bold text-sm'>Call</p>
              </button>
              <button onClick={() => handleText(expectedFriends)}
                className='group cursor-pointer flex flex-col items-center gap-2 py-6 rounded-2xl bg-gray-50 hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-sm'>
                <MdOutlineTextsms className='w-7 h-7 text-sky-500 group-hover:text-white transition-colors' />
                <p className='font-bold text-sm'>Text</p>
              </button>
              <button onClick={() => handleVideos(expectedFriends)}
                className='group flex cursor-pointer flex-col items-center gap-2 py-6 rounded-2xl bg-gray-50 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-sm'>
                <MdOutlineVideocam className='w-8 h-8 text-rose-500 group-hover:text-white transition-colors' />
                <p className='font-bold text-sm'>Video</p>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;