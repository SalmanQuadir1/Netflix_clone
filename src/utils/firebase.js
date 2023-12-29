// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIy2N19zxzRArGBRVMeiqw52r_qDGp_JA",
    authDomain: "netflix-f11c9.firebaseapp.com",
    projectId: "netflix-f11c9",
    storageBucket: "netflix-f11c9.appspot.com",
    messagingSenderId: "778215661636",
    appId: "1:778215661636:web:65f3c19237ce42f6dc9c11",
    measurementId: "G-V11T5363ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export getAuth()
export const auth = getAuth();