import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
    const authInfo = {
        user,
        loading,
        userWithGoogle
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