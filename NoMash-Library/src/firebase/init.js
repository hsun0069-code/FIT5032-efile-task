import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChgc-KAeF1rAxGjpU_ynEgV9vzXJm2Qq4",
    authDomain: "fit-5032-efiletask.firebaseapp.com",
    projectId: "fit-5032-efiletask",
    storageBucket: "fit-5032-efiletask.firebasestorage.app",
    messagingSenderId: "664909654081",
    appId: "1:664909654081:web:72674a8b82b295fec1fec0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db