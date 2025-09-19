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

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
