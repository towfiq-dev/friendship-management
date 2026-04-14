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

  const [texts, setTexts] = useState([])
  const handleText=(currentTexts)=>{
  const isExistTexts = texts.find((text)=> text.id === currentTexts.id)
  if (isExistTexts) {
    toast.error(`${currentTexts.name} is all ready exist`)
  }
  else{
    setTexts([...texts, currentTexts])
    toast.success(`${currentTexts.name} is successfully added`)
  }
  }

  const [videos, setVideos] = useState([])
  const handleVideos=(currentVideos)=>{
  const isExistVideos = videos.find((video)=> video.id === currentVideos.id)
  if (isExistVideos) {
    toast.error(`${currentVideos.name} is all ready exist`)
  }
  else{
    setVideos([...videos, currentVideos])
    toast.success(`${currentVideos.name} is successfully added`)
  }
  }

  const data ={
    handleCall,
    calls, 
    setCalls,
    handleText,
    texts, 
    setTexts,
    videos, 
    setVideos,
    handleVideos

  }
  return (
    <MainContext.Provider value={data}>
    {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;