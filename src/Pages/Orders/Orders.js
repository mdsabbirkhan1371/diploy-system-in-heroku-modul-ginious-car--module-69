import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';
const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://blooming-beyond-27329.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data)
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders();


    }, [user])


    return (
        <div className='w-50 mx-auto border border-primary my-5 p-3'>
            <h3>Your Orders:{orders?.length}</h3>

            <ol>
                {
                    orders.map(order => <div>
                        <li key={order._id}>
                            order name: {order.service} : address: {order.address}
                            order email: {order.email}
                        </li>
                    </div>)
                }
            </ol>

        </div>
    );
};

export default Orders;