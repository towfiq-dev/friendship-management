import React, { use } from "react";
const totalFetch = fetch('/friends.json').then(res=> res.json())
const State = () => {
  const result = use(totalFetch)
  const onTrackCount = result.filter(item => item.status === 'on track').length;
  const needAttentionCount = result.filter(item => item.status === 'overdue').length;
  return (
    <div className="grid grid-cols-2 p-4 md:grid-cols-4 gap-5 mt-10 mb-7 max-w-300 mx-auto border-b border-b-gray-500 pb-6">
      <div className="text-center space-y-3 p-5 rounded-xl shadow-md">
        <h1 className="text-2xl md:text-3xl font-semibold">{result.length}</h1>
        <p className="text-gray-500">Total Friends</p>
      </div>
      <div className="text-center space-y-3 p-5 rounded-xl shadow-md">
        <h1 className="text-2xl md:text-3xl font-semibold">{onTrackCount.toString().padStart(2, '0')}</h1>
        <p className="text-gray-500">On Track</p>
      </div>
      <div className="text-center space-y-3 p-5 rounded-xl shadow-md">
        <h1 className="text-2xl md:text-3xl font-semibold">{needAttentionCount.toString().padStart(2, '0')}</h1>
        <p className="text-gray-500">Need Attention</p>
      </div>
      <div className="text-center space-y-3 p-5 rounded-xl shadow-md">
        <h1 className="text-2xl md:text-3xl font-semibold">12</h1>
        <p className="text-gray-500">Interactions This Month</p>
      </div>
    </div>
  );
};

export default State;
