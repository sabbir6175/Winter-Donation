import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext= createContext()
    const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)
    // create a new user
    const createNewUser= (email, password)=>{
       return  createUserWithEmailAndPassword (auth, email, password)
    }
    const authInfo={
        user,
        setUser,
        createNewUser
    }

    useEffect(()=>{
       const stateUser =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return()=>{
            stateUser()
        }
    },[])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;