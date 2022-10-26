import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ displayName: 'Mitul' });

  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, providerGoogle);
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, providerGithub);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user: user,
    createUser,
    signInUser,
    handleGoogleSignIn,
    handleGithubSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
