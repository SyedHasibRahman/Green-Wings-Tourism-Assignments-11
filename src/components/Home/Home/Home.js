import React from 'react';
import ServicesforHome from '../../Services/Service/ServicesforHome/ServicesforHome';
import Services from '../../Services/Services/Services';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonial2/Testimonials';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Why></Why>
            {/* <Services></Services> */}

            <ServicesforHome></ServicesforHome>
            {/* <Testimonial></Testimonial> */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;