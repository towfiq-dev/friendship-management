import React, { useContext, useState } from 'react';
import { MainContext } from '../../contexts/MainContext';
import Call from '../../tablist/Call/Call';
import Text from '../../tablist/text/Text';
import Video from '../../tablist/video/Video';
import EmptyState from './empty state/EmptyState';
const Timeline = () => {
  const { calls, texts, videos } = useContext(MainContext)
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  if (calls.length === 0 && texts.length === 0 && videos.length === 0) {
    return <EmptyState />
  }

  const combinedData = [
    ...calls.map(item => ({ ...item, type: 'Call' })),
    ...texts.map(item => ({ ...item, type: 'Text' })),
    ...videos.map(item => ({ ...item, type: 'Video' }))
  ];

  const processedData = combinedData
    .filter(item => filter === 'All' ? true : item.type === filter)
    .sort((a, b) => {
      if (sortBy === 'Newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'Oldest') return new Date(a.date) - new Date(b.date);
      if (sortBy === 'NameA-Z') return a.name.localeCompare(b.name);
      if (sortBy === 'NameZ-A') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className='max-w-300 mx-auto mt-15 mb-8 space-y-5'>
      <h2 className='text-3xl font-semibold'>Timeline</h2>

      <div className='flex justify-between items-center'>
        {/* Filtering */}
        <div className='flex flex-col gap-1'>
          <label className='text-xs font-bold text-gray-500 uppercase ml-1'>
            Filtered By
          </label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            className='select border w-50 border-black shadow-md py-2 px-4 rounded'
            name="" id="">
            <option className='font-semibold' selected value="All">Show All</option>
            <option className='font-semibold' value="Call">Call</option>
            <option className='font-semibold' value="Text">Text</option>
            <option className='font-semibold' value="Video">Video</option>
          </select>
        </div>
        {/* Sorting */}
        <div className='flex flex-col gap-1'>
          <label className='text-xs font-bold text-gray-500 uppercase ml-1'>
            Sort By
          </label>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className='select w-50 select-bordered shadow-sm'
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
            <option value="NameA-Z">Name (A - Z)</option>
            <option value="NameZ-A">Name (Z - A)</option>
          </select>
        </div>
      </div>

      <div className='space-y-4 pt-4'>
        {processedData.map((item, index) => {
          if (item.type === 'Call') return <Call key={index} call={item} />;
          if (item.type === 'Text') return <Text key={index} text={item} />;
          if (item.type === 'Video') return <Video key={index} video={item} />;
          return null;
        })}
      </div>

      <div className='space-y-5'>
        {
          (filter === 'All' || filter === 'Call') &&
          calls.map((call, index) => <Call call={call} key={index}></Call>)
        }
      </div>

      <div className='space-y-5'>
        {
          (filter === 'All' || filter === 'Text') &&
          texts.map((text, index) => <Text text={text} key={index}></Text>)
        }
      </div>

      <div className='space-y-5'>
        {
          (filter === 'All' || filter === 'Video') &&
          videos.map((video, index) => <Video video={video} key={index}></Video>)
        }
      </div>
    </div>
  );
};

export default Timeline;