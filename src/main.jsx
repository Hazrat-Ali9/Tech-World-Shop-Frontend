import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyCart from './Components/MyCart/MyCart';
import AuthProvider, { AuthContext } from './Components/Provider/AuthProvider';
import BrandPage from './Components/BrandPage/BrandPage';
import { ThemeProvider } from '@material-tailwind/react';
import UpdateForm from './Components/UpdateForm/UpdateForm';
import DeTailsProduct from './Components/BrandPage/DeTailsProduct';
import PrivateProvider from './Components/Provider/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('https://tech-world-shop.vercel.app/service')
      },
      {
        path:'/AddProduct',
        element:<AddProduct></AddProduct>

      },{
        path:'/cart',
        element:<PrivateProvider><MyCart></MyCart></PrivateProvider>,
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register></Register>
      }
      ,{
        path:'/Brand/:name',
        element:<BrandPage></BrandPage>,
        loader:({params})=> fetch(`https://tech-world-shop.vercel.app/slider/${params.name}`)
      },
      {
        path:'/update/:id',
        element:<PrivateProvider><UpdateForm></UpdateForm></PrivateProvider>,
        loader:({params})=> fetch(`https://tech-world-shop.vercel.app/update/${params.id}`)
      },{
        path:'/Details/:id',
        element:<PrivateProvider><DeTailsProduct></DeTailsProduct></PrivateProvider>,
        loader:({params})=> fetch(`https://tech-world-shop.vercel.app/update/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
