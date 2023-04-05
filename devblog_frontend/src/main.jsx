import React from 'react'
import ReactDOM from 'react-dom/client'
import './cssreset.css'
import {createBrowserRouter, Link, Outlet, RouterProvider} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/error-page'
import Posts from './pages/posts'
import Navbar from './components/Navbar'
import Post from './pages/post'
import Portfolio from './pages/portfolio'
import Technologies from './pages/technologies'



const router = createBrowserRouter([
{
  element: <Navbar/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: 'posts',
      element: <Posts/>,
    },
    {
      path: 'post/:postID',
      element: <Post/>,
    },
    {
      path: 'portfolio',
      element: <Portfolio/>,
    },
    {
      path: 'portfolio/:projectID',
      element: <Portfolio/>,
    },
    {
      path: 'technologies',
      element: <Technologies/>,
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
  <RouterProvider router={router}/>

  </>
)
