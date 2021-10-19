import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Sheard/Firebase/Firebase.init';

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState([])
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider)
      .catch((error) => {
        setError(error.message)
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setError("")
      }
    });
  }, []);
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      }).catch((error) => {
        setError(error.message)
      });
  };
  const handleUserRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        setError(errorMessage, errorCode)
      })
      // .finally(() => {
      //   window.location.reload()
      // })
  };

  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
  };
  return {
    handleGoogleSignIn,
    handleUserRegister,
    handleUserLogin,
    SignOut,
    user,
    error,
    setUser
  }
};

export default useFirebase;