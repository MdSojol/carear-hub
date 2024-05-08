import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Statistics from './Body/Statistics';
import JobDeatles from './Statistics/JobDeatles';
import Applied from './Body/Applied';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Statistics></Statistics>
      },
      {
        path:"/job/:id",
        element: <JobDeatles></JobDeatles>,
        loader: () => fetch("../public/JobsData.json")
      },
      {
        path:"/applied",
        element: <Applied></Applied>,
        loader: () => fetch("../public/JobsData.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
