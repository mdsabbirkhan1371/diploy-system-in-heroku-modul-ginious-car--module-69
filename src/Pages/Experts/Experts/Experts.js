import React from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    const experts = [
        { name: 'William Shekh', id: 1, img: 'https://i.ibb.co/pQ1Cpk3/picture.webp', about: 'Football players are athletes who play football professionally. It should be noted that while some parts of the world use the word “football” to describe soccer, actual football refers to the American version of the sport' },
        { name: 'Will Amin', id: 2, img: 'https://i.ibb.co/jGkmTCL/picture1.jpg', about: 'Football players are athletes who play football professionally. It should be noted that while some parts of the world use the word “football” to describe soccer, actual football refers to the American version of the sport' },
        { name: 'Ben Stocks', id: 3, img: 'https://i.ibb.co/w7mwpMh/picture2.jpg', about: 'Football players are athletes who play football professionally. It should be noted that while some parts of the world use the word “football” to describe soccer, actual football refers to the American version of the sport' },
        { name: 'Will Jack', id: 4, img: 'https://i.ibb.co/1s72BMT/picturet.jpg', about: 'Football players are athletes who play football professionally. It should be noted that while some parts of the world use the word “football” to describe soccer, actual football refers to the American version of the sport' },
        { name: 'Hailes Joe', id: 5, img: 'https://i.ibb.co/17x3Yqt/6-The-Ruffled-Wavy-look-1.jpg', about: 'Football players are athletes who play football professionally. It should be noted that while some parts of the world use the word “football” to describe soccer, actual football refers to the American version of the sport' },
        { name: 'Donnly Bark', id: 6, img: 'https://i.ibb.co/f4kvhm5/pic.jpg', about: 'Football players are athletes who play football professionally. It should be noted that while some parts of the world use the word “football” to describe soccer, actual football refers to the American version of the sport' }
    ]
    return (
        <div id='experts' className='mt-5'>
            <h3 className='text-info text-center'>Our Experts Enginner</h3>
            <div className='container'>
                <div className='row text-center'>
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;