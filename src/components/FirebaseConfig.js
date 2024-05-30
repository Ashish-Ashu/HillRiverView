// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, FacebookAuthProvider, PhoneAuthProvider, RecaptchaVerifier } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error);
    }
};
const facebookProvider = new FacebookAuthProvider();

export const signInWithFacebook = async () => {
    try {
        await signInWithPopup(auth, facebookProvider);
    } catch (error) {
        console.error(error);
    }
};
const phoneProvider = new PhoneAuthProvider(auth);

export const signInWithPhoneNumber = async (phoneNumber, recaptchaVerifier) => {
    try {
        await signInWithRedirect(auth, phoneProvider, recaptchaVerifier);
    } catch (error) {
        console.error(error);
    }
};

// Create a Recaptcha verifier
export const createRecaptchaVerifier = (elementId) => {
    return new RecaptchaVerifier(elementId, {
        size: 'invisible',
        callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
        },
    });
};


const analytics = getAnalytics(app);

export { auth };