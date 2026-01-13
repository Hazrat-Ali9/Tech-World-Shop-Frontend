import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const CartProduct = ({data,handleDelete}) => {
    const {user} = useContext(AuthContext)
    const {
        _id,
        image,
        name,
        brandName,
        type,
        price,
        rating,
        Extrarating,
        viewId
      } = data;

    //  const handleDelete = ()=>{
    //     fetch(`https://tech-world-shop.vercel.app//delete/${data._id}`,{
    //         method:'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(value => {
    //         console.log('sucess')
    //     })
    //  }
       
    return (
        <div className='border-2 my-1 min-h-[150px] border-[#192655]'>
            <div className='flex gap-2' >
                <img className='h-full min-w-[150px] max-w-[250px]' src={data.image} alt="" />
                <div className='flex gap-2 justify-between flex-col'>
                    <div className='space-y-4'>
                    <h2 className='font-semibold'>Product Name : {data.name}</h2>
                    <p>Brand : {data.brandName}</p>
                    <p>Price : {data.price}</p>
                    </div>
            
                    <div>
                    <button onClick={()=>{handleDelete(data._id)}} className='btn bg-red-700 w-[100px] hover:text-red-700 text-white'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;