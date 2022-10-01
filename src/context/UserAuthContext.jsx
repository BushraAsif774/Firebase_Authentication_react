import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut, 
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup, 
        sendPasswordResetEmail,
        updateEmail, 
        updatePassword } from 'firebase/auth'
import { auth } from "../Firebase";

const userAuthContext= createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser]= useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password){
        console.log("email is : " , email)
        console.log("password is : " , password)
        return signInWithEmailAndPassword(auth, email, password);
        
    }
    function logOut(){
        return signOut(auth);
    }

    function googleSignIn(){
        const googleAuthProvider= new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth,email)
    }

    function UpdateEmail(email) {
        // return user.updateEmail(email)
        return updateEmail(user,  email)
      }

      function UpdatePassword(password) {
        return updatePassword(user, password)
      }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }

    },[])
    
    const value={user, signUp, logIn, logOut, googleSignIn, resetPassword, UpdateEmail, UpdatePassword}

    return <userAuthContext.Provider value={value} >{children} </userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}