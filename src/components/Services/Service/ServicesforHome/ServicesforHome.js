import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const ServicesforHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://scary-castle-42994.herokuapp.com/servicesforhome')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <div className="services-div">
                <div className="container">
                    <h2 className="py-4 text-info">Our Services</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            services.map(service => <SingleService
                                key={service._id}
                                service={service}></SingleService>)
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesforHome;