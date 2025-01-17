import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './components/category.jsx';
import Users from './components/Users.jsx'
import Services from './components/Services.jsx';
import UserDetails from './components/UserDetails.jsx';
import Jobs from './components/Job.jsx';
import JobDetails from './components/JobDetails.jsx';
import AddJob from './components/AddJob.jsx';
import EditJob from './components/EditJob.jsx';

const router = createBrowserRouter([
  {
    path: '/', element:  <App />,
    children: [
      {
        path: '/category/:categoryId',
        element: <Category />,
      }
    ]
  },
  {
    path: '/users', element: <Users/>,
  },
  {
    path: '/users', element:  <Users />,
    children: [
      {
        path: '/users/:user_Id/uname',
        element: <UserDetails />,
      }
    ]
  },
  {
    path: '/services', element: <Services/>,
  },
  {
    path: '/jobs', element: <Jobs />
  },
  {
    path: '/jobs/:job_id', element: <JobDetails />
  },
  {
    path: '/add-job', element: <AddJob />
  },
  {
    path: '/edit-job/:job_id', element: <EditJob />
  },
  {
    path: '*', element: <h1 className='text-[66px] text-coral-red'>Page Not found</h1>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
