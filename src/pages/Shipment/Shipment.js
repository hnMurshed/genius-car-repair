import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useTitle } from '../shared/TitleProvider/TitleProvider';

const Shipment = () => {
    /* const {setTitle} = useTitle();
    useEffect(() => {
        setTitle('Shipment')
      }, []) */

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [user] = useAuthState(auth);

    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getAddress = e => {
        setAddress(e.target.value);
    }
    const getPhone = e => {
        setPhone(e.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <div className="form-container border border-2 my-5">
            <h3 className='text-center mb-4'>Your Details</h3>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label className='' htmlFor="name">Name</label>
                    <input onBlur={getName} className='form-control' type="text" name="name" id="name" placeholder='Enter your name' required/>
                </div>
                <div className="form-group">
                    <label className='' htmlFor="email">Email</label>
                    <input onBlur={getEmail} className='form-control' type="email" value={user && user.email} name="email" id="email" placeholder='Enter your email' required readOnly/>
                </div>
                <div className="form-group">
                    <label className='' htmlFor="address">Address</label>
                    <input onBlur={getAddress} className='form-control' type="text" name="address" id="address" placeholder='Your address' required/>
                </div>
                <div className="form-group">
                    <label className='' htmlFor="mobile">Mobile</label>
                    <input onBlur={getPhone} className='form-control' type="text" name="mobile" id="mobile" placeholder='Your Phone' required/>
                </div>
                <div className="error">
                    {/* <p className='text-danger'>{error && error}</p> */}
                </div>
                <input className='submit-btn text-white mt-4 w-100 border-0 rounded-3 py-2' type="submit" value="Submit Details" />
            </form>
        </div>
    );
};

export default Shipment;