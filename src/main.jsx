import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Projects from "./pages/Projects"
import SampleProjects from './pages/SampleProjects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/sample",
        element: <SampleProjects/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='w-[1240px] mx-auto bg-gray-100'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
