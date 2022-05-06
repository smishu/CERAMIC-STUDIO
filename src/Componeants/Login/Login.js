import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocailLogin from '../SocailLogin/SocailLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const naviget = useNavigate('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        naviget(from, { replace: true });
    }

    const handeleSumbit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        navigetToSingin(email, password);
    }
    const navigetToSingin = event => {
        naviget('/singin');

    }
    return (
        <div className='singIn-from'>
            <h1>Login Now</h1>
            <Form onSubmit={handeleSumbit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>Create a new account <Link to='/singin' className='text-danger pe-auto text-decoration-none' onClick={navigetToSingin}>Sing Up Now</Link></p>
            <SocailLogin></SocailLogin>

        </div>
    );
};

export default Login;