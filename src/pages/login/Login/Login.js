import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useFirebase from '../../../hooks/useFirebase';
import { useTitle } from '../../shared/TitleProvider/TitleProvider';
import SocialButtons from '../SocialButtons/SocialButtons';
import './Login.css';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loginWithEmailPassword, error} = useFirebase();

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [user, loading] = useAuthState(auth);
    
    /* const {setTitle} = useTitle();
    useEffect(() => {
        setTitle('Login')
      }, []) */

    useEffect( () => {
        if (user) {
            navigate(from, '/home');
        }
    }, [user])

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error}</p>
        </div>
    }

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        alert('Reset password mail sent. Please check your inbox');
    }

    const handleLoginOnSubmit = e => {
        e.preventDefault();
        loginWithEmailPassword(email, password);
    }
    return (
        <div className="form-container border border-2 my-5">
            <h3 className='text-center mb-4'>Please Login!!</h3>
            <form onSubmit={handleLoginOnSubmit}>
                <div className="form-group">
                    <label className='' htmlFor="email">Email</label>
                    <input onBlur={ e => setEmail(e.target.value)} className='form-control' type="email" name="email" id="email" placeholder='Enter your email' />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="password">Password</label>
                    <input onBlur={ e => setPassword(e.target.value)} className='form-control' type="password" name="password" id="password" placeholder='Enter your password' />
                </div>
                <input className='submit-btn text-white mt-4 w-100 border-0 rounded-3 py-2' type="submit" value="Login" />
            </form>
            <p>Don't have an account? <Link to='/register' className='text-decoration-none'>Please Register</Link></p>
            <p>Forgot password? <span onClick={resetPassword} className='text-decoration-none text-primary' style={{cursor: 'pointer'}}>Reset Password</span></p>
            {errorElement}
            <SocialButtons></SocialButtons>
        </div>
    );
};

export default Login;