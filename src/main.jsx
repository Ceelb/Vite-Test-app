import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NoPage from './pages/NoPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AProfile from './pages/aProfile.jsx'
import Profiless from './pages/Profiless.jsx'

import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUpp.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NoPage />,
  },
  {
    path: '/profiles',
    element: <Profiless />,
    children: [
      {
        path: ':profileId',
        element: <AProfile />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
