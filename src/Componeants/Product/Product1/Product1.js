import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css';

const Product1 = ({ product }) => {
    const { name, price, description, img, id } = product;
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
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Product1;