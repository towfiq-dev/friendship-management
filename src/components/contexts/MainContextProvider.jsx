import React, { useState } from 'react';
import { MainContext } from './MainContext';
import { toast } from 'react-toastify';

const MainContextProvider = ({children}) => {

  const [calls, setCalls] = useState([])
  const handleCall=(currentCalls)=>{
  const isExistCalls = calls.find((call)=> call.id === currentCalls.id)
  if (isExistCalls) {
    toast.error(`${currentCalls.name} is all ready exist`)
  }
  else{
    setCalls([...calls, currentCalls])
    toast.success(`${currentCalls.name} is successfully added`)
  }
  }

  const data ={
    handleCall,
    calls, 
    setCalls,

  }
  return (
    <MainContext.Provider value={data}>
    {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;