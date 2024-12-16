import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, usContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";

export const Authcontext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loding, setloding] = useState(true);

  const gogleProvider = new GoogleAuthProvider();

  const userRegister = (email, password) => {
    setloding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)

  }

  const userGoogleLogin = () => {
    return signInWithPopup(auth, gogleProvider);
  };

  const userLogOut = () =>{
    return signOut(auth)
    
  }
  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloding(false);
    });
  }, []);

  const authInfo = {
    user,
    userRegister,
    loding,
    userGoogleLogin,
    userLogIn,
    userLogOut
  };

  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
