import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../footer/Footer';

const MainLayouts = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar></Navbar>
      {isLoading && (
        <div className="flex justify-center items-center min-h-screen fixed inset-0 bg-white/50 z-50">
           <span className="loading loading-bars w-24 h-24 text-primary"></span>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;