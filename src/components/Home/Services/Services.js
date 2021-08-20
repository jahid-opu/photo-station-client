import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(response =>response.json())
        .then(data =>setServices(data))
    },[])
    return (
        <section className="py-5">
            <h2 className="text-center">Services</h2>
            <div className="row">
                {
                    services.map((service) => <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;