import React, { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';

const Timeline = () => {
    const {calls} = useContext(MainContext)
    
  return (
    <div>
      {
        calls.map((call, index)=>{return(
          <div key={index}>
          <h1>{call.name}</h1>
          </div>
        )})
      }
    </div>
  );
};

export default Timeline;