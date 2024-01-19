
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator, 
  onAuthStateChanged

} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, addDoc,collection} from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
};
//export const auth = getAuth(firebaseConfig); 

//const analytics = getAnalytics(app);

export const app = !getApps().length  ? initializeApp(firebaseConfig) : getApp()
export const db = getFirestore(app)


export const auth = getAuth(app);
//connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true }); 
//connectFirestoreEmulator(db, '127.0.0.1', 8080), { disableWarnings: true };



