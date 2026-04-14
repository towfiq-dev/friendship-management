import React, { useState } from 'react';
import { MainContext } from './MainContext';
import { toast } from 'react-toastify';

const MainContextProvider = ({children}) => {

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleDateString('en-GB') + " | " + 
           now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const [calls, setCalls] = useState([])
  const handleCall=(currentCalls)=>{
  const isExistCalls = calls.find((call)=> call.id === currentCalls.id)
  if (isExistCalls) {
    toast.error(`${currentCalls.name} is all ready exist`)
  }
  else{
    const newCallEntry = { ...currentCalls, date: getCurrentDateTime() };
    setCalls([...calls, newCallEntry])
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
    const newTextEntry = { ...currentTexts, date: getCurrentDateTime() };
    setTexts([...texts, newTextEntry])
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
    const newVideoEntry = { ...currentVideos, date: getCurrentDateTime() };
    setVideos([...videos, newVideoEntry])
    toast.success(`${currentVideos.name} is successfully added`)
  }
  }
  
  const handleDeleteCall=(id)=>{
  const remaining = calls.filter((call)=> call.id !== id)
  setCalls(remaining)
  toast.info("Call record removed");
  }

  const handleDeleteText=(id)=>{
    const remaining = texts.filter((text)=> text.id !== id)
    setTexts(remaining)
    toast.info("Text record removed");
  }
  
  const handleVideoDelete=(id)=>{
    const remaining = videos.filter((video)=> video.id !== id)
    setVideos(remaining)
    toast.info("Videos record removed");
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
    handleVideos,
    handleDeleteCall,
    handleVideoDelete,
    handleDeleteText

  }
  return (
    <MainContext.Provider value={data}>
    {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;