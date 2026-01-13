import React from 'react';
import Banner from './Banner/Banner';
import Showroom from './Showroom/Showroom';
import { useLoaderData } from 'react-router-dom';
import Brands from './Brands/Brands';
import Contact from './Contact/Contact';

const Home = () => {
  const showRoom = useLoaderData()
    return (
        <div>
          <Banner></Banner> 
          <Showroom data={showRoom}></Showroom>
          <Brands></Brands>
          <Contact></Contact>
        </div>
    );
};

export default Home;