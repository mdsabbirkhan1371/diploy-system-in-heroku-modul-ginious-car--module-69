import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()

    return (
        <footer className='text-center fs-4 mt-4'>
            <p>
                <small>Copywrite © {year}</small>
            </p>
        </footer>
    );
};

export default Footer;