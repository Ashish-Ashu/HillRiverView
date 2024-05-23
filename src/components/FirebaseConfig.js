// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
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
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };