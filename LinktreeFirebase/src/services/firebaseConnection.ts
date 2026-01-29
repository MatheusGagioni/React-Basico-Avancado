import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDe5Y_9LexlYJ0W_hOabUUlHi0sAGlPexI",
  authDomain: "reactlinksteste.firebaseapp.com",
  projectId: "reactlinksteste",
  storageBucket: "reactlinksteste.firebasestorage.app",
  messagingSenderId: "650116201461",
  appId: "1:650116201461:web:3cb991fca20650ec11bebc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };