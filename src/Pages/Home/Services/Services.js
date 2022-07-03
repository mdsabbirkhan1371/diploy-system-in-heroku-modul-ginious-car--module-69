import React, { useEffect, useState } from 'react';
import PageTitle from '../../PageTitle/PageTitle';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://blooming-beyond-27329.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='mt-4 mb-3'>
            <PageTitle title="services"></PageTitle>
            {/* <Helmet>
                <title>service-genious Car service</title>
            </Helmet> */}
            <h1 className='services-title'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;