import React from 'react';
import Banner from '../../Homepages/Banner/Banner';
import BestProduct from '../../Homepages/BestProduct/BestProduct';
import Blog from '../../Homepages/Blog/Blog';
import Discount from '../../Homepages/Discount/Discount';
import Favourite from '../../Homepages/Favourite/Favourite';
import Subscribe from '../../Homepages/Subscribe/Subscribe';
import UpWork from '../../Homepages/UpWork/UpWork';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Discount />
            <BestProduct />
            <UpWork />
            <Favourite />
            <Blog />
            <Subscribe />
            
        </div>
    );
};

export default Home;