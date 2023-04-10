import React from 'react'
import ReactDOM from 'react-dom/client'
import './cssreset.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/error-page'
import Posts from './pages/posts'
import Navbar from './components/Navbar'
import Post from './pages/post'
import Portfolio from './pages/portfolio'
import Technologies from './pages/technologies'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Technology from './pages/technology'
import Project from './pages/project'



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
      element: <Project/>,
    },
    {
      path: 'technologies',
      element: <Technologies/>,
    },
    {
      path: 'technologies/:techID',
      element: <Technology/>
    }
  ]
}
])

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
  <ApolloProvider client={client}>
    
    <RouterProvider router={router}/>
  </ApolloProvider>



  </>
)
