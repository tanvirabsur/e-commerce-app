import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase';


const AuthContext = createContext()
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updateUserInfo) => {
        return updateProfile(auth.currentUser, updateUserInfo)

    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth).then(() => {
            // console.log('logout successfully')
        }).catch((err) => {
            alert(err)
            // console.log('logout failed', err)
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe()
            
        }
    }, [])

    const data = {
        createUserWithGoogle,
        createUser,
        updateUser,
        login,
        logout,
        loading,
        user
    }
    return (
        <AuthContext value={data}>
            {children}
        </AuthContext>
    );
};
export {
    AuthContext

}

export default Authprovider;