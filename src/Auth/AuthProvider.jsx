
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,  password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleLogged = () => {

        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const allLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const myAuth ={
        createUser,
        loginUser,
        user,
        loading,
        googleLogged,
        allLogOut
    }
    return (
        <div>
            <AuthContext.Provider value={myAuth}>
                {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;