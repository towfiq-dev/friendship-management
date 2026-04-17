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
    toast.error(`You have already called ${currentCalls.name}!`);
  }
  else{
    const newCallEntry = { ...currentCalls, date: getCurrentDateTime() };
    setCalls([...calls, newCallEntry])
    toast.success(`Call started with ${currentCalls.name}.`)
  }
  }

  const [texts, setTexts] = useState([])
  const handleText=(currentTexts)=>{
  const isExistTexts = texts.find((text)=> text.id === currentTexts.id)
  if (isExistTexts) {
    toast.error(`You already have an active chat with ${currentTexts.name}.`);
  }
  else{
    const newTextEntry = { ...currentTexts, date: getCurrentDateTime() };
    setTexts([...texts, newTextEntry])
    toast.success(`Message sent to ${currentTexts.name} successfully!`);
  }
  }

  const [videos, setVideos] = useState([])
  const handleVideos=(currentVideos)=>{
  const isExistVideos = videos.find((video)=> video.id === currentVideos.id)
  if (isExistVideos) {
  toast.error(`A video call session with ${currentVideos.name} already exists.`);
  }
  else{
    const newVideoEntry = { ...currentVideos, date: getCurrentDateTime() };
    setVideos([...videos, newVideoEntry])
    toast.success(`Connecting video call with ${currentVideos.name}...`);
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