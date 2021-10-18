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
  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(() => {
        window.location.reload()
      })
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(() => {
        window.location.reload()
      })
  };
  return {
    handleGoogleSignIn,
    handleUserRegister,
    handleUserLogin,
    SignOut,
    user,
    error
  }
};

export default useFirebase;