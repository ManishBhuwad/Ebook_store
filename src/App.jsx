import React from 'react'

import './App.css'
import Hero from './components/Hero'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/sub-component/Home'
import AllProducts from './components/sub-component/AllProducts'
import SinglePage from './components/sub-component/SinglePage'
import Cart from './components/sub-component/Cart'
import Chekout from './components/sub-component/Chekout'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Hero/>,
    children:[
      {path:"/home",
      element:<Home/>
      },
      {path:"/all-products",
      element:<AllProducts/>
      },
      {path:"/cart",
      element:<Cart/>,
      },
      {
        path:"/single-page/:id",
        element:<SinglePage/>
      },
      {
        path:"/cart/checkout/:id",
        element:<Chekout/>
      }
      

    ]
  }
])

function App() {
  return (
     <RouterProvider router={router}>
        
     </RouterProvider>
  )
}

export default App
