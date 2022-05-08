import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AddToCard = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);
    return (
        <div className='d-flex'>

            <div>
                <img src="" alt="" />
            </div>
            <div>
                product info
            </div>

        </div>
    );
};

export default AddToCard;