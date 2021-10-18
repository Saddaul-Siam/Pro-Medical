import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Sheard/Firebase/Firebase.init';

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState([])
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
      })
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
  return {
    handleGoogleSignIn,
    SignOut,
    user,
    error
  }
};

export default useFirebase;