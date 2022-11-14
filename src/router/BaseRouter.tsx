import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
const BaseRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Login></Login>,
    },
    {
      path: '/home',
      element: <Home></Home>,
    },
    {
      path: '/login',
      element: <Login></Login>,
    },
  ])
  return element
}

export default BaseRouter
