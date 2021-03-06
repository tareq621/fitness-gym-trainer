import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }

    return (
        <div className='col-12 col-sm-12 col-md-6 mx-auto mb-2'>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-secondary'></div>
            </div>
            <div>
                <button className='btn btn-dark w-100 d-block mx-auto rounded-pill' onClick={() => signInWithGoogle()}>
                    <img width={35} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;