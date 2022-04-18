import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // reset password 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigateSignUp = () => {
        navigate('/signup')
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    // email and password login
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className='container col-12 col-sm-12 col-md-6'>
            <h2 style={{ color: '#FF6666' }} className='text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit} className="mb-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button style={{ color: 'white', backgroundColor: '#FF6666' }} className='border-0' type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p className='mt-2'>New service needed? <Link to="/signup" className='text-decoration-none pe-auto' onClick={navigateSignUp}>Create an new account</Link></p>
            <p>Forget Password? <Link to="/login" className='text-decoration-none pe-auto' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;