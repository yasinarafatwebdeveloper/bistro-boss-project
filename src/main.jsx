import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Home/Home/Home';
import Menu from './Home/Home/Menu/Menu';
// import Menu from './Home/Home/Share/Menu/Menu';
import {  HelmetProvider } from 'react-helmet-async';
import Order from './Home/Order/Order/Order';
import Login from './Components/Login/Login';
import AuthProvider from './Home/Provider/AuthProvider';
import Logout from './Home/Logout/Logout';
import Security from './Home/Home/Security/Security';
import PrivateRoute from './Home/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,



    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/menu",
        element:<Menu></Menu>
      },
      {
        path:"order/:category",
        element:<Order></Order>
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/logout",
        element:<Logout></Logout>
      },
      {
        path:"/security",
        element:<PrivateRoute><Security></Security></PrivateRoute>
      }

    ],
  },



  {
    path:"/dashboard",
    element:<PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children:[
      {
        path:"cart",
        element:<Cart></Cart>
      },
      // {
      //   path:"/addItem",
      //   element:<AddItem></AddItem>
      // },
      {
        path:"users",
        element:<AllUsers></AllUsers>
      },
      {
        path:"manageItems",
        element:<Management></Management>
      },
{
  path:"addItems",
  element:<AddItem></AddItem>
}

    ]

    
  }
]);


import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard';
import Cart from './Components/Dashboard/Cart/Cart';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import AddItem from './Components/Dashboard/AddItem/AddItem';
import Management from './Layout/Maagement/Management';


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>



  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
    <div>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    </QueryClientProvider>

  </AuthProvider>
  

  </StrictMode>,
)
