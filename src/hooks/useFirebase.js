import { useEffect, useState } from "react";
import initAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

initAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const registerUser = (name, email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    setError(error.message)
                });
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                console.log(user);
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const logInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    const logOutUser = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
          }).catch((error) => {
              setError(error.message);
          })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
       const usnsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
           }
           setLoading(false);
       });
        return () => usnsubscribe;
    },[auth])

    return {
        registerUser,
        logInUser,
        logOutUser,
        user,
        error,
        loading
    }
}
export default useFirebase;