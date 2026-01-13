import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { dark , setDark , In, update , Google , OUT ,  creatUser} = useContext(AuthContext)
    const location = useLocation()
  const navigate = useNavigate()
    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        In(email,password)
        .then(res => {
            console.log(res.user)
            Swal.fire(
              'Good job!',
              'You are logeed in Successfully',
              'success'
            )
            { location.state ? navigate(location.state) : navigate('/') }
            
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Your password and email doesn't match",
            })
        })

    }
     
    const handleGoogle =()=>{
        Google()
        .then(res => {
            console.log(res.user)
            Swal.fire(
              'Good job!',
              'You are logeed in Successfully',
              'success'
            )
            { location.state ? navigate(location.state) : navigate('/') }
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong! Please try again',
            })
        })
    }



    return (
    <div className="flex flex-col items-center justify-center h-screen dark">
  <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
    <form onSubmit={handleLogin} className="flex flex-col">
      <input name='email' placeholder="Email address" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
      <input name='password' placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
      <div className="flex items-center justify-between flex-wrap">
        {/* <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
          <input className="mr-2" id="remember-me" type="checkbox" />
          Remember me
        </label> */}
        {/* <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a> */}
        <p className="text-white mt-4"> Don't have an account? <Link className="text-sm text-blue-500 -200 hover:underline mt-4" to={'/Register'}>Signup</Link></p>
      </div>
      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Login</button>
     
    </form>
    <button onClick={handleGoogle} className=" bg-white w-full text-black font-bold py-2 flex items-center justify-center gap-3 px-4 rounded-md mt-4"> <img className='w-[40px]' src="/continureGoogle.png" alt="" />Continue With Google</button>
  </div>
</div>

    );
};

export default Login;Login