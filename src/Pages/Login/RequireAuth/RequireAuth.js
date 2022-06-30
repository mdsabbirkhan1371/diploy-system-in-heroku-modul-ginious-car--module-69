import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h2 className='text-danger'>Your Email Is Not  Verified!!!</h2>
            <p className='text-success'>Please Verified your email address!!!</p>
            <button
                className='btn btn-primary text-center mx-4'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                send verification again...
            </button>
            <ToastContainer></ToastContainer>
        </div>

    }
    return children;
}


export default RequireAuth;