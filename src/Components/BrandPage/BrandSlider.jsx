import React, { useContext, useEffect, useState } from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { AuthContext } from '../Provider/AuthProvider';

const BrandSlider = ({data}) => {
      
      const {brandName , brandSliders} = data
      const { dark } = useContext(AuthContext)
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Carousel className="">
        <div className="relative h-screen w-full">
          <img
            src={brandSliders[0].BrandSliderImg}
            alt="image 1"
            className="h-full w-full object-cover "
          />
          <div className={`absolute inset-0 grid h-full w-full place-items-center ${dark ? 'bg-black/90':'bg-black/70' } `}>
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {
                    brandSliders[0].title
                }
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {brandSliders[0].description}
              </Typography>
              
            </div>
          </div>
        </div>
        <div className="relative  h-screen w-full">
          <img
            src={brandSliders[1].BrandSliderImg}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className={`absolute inset-0 grid h-full w-full items-center ${dark ? 'bg-black/90':'bg-black/70' }`}>
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {
                    brandSliders[1].title
                }
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
               {brandSliders[1].description}
              </Typography>
             
            </div>
          </div>
        </div>
        <div className="relative h-screen  w-full">
          <img
            src={brandSliders[2].BrandSliderImg}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className={`absolute inset-0 grid h-full w-full items-center ${dark ? 'bg-black/90':'bg-black/70' }`}>
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {
                    brandSliders[2].title
                }
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
              {brandSliders[1].description}
              </Typography>
              
            </div>
          </div>
        </div>
      </Carousel>
    );
};

export default BrandSlider;