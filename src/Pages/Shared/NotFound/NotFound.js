import React from 'react';
import notFound from '../../../images/Notfound/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;