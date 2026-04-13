import React from 'react';
import { MainContext } from './MainContext';

const MainContextProvider = ({children}) => {

  const data ={
    name: 'towfiq',
    age: '22'
  }
  return (
    <MainContext.Provider value={data}>
    {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;