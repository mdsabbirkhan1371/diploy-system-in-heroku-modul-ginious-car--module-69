import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../PageTitle/PageTitle';

const Register = () => {

    // sign in with react hooks 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login');
    }


    if (user) {
        // navigate('/home')
        console.log('user', user)
    }
    const [agree, setAgree] = useState(false);
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')


    }

    return (
        <div className="register-form">
            <PageTitle title="Register"></PageTitle>
            <h3 className='text-center text-success mt-5'>Please Register!!</h3>
            <form onSubmit={handleRegisterSubmit}>
                <input type="text" name='name' placeholder='your name' required />
                <input type="email" name='email' placeholder='your email' required />
                <input type="password" name='password' placeholder='your password' required />
                <div className='p-3 text-primary'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'text-primary ps-2' : 'text-danger ps-2'} htmlFor='terms'>Accept, Terms and Condition?</label> */}
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>Accept, Terms and Condition?</label>
                </div>

                <input
                    disabled={!agree}
                    className='btn btn-info w-50 d-block mx-auto my-3' type="submit" value='Register' />

            </form>

            <p> Allready Registerd?<Link className='text-primary text-decoration-none' to='/login' onClick={handleLogin}> Please Login Here</Link> </p>

            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;