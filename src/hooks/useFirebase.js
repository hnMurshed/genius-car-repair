import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from "../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const useFirebase = () => {

    let [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // const [hookUser, loading, error] = useAuthState(auth);

    // auth providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // createUserWithEmailAndPassword
    const registerWithEmailPassword = (name, email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateDisplayName(name);
                setUser(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })

    }

    // signInWithEmailAndPassword
    const loginWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
            
    }

    // signInWithGoogle with popup
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // signInWithGithub with popup
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
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

    // sighOut
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
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