import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signup = () => {
    const navigate = useNavigate();

    // create a new user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }


    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='container col-12 col-sm-12 col-md-6'>
            <h2 style={{ color: '#FF6666' }} className='text-center mt-2'>Please Sign Up</h2>
            <Form className='mt-5' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button style={{ color: 'white', backgroundColor: '#FF6666' }} className='border-0' type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-2'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Signup;