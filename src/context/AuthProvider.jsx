import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase_configuration';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser) {
                setUser(currentUser)
            }
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        loading,
        setLoading
    }
    return (
        <AuthContext value={authData}>
            { children }
        </AuthContext>
    );
};

export default AuthProvider;