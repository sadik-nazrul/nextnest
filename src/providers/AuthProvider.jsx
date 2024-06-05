import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // Google create user
    const googleProvider = new GoogleAuthProvider();
    const userWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Github create user
    const githubProvider = new GithubAuthProvider();
    const userWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // Create user with email and pass
    const createUserEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login user email and pass
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Logout user 
    const logOut = () => {
        return signOut(auth);
    }

    // Observe user state 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[])


    const ap = "'";
    const authInfo = {
        user,
        loading,
        ap,
        userWithGoogle,
        userWithGithub,
        createUserEmailPass,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;