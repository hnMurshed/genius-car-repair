import { sendEmailVerification } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const PrivatePage = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (!user.emailVerified) {
        const verifyYourEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    toast.success('A verification email sent to verify your email address');
                })
                .catch(() => {
                    toast.error("Couldn'n send verification email");
                });
        }

        return (
            <div>
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