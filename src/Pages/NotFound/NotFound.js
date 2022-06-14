import React from 'react';
import sleepy from '../../images/sleepy/sleepy.jpg'
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='notFound'>
            <h2>Mechanic Is Not Available...</h2>
            <p>He is Sleeping Now</p>
            <img src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;