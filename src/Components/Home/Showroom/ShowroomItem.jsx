import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// import { FaHandHoldingHand } from "react-icons/fa6";
const ShowroomItem = ({data , icon}) => {
    const { dark } = useContext(AuthContext)
    const { title , image , description } = data
    return (
        <div className={` pl-[10%] p-4 mx-auto ${dark ? 'bg-[#192655] text-white shadow-xl' :'bg-white  text-black rounded-lg bg-gradient-to-br from-gray-300 to-white shadow-2xl'} min-w-[300px] max-w-sm `}>
           
            {/* <icon className={`text-3xl  ${dark ? 'text-white' : 'text-black'} `}></icon> */}
            {icon}
            <h3 className='pt-3 text-bold'>{title}</h3>
            <p className='text-[13px] pt-3'>{description}</p>
        </div>
    );
};

export default ShowroomItem;