import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Brand = ({data}) => {
    const {name,img , viewId , bannerImg , } = data
    const {dark} = useContext(AuthContext)
    console.log(name)
    return (
<div className={`p-4 ${dark ? 'bg-[#0c164d]' : 'bg-white  text-black rounded-lg bg-gradient-to-br from-gray-300 to-white shadow-2xl'}  max-w-[450px] w-full mx-auto overflow-hidden duration-300 ease-in text-white hover:scale-105 min-h-[350px] relative`}>
    
 <div className='w-full h-[250px] relative'>
 <img className='h-full rounded-lg w-full' src={bannerImg} alt="" />
 <div className={`flex items-center absolute bottom-0 right-0   bg-white p-3 rounded-tl-lg`}>
    <img className='w-[50px]' src="/logo.png" alt="" />
    <h2 className='text-black '>Tech<span className='text-orange-500'>World</span></h2>
    </div>
 </div>

 <div className={` ${dark ? 'bg-white':''}   h-[100px] mt-4 w-full p-3 mx-auto`}>
    
    <img className=' w-[200px] h-full mx-auto' src={img} alt="" />
 </div>
 <Link to={`/Brand/${name}`}>
 <div className={`${dark ? 'conto': 'secondCon'} mx-auto my-5`}>
  <div className={`${dark ? 'SuperStyle' : 'secondSuper' } `}><button >Show Products</button></div>
</div>
 </Link>




</div>


    );
};

export default Brand;