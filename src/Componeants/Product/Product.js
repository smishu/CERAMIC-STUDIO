import React, { useState } from 'react';
import Product1 from './Product1/Product1';
import './Product.css';

const Product = () => {
    const [products, setProduct] = useState([]);
    useState(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    return (
        <div>
            <h2 className='text-center mt-5'>OUR COLLECTION</h2>

            <div className="product-contaer">

                {
                    products.map(product => <Product1
                        key={product._id}
                        product={product}>

                    </Product1>
                    )
                };
            </div>

        </div>
    );
};

export default Product;