// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// retirar não vamos utilizar
// import { getAnalytics } from "firebase/analytics";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORARE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } from "@env"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORARE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDgdsUDMR1b5p3xb42ZFEOStfqCgtjIMwA",
  authDomain: "app-mobile-9a8e0.firebaseapp.com",
  projectId: "app-mobile-9a8e0",
  storageBucket: "app-mobile-9a8e0.appspot.com",
  messagingSenderId: "605610550980",
  appId: "1:605610550980:web:45dd6706e84564a74fcb91",
  measurementId: "G-ETKK2W5KY0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// retirn não vamos utilizar
// const analytics = getAnalytics(app);

const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) })

export { auth } ;