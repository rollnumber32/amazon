import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC29i8pioB_K7g2WZc9O6-YBPO5iFIKzf0",
    authDomain: "rn32-ac.firebaseapp.com",
    projectId: "rn32-ac",
    storageBucket: "rn32-ac.appspot.com",
    messagingSenderId: "691319441814",
    appId: "1:691319441814:web:e439fde76f65ede9bdb5b7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
