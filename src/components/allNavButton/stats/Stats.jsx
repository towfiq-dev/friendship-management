import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { MainContext } from '../../contexts/MainContext';
import { MdAddCircleOutline } from 'react-icons/md';
import rechart from '../../../assets/asset/recharts.png'
const Stats = () => {
  const { calls, texts, videos } = useContext(MainContext)
  const data = [
    { name: 'Text', value: calls.length, fill: '#7E35E1' },
    { name: 'Call', value: texts.length, fill: '#244D3F' },
    { name: 'Video', value: videos.length, fill: '#37A163' },
  ];

  if (calls.length === 0 && texts.length === 0 && videos.length === 0) {
    return (
      <div className='max-w-280 mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-13 mb-10'>
        <h1 className='text-xl md:text-2xl lg:text-3xl mb-5 font-bold text-gray-800 tracking-tight'>
          Friendship <span className='text-indigo-600'>Analytics</span>
        </h1>

        <div className='bg-base-300 border border-gray-300 rounded-3xl p-16 text-center shadow-2xl shadow-gray-100'>

          <div className='flex justify-center mb-10'>
            <img
              src={rechart}
              alt="Empty Analytics Chart Illustration"
              className="w-full rounded-2xl max-w-100 max-h-80  opacity-90"
            />
          </div>

          <h2 className='text-[20px] md:text-2xl lg:text-3xl font-extrabold text-gray-800 tracking-tight'>
            No Analytics Available
          </h2>

          <p className='mt-6 text-[15px] text-justify md:text-[20px] lg:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed'>
            You haven't recorded any interactions with your friends yet. Start logging calls, texts, or videos on the Timeline page to unlock powerful friendship insights!
          </p>

          <div className='mt-12 flex gap-4 justify-center flex-wrap'>
            <button className='btn btn-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold gap-3'>
              <MdAddCircleOutline className='text-2xl' />
              Start Logging Activity
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='max-w-300 mx-auto mt-20 mb-20 p-3'>
      <h1 className='text-3xl mb-5 font-bold text-gray-800 tracking-tight'>
        Friendship <span className='text-indigo-600'>Analytics</span>
      </h1>
      <div className='shadow rounded-xl bg-base-300 p-4'>
        <h3 className='text-xl font-semibold'>By Interaction Type</h3>
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          //style={{top: '10px'}}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;