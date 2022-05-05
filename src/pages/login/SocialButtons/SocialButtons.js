import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import './SocialButtons.css';
import googleLogo from '../../../images/icon/google-logo.png';
import facebookLogo from '../../../images/icon/facebook-logo.png';
import githubLogo from '../../../images/icon/github-logo.png';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

const SocialButtons = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    // use custom hooks
    const token = useToken(user || user2);

    let errorElement;
    if (error || error2) {
        console.log('error');
        errorElement = <div>
            <p className='text-danger'>{error?.message || error2?.message}</p>
        </div>
    }

    return (
        <div>
            {errorElement}
            <div className='d-flex align-items-center px-3 mt-4'>
                <div className='line border'></div>
                <span className='mx-3'>Or</span>
                <div className='line border'></div>
            </div>
            <div className="social-buttons">
                <button onClick={ () => signInWithGoogle()} className='social-btn google mt-4 w-100 py-2'>
                    <img className='me-2' src={googleLogo} alt="Google-logo" />
                    <span>Continue With Google</span>
                </button>
                <button className='social-btn facebook mt-3 w-100 py-2'>
                    <img className='me-2' width={32} src={facebookLogo} alt="Facebook-logo" />
                    <span>Continue With Facebook</span>
                </button>
                <button onClick={ () => signInWithGithub()} className='social-btn github mt-3 w-100 py-2'>
                    <svg className='me-2 octicon octicon-mark-github v-align-middle' height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" fill='white'>
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <span>Continue With Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialButtons;