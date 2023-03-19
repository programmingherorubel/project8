import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/404'
import EditBook from './pages/EditBook'
import Home from './pages/Home'
import NewBook from './pages/NewBook'


// routes 

const routes = createBrowserRouter([
  { path: "/*", element: <NotFound />, },
  {
    path: "/", element: < Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/new-book", element: <NewBook /> },
      { path: "/edit-book/:bookId", element: <EditBook /> },

    ]
  },
])

const App = () => {
  return <RouterProvider router={routes} />
}

export default App