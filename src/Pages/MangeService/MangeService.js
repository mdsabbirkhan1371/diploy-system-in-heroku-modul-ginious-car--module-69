import React from 'react';
import useServices from '../../hooks/UseServices';

const MangeService = () => {

    const [services, setServices] = useServices();
    const deleteItem = id => {
        const procced = window.confirm('Are You Sure want to Removed this Item?');
        if (procced) {
            const url = `https://blooming-beyond-27329.herokuapp.com/service/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    const remainig = services.filter(service => service._id !== id)
                    setServices(remainig)
                })
        }
    }
    return (
        <div className='w-50 mx-auto my-3 border border-success p-4'>
            <h3>Manage Your Service !!!</h3>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name} <button onClick={() => deleteItem(service._id)}>Delete</button></h3>
                </div>)
            }
        </div>
    );
};

export default MangeService;