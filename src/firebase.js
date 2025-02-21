import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnMq27_SNK3ofnjTq1GHuqHs_wMiG7rEk",
  authDomain: "blog-4b902.firebaseapp.com",
  projectId: "blog-4b902",
  storageBucket: "blog-4b902.firebasestorage.app",
  messagingSenderId: "72567000195",
  appId: "1:72567000195:web:0ced4edbb105e13d4b9fb6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
