import React from 'react';
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    // sign in with react hooks 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home')
    }
    const handleRegisterSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className="register-form">
            <h3 className='text-center text-success mt-5'>Please Register!!</h3>
            <form onSubmit={handleRegisterSubmit}>
                <input type="text" name='name' placeholder='your name' required />
                <input type="email" name='email' placeholder='your email' required />
                <input type="password" name='password' placeholder='your password' required />
                <div className='p-3 text-primary'>
                    <input type="checkbox" name="checkbox" id="" />
                    <label>Accept, Terms and Condition?</label>
                </div>
                <input className='btn btn-info w-50 d-block mx-auto my-3' type="submit" value='Register' />
            </form>
            <p> Allready Registerd?<Link className='text-primary text-decoration-none' to='/login' onClick={handleLogin}> Please Login Here</Link> </p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;