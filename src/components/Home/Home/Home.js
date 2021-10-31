import React from 'react';
import Services from '../../Services/Services/Services';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonial2/Testimonials';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Why></Why>
            <Services></Services>
            {/* <Testimonial></Testimonial> */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;