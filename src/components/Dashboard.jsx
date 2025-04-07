import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen  ">
      <Sidebar />
      <div className="flex flex-col flex-grow w-full p-3 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
