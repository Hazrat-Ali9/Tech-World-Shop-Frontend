import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Brand from './Brand';

const Brands = () => {
    const { dark } = useContext(AuthContext)
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://tech-world-shop.vercel.app/Brand')
        .then(res => res.json())
        .then(value => setdata(value))
    },[])

    return (
        <div className={` w-full min-h-screen pb-20 ${dark ? "bg-[url('/brandBackground.jpg')] bg-cover bg-center " : " bg-gray-200"}`}>
            <h1 className={`text-4xl font-bold ${dark? 'text-white':'text-black'} text-center py-10`}>Our <span className='text-orange-500'>TOP</span> Brands</h1>

            <div className='grid container mx-auto gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3'>
                {
                    data.map(value => <Brand key={value.id} data={value}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;