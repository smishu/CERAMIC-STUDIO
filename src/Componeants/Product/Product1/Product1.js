import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import './Product.css';

const Product1 = ({ product }) => {
    const { name, price, description, img, _id } = product;
    const Navigate = useNavigate();
    const navigateToProduct = _id => {
        Navigate(`/product/${_id}`);
    }
    return (
        <div>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigateToProduct(_id)} variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Product1;