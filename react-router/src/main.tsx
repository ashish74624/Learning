import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Not_found from './pages/Not_found';
import UserProfile from './pages/UserProfile';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement : <Not_found/>
  },
  {
    path:'/profile',
    element: <Profile/>,
    children :[
      {
        path:'/profile/:profileId',
        element: <UserProfile/>
      }
    ]
  },
  
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
