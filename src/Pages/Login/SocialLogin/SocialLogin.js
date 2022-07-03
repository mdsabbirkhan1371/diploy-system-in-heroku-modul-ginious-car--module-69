import React from 'react';
import google2 from '../../../images/social/google2.png'
import facbook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
            </div>

    }
    if (user || user1) {

        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>
                <p className='mt-2 p-2 fs-3'>or</p>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>

            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '35px' }} src={google2} alt="" />
                    <span className='p-2'>Google Sign In</span>
                </button>

                <button
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img className='rounded' style={{ width: '35px' }} src={facbook} alt="" />
                    <span className='p-2'>Facebook Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img className='rounded' style={{ width: '35px' }} src={github} alt="" />
                    <span className='p-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;