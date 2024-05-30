// AuthContext.js

import { createContext, useContext, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider, FacebookAuthProvider, PhoneAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDwtfGkFoniVAmMuWDNmbPOQahJ8qRyIqE",
    authDomain: "hillriverview-c7fb1.firebaseapp.com",
    projectId: "hillriverview-c7fb1",
    storageBucket: "hillriverview-c7fb1.appspot.com",
    messagingSenderId: "407462636815",
    appId: "1:407462636815:web:be412ae6346f93bca5a27a",
    measurementId: "G-QQG01576TS"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const phoneProvider = new PhoneAuthProvider(auth);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setCurrentUser(result.user);
        } catch (error) {
            console.error(error);
        }
    };

    const signInWithFacebook = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            setCurrentUser(result.user);
        } catch (error) {
            console.error(error);
        }
    };

    const signInWithPhoneNumber = async () => {
        // Your logic to initiate phone authentication
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setCurrentUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    const value = {
        currentUser,
        signInWithGoogle,
        signInWithFacebook,
        signInWithPhoneNumber,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
