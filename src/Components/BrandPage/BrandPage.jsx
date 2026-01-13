import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BrandSlider from './BrandSlider';
import BrandProducts from './BrandProducts';
import Nodata from './Nodata';

const BrandPage = () => {
   const { name } = useParams()
   const LoadedData = useLoaderData()

    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://tech-world-shop.vercel.app/BrandProduct/${name}`)
        .then(res => res.json())
        .then(value  => setData(value))
    },[])

    return (
        <div>
       {
        LoadedData?.brandSliders?.length ? 
        <BrandSlider data={LoadedData}></BrandSlider>
        :
        <Nodata></Nodata>
       }
            <BrandProducts data={data}></BrandProducts>
        </div>
 
    );
};

export default BrandPage;