// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyChgc-KAeF1rAxGjpU_ynEgV9vzXJm2Qq4",
//     authDomain: "fit-5032-efiletask.firebaseapp.com",
//     projectId: "fit-5032-efiletask",
//     storageBucket: "fit-5032-efiletask.firebasestorage.app",
//     messagingSenderId: "664909654081",
//     appId: "1:664909654081:web:72674a8b82b295fec1fec0"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
