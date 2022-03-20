import React, { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebaseAuthentication from '../firebase/firebase.init';


firebaseAuthentication()
const useFirebase = () => {
    const [user, setUser]= useState([])
    const [error, setError] = useState([])
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
          .then((result) => {
            setUser(result.user); 
          })
          .catch((error) => {  
            setError(error.message);
          });
    }

    // manual register
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            })
    }
    const manualSignin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setUser(userCredential.user);
          })
          .catch((error) => {
            setError(error.message);
          });
    }
    const logout = () => {
        signOut(auth)
          .then(() => {
            setUser({})
          })
          .catch((error) => {
          
          });
    }
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user)
          } else {
           setUser({})
          }
        });
    },[])


    return {
        logout,
      manualSignin,
      registerUser,
      googleLogin,
      error,
      user,
    };
};

export default useFirebase;