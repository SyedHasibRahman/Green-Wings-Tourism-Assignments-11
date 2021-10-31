import React from 'react';
import Services from '../../Services/Services/Services';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Why></Why>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;