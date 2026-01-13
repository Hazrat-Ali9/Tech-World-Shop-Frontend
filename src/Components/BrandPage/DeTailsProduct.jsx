import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const DeTailsProduct = () => {
    const { user } = useContext(AuthContext) 
    const data = useLoaderData()
    const {_id,
        image,
        name,
        brandName,
        type,
        price,
        rating,
        Extrarating,
        viewId} = data
        

        const AddCart = ()=>{
          const value = { email:user.email , product:viewId , image, name, price, brandName }
          fetch('https://tech-world-shop.vercel.app/AddtoCart',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(value)
          })
          .then( res => res.json())
          .then( data => {
            console.log('Success')
            Swal.fire(
              'Added!',
              'The selected product have been added!',
              'success'
            )
          })
        }
      
        
    return (
        <div>
  <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{brandName}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center text-yellow-700">
          {rating}
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
        </div>
       
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3 font-medium">Type: {type}</span>

          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
          
          <button onClick={AddCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
          
         
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default DeTailsProduct;