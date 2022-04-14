import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from "../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const [hookUser] = useAuthState(auth);

    // auth providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // createUserWithEmailAndPassword
    const registerWithEmailPassword = (name, email, password) => {
        console.log('firevase error: ', error);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateDisplayName(name);
                setUser(result.user);
                setError('')
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
                console.error(typeof error.message);
            })

    }

    // signInWithEmailAndPassword
    const loginWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                // navigate(from, { replace: true })
                setError('')
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })
    }

    // signInWithGoogle with popup
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                // navigate(from, { replace: true })
                setError('')
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
    }
    // signInWithGithub with popup
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                // navigate(from, { replace: true });
                setError('');
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
            })
    }

    const updateDisplayName = name => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                setError('')
            })
            .catch(error => {
                console.error(error)
            });
    }

    // obserbe user
    onAuthStateChanged(auth, (user, error) => {
        if (user) {
            setUser(user);
        }
        if (error) {
            setError(error);
        }
    })

    // sighOut
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log('user signed out')
            });
    }

    return {
        registerWithEmailPassword,
        loginWithEmailPassword,
        signInWithGoogle,
        signInWithGithub,
        signOutUser,
        error,
        user
    };
}

export default useFirebase;