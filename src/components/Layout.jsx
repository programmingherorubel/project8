import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </div>
  )
}

export default Layout