import React, { useContext, useState } from 'react';
import Product from './Product';
import { AuthContext } from '../Provider/AuthProvider';

const BrandProducts = ({data}) => {
    const {dark} = useContext(AuthContext)
    console.log(data)
    return (
        <div className={`grid gap-10 p-4 ${dark ? "bg-[url('/product_bg.jpg')]   bg-cover bg-center" : 'bg-gray-200'}  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 pb-3`}>
            {data.map(value =>  <Product data={value} key={value.viewId}></Product>)}
           
        </div>
    );
};

export default BrandProducts;