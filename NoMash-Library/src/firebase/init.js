import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCk0RfcpAUf9yZ7Qb3fRgLgeimIPOgVdI",
    authDomain: "fit5032-work-efile.firebaseapp.com",
    projectId: "fit5032-work-efile",
    storageBucket: "fit5032-work-efile.firebasestorage.app",
    messagingSenderId: "488242800265",
    appId: "1:488242800265:web:4e7845a9790742934e0858"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db