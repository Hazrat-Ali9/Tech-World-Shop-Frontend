import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import CartProduct from './CartProduct';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [data, setdata ] = useState([])
    const {user , dark}  = useContext(AuthContext)    
    useEffect(()=>{
        fetch(`https://tech-world-shop.vercel.app/Cart/${user.email}`)
        .then(res => res.json())
        .then(value => setdata(value))
    },[])
    const handleDelete = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tech-world-shop.vercel.app/delete/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(value => {
                    const fil = data.filter(get => get._id != id)
                    setdata(fil)
                })
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
            }
          })
       
     }

    return (
        <div >
            <h2 className={`text-center  font-medium text-5xl my-5`}>My Cart</h2>

            <div className='grid grid-cols-1 lg:w-[60%] w-full mx-auto container'>
                {
                   data.length? 
                    data?.map(value  => <CartProduct handleDelete={handleDelete} key={value._id} data={value}></CartProduct>) 
                    :
                    <div>
                        <img src="/bg-No-data.jpg" alt="" />
                    </div>


                }
                 {
                    
                 }
            </div>
        </div>
    );
};

export default MyCart;