import React from 'react';
import { useParams } from 'react-router-dom';

const AddToCard = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>Product add: {productId} </h2>

        </div>
    );
};

export default AddToCard;