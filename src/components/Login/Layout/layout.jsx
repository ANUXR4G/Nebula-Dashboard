import React from 'react'
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Dashboard from '../Home/dashboard';

function Layout() {

  return (
    <div>
      <ToastContainer/>
      <Dashboard/>
      <div className='lg:ml-[16%] lg:mt-[4%]  lg:p-6 flex  flex-col justify-center h-full'>
      <Outlet/>
      </div>
      </div>
  )
}

export default Layout;