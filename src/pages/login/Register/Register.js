import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import SocialButtons from '../SocialButtons/SocialButtons';
// import './Register.css';

const Register = () => {
    /* 
    // GETTING INPUT VALUES USING state

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // handlers to set the value on state
    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        setPassword(e.target.value);
    }
    const getConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }
    */

    // useRef to get input values
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const {
        registerWithEmailPassword,
        error
    } = useFirebase();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        /*
        // getting input values with event of handleOnSubmit
        */

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword);
        console.log('error:', error);

        // getting values with nameRef.current.value // useRef hook is declared avobe.
        /* const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value; */

        if (password !== confirmPassword) {
            console.error('Password did not match');
            return;
        }
        registerWithEmailPassword(name, email, password);
    }
    return (
        <div className="form-container border border-2 my-5">
            <h3 className='text-center mb-4'>Please Register!!</h3>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label className='' htmlFor="user-name">Name</label>
                    <input ref={nameRef} className='form-control' type="text" name="name" id="user-name" placeholder='Enter your name' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="register-email">Email</label>
                    <input ref={emailRef} className='form-control' type="email" name="email" id="register-email" placeholder='Enter your email' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="new-password">Set Password</label>
                    <input ref={passwordRef} className='form-control' type="password" name="password" id="new-password" placeholder='Set password' required />
                </div>
                <div className="form-group">
                    <label className='' htmlFor="conf-password">Confirm Password</label>
                    <input ref={confirmPasswordRef} className='form-control' type="password" name="confirmPassword" id="conf-password" placeholder='Confirm password' required />
                </div>
                <div className="error">
                    <p className='text-danger'>{error && error}</p>
                </div>
                <input className='submit-btn text-white mt-4 w-100 border-0 rounded-3 py-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
            <SocialButtons></SocialButtons>
        </div>
    );
};

export default Register;