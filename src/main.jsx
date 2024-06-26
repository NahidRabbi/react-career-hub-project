import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import JobInDetails from './components/JobInDetails/JobInDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch('/jobs.json') //Warning: only load the data you need. do not load all the data
      },
      {
        path: '/job/:id',
        element: <JobInDetails></JobInDetails>,
        loader: () => fetch('/jobs.json')
      }

    ] 
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
