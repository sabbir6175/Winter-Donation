import React, { createContext, useEffect, useRef, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext= createContext()
    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading]= useState(true)

    console.log(user)
    // create a user with Google 
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    // create a new user email and password
    const createNewUser= (email, password)=>{
        setLoading(true)
       return  createUserWithEmailAndPassword (auth, email, password)
    }
    // login user
    const UserLogin = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    //update user profile
    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    //forgot password
    const ForgotPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }
    // logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)

    }
    const authInfo={
        loading,
        user,
        setUser,
        signInWithGoogle,
        createNewUser,
        logOut,
        UserLogin,
        ForgotPassword,
        updateUserProfile
    }

    useEffect(()=>{
       const UnSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            UnSubscribe()
        }
    },[])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;