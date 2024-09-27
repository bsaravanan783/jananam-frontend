// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF__JHZE8nroVLUTDPy1wNGiAtwooLDZk",
  authDomain: "auth-14d68.firebaseapp.com",
  projectId: "auth-14d68",
  storageBucket: "auth-14d68.appspot.com",
  messagingSenderId: "456569357769",
  appId: "1:456569357769:web:34ae5ff5ebf36653509418"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
