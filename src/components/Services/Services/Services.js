import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="services-div">
            <div className="container">
                <h2 className="py-4 text-info">Our Services</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Services;