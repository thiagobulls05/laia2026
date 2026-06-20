// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuf3WAdhyWU8nMj3RaIznEtXeMD_zaGPo",
  authDomain: "gincanalaia2026.firebaseapp.com",
  projectId: "gincanalaia2026",
  storageBucket: "gincanalaia2026.firebasestorage.app",
  messagingSenderId: "744220809727",
  appId: "1:744220809727:web:e528f72f0602a69a722fca",
  measurementId: "G-R7BHQ3N9QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager() 
  })
});