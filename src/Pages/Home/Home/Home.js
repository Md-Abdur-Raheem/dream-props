import React from 'react';
import Advertise from '../Advertise/Advertise';
import HeroSection from '../HeroSection/HeroSection';
import PopularProperties from '../PopularProperties/PopularProperties';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <PopularProperties></PopularProperties>
            <Testimonials></Testimonials>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;