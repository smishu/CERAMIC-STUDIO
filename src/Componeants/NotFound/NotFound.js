import React from 'react';
import './NotFound.css';
import imgs from '../../Images/404-error-page-not-found.jpg';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <img src={imgs} alt="" />

        </div>
    );
};

export default NotFound;