import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetails(serviceId);


    // const { serviceId } = useParams()
    // const [service, setService] = useState({})

    // useEffect(() => {
    //     const url = `https://blooming-beyond-27329.herokuapp.com/service/${serviceId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setService(data))

    // }, [])

    return (
        <div>
            <h2>You are about To book : {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Chekout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;