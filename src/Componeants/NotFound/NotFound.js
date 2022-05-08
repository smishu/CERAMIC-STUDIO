import React from 'react';
import './NotFound.css';
import imgs from '../../Images/404-error-dribbble-800x600.gif';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <img src={imgs} alt="" />

        </div>
    );
};

export default NotFound;