import React, { useContext } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Product = ({data}) => {
    const {dark} = useContext(AuthContext)
    const {_id,image,name,brandName,type,price,rating,ExtraratingviewId} = data;
    return (
        <Card className={`mx-auto  bg-white shadow-2xl m-5`}>
        <CardHeader floated={false} className="max-h-80">
          <img src={image} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {type}
          </Typography>

          <div className='flex mt-3 justify-center'>
             <h2> <span className='font-semibold'>Price</span> : ${price}</h2>
          </div>

        </CardBody>
        <CardFooter className="flex justify-center gap-7 flex-col items-center mx-auto pt-2">
          <div>
          <Tooltip content="Rating Point">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="yellow"
              textGradient
            >
              {
                rating
              }
            </Typography>
          </Tooltip>
          </div>
          <div className='flex gap-4'>
            <Link to={`/update/${_id}`}>
            <button className="button2">
             Update
                </button>
            </Link>
               <Link to={`/Details/${_id}`}>
               <button className="button2">
             See Details
                </button>
               </Link>

          </div>
          
   
        </CardFooter>
       
      </Card>
    );
};

export default Product;