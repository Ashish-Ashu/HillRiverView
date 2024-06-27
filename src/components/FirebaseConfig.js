// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, PhoneAuthProvider, RecaptchaVerifier } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwtfGkFoniVAmMuWDNmbPOQahJ8qRyIqE",
    authDomain: "hillriverview-c7fb1.firebaseapp.com",
    projectId: "hillriverview-c7fb1",
    storageBucket: "hillriverview-c7fb1.appspot.com",
    messagingSenderId: "407462636815",
    appId: "1:407462636815:web:be412ae6346f93bca5a27a",
    measurementId: "G-QQG01576TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const phoneProvider = new PhoneAuthProvider(auth);

const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error);
    }
};

const signInWithFacebook = async () => {
    try {
        await signInWithPopup(auth, facebookProvider);
    } catch (error) {
        console.error(error);
    }
};

const signInWithPhoneNumber = async (phoneNumber, recaptchaVerifier) => {
    try {
        await signInWithPopup(auth, phoneProvider, recaptchaVerifier);
    } catch (error) {
        console.error(error);
    }
};

// Create a Recaptcha verifier
const createRecaptchaVerifier = (elementId) => {
    return new RecaptchaVerifier(elementId, {
        size: 'invisible',
        callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
    });
};

export { auth, db, signInWithGoogle, signInWithFacebook, signInWithPhoneNumber, createRecaptchaVerifier };
