import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { toast } from 'react-toastify';
const Checkout = () => {

    const [user] = useAuthState(auth)
    const { serviceId } = useParams()
    const [service, setService] = useServiceDetails(serviceId)

    // const [user, setUser] = useState({
    //     name: "Md. Sabbir Khan",
    //     email: "mdsabbirkhan@gmail.com",
    //     phone: "015895222223",
    //     address: "dhaka-kallanpur"
    // })
    // const handleAddress = event => {
    //     const newAddress = event.target.value;
    //     const { address, ...rest } = user;
    //     const newUser = { address: newAddress, ...rest }
    //     setUser(newUser)
    //     console.log(newUser)
    // }
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        // data load by axios 
        axios.post('http://localhost:5000/order', order)
            .then(respose => {
                console.log(respose)
                const { data } = respose
                if (data.insertedId) {
                    toast("order booked")
                }
            })

    }

    return (
        <div className='w-50 mx-auto my-4'>
            <h2>Please order: {service.name}</h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>

        </div>
    );
};

export default Checkout;