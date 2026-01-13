import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ShowroomItem from './ShowroomItem';
import { FaHandHoldingHand } from "react-icons/fa6";
import { FaBuromobelexperte , FaListCheck , FaSellsy } from "react-icons/fa6";


const Showroom = ({data}) => {
    const { dark } = useContext(AuthContext)
    return (
        <div className={` ${dark ? "bg-cover bg-center  bg-[url('/showroom.jpg')] w-full min-h-[60vh]" : ""} `}>
            <div className={`${dark? 'w-full h-full min-h-[60vh] backdrop-brightness-[0.3]' : ""}`}>
            <h2 className={` ${dark? 'text-white':'text-black '} text-3xl text-center pt-20 font-bold`}>Visit <span className='text-orange-500'>OUR</span> New Showroom</h2>
            <p className={` ${dark? 'text-gray-400':'text-gray-800 '} max-w-2xl py-4 mx-auto text-center`}>Discover a world of technology at our exclusive showroom. Here, you can experience firsthand the latest gadgets and innovations from the top tech companies like Apple, Samsung, Sony, Google, and Intel.</p>
               <div className='py-10 gap-4 container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
               <div className={` pl-[10%] p-4 mx-auto ${dark ? 'bg-[#192655] text-white shadow-xl' :'bg-white  text-black rounded-lg bg-gradient-to-br from-gray-300 to-white shadow-2xl'} min-w-[300px] max-w-sm `}>
           
           <FaHandHoldingHand className={`text-3xl  ${dark ? 'text-white' : 'text-black'} `}></FaHandHoldingHand>
         
           <h3 className='pt-3 text-bold'>{data[0].title}</h3>
           <p className='text-[13px] pt-3'>{data[0].description}</p>
       </div>
       <div className={` pl-[10%] p-4 mx-auto ${dark ? 'bg-[#192655] text-white shadow-xl' :'bg-white  text-black rounded-lg bg-gradient-to-br from-gray-300 to-white shadow-2xl'} min-w-[300px] max-w-sm `}>
           
            <FaBuromobelexperte className={`text-3xl  ${dark ? 'text-white' : 'text-black'} `}></FaBuromobelexperte>
            
            <h3 className='pt-3 text-bold'>{data[1].title}</h3>
            <p className='text-[13px] pt-3'>{data[1].description}</p>
        </div>
        <div className={` pl-[10%] p-4 mx-auto ${dark ? 'bg-[#192655] text-white shadow-xl' :'bg-white  text-black rounded-lg bg-gradient-to-br from-gray-300 to-white shadow-2xl'} min-w-[300px] max-w-sm `}>
           
            <FaListCheck className={`text-3xl  ${dark ? 'text-white' : 'text-black'} `}></FaListCheck>
            
            <h3 className='pt-3 text-bold'>{data[2].title}</h3>
            <p className='text-[13px] pt-3'>{data[2].description}</p>
        </div>
        <div className={` pl-[10%] p-4 mx-auto ${dark ? 'bg-[#192655] text-white shadow-xl' :'bg-white  text-black rounded-lg bg-gradient-to-br from-gray-300 to-white shadow-2xl'} min-w-[300px] max-w-sm `}>
           
            <FaSellsy className={`text-3xl  ${dark ? 'text-white' : 'text-black'} `}></FaSellsy>
           
            <h3 className='pt-3 text-bold'>{data[3].title}</h3>
            <p className='text-[13px] pt-3'>{data[3].description}</p>
        </div>
               </div>
            </div>
        </div>
    );
};

export default Showroom;