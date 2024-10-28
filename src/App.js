import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/Login/login';
import Layout from './components/Login/Layout/layout';
import ForgetPassword from './components/Login/forgetpass';
import HomePage from './components/Login/Home/homepage';
import DateCalendarFormProps from './components/Login/Home/calender';
import UserProfile from './components/Login/Home/profile';
import Problemstatement from './components/Login/Home/problemstatement';

const route = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/forget-password",
    element: <ForgetPassword/>
  },
  {
    path: "/dashboard",
    element: <Layout/>,
    children: [
      {
        path: "/dashboard",
        element: <HomePage/>
      },
      {
        path: "/dashboard/calender",
        element: <DateCalendarFormProps/>
      },
      {
        path: "/dashboard/profile",
        element: <UserProfile/>
      },
      {
        path: "/dashboard/problem-statement",
        element: <Problemstatement/>
      },
    ]
  }
]);

function App() {
  return (
    <div>
        <RouterProvider router={route} />
    </div>
  );
}

export default App; 