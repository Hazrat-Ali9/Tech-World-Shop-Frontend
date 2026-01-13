import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Banner = () => {
    const { dark} = useContext(AuthContext)
    return (
        <div className={`${dark ? "bg-[url('/keyboard.jpg')]" : "bg-[url('/sony.jpg')]" }   bg-cover w-full min-h-[90vh] bg-center `}>
            <div className='w-full h-full min-h-[90vh]  backdrop-brightness-[0.4] flex flex-col pt-28 items-center'>
                   <h1 className={`lg:text-5xl  text-4xl text-white  text-center font-bold`}>Unleash <span className='text-orange-500'>Your</span> Digital Dreams</h1>
                   <p className=' text-gray-300 text-center lg:max-w-2xl md:max-w-xl max-w-lg p-3 pt-6'>Dive into the world of tech excellence with the finest products from Apple, Samsung, Sony, Google, and Intel. Elevate your digital lifestyle with our curated selection of innovation. Your future begins here.</p>
                   {/* <button className='bg-orange-600 btn text-white mt-3 hover:text-orange-600 hover:border hover:border-orange-600'>Explore </button> */}
                   <button className='styleButton'>Explore</button>
            </div>
           
        </div>
    );
};

export default Banner;