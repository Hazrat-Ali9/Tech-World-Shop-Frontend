import React, { useContext, useEffect } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateProvider = ({children}) => {

   const { user,loading } = useContext(AuthContext)
   
   console.log(user)
   const location = useLocation()
   console.log(loading)

  if(loading){
   return (<div className='bg-black flex justify-center mx-auto min-h-screen'>
<div className="wrapper ">
  <div className="circle" />
  <div className="circle" />
  <div className="circle" />
  <div className="shadow" />
  <div className="shadow" />
  <div className="shadow" />
</div>
   </div>
   

   )}
  
  if(user){
   return children
  }

  return <Navigate state={location.pathname} to={'/login'}></Navigate>  




   
  
};

export default PrivateProvider;