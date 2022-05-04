import React from 'react';
import './Singin.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Singin = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handeleSingin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

    }
    return (
        <div className='singIn-from'>
            <h1>Sing Up Now</h1>
            <Form onClick={handeleSingin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sing Up
                </Button>
            </Form>
            <p>already have a account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login Now</Link> </p>

        </div>
    );
};

export default Singin;