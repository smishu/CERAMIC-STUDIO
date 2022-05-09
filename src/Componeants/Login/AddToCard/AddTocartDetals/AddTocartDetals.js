import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddToCard from '../AddToCard';

const AddTocartDetals = () => {
    const { productId } = useParams()
    console.log(productId);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product?id=${productId}`;


        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);
    return (
        <div>
            {
                product.map(product => <AddToCard
                    key={product._id}
                    product={product}
                ></AddToCard>



                )
            };

        </div>
    );
};

export default AddTocartDetals;