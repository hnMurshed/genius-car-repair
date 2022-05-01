import { sendEmailVerification } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const PrivatePage = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    /* const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    ); */

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    console.log(user);

    if (!user.emailVerified && user.providerData[0].providerId === 'password') {
        const verifyYourEmail = async () => {

            console.log(auth.currentUser);
            await sendEmailVerification(user)
            .then( () => {
                toast.success('A verification email sent to verify your email address');
            })
            .catch( () => {
                toast.error("Couldn'n send verification email");
            })
        }

        return (
            <div className='text-center my-5'>
                <Toaster
                    position='top-center'
                    reverseOrder={false}
                ></Toaster>
                <h3>Your email is not verified</h3>
                <h5>Verify your email address</h5>
                <button onClick={verifyYourEmail} className="btn btn-primary">
                    Send Verification Email
                </button>
            </div>
        )
    }

    return children;
};

export default PrivatePage;