import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDX43EUGfa0PSfXURRmppmSclT6_AcVDF4",
  authDomain: "fir-course-eb64e.firebaseapp.com",
  projectId: "fir-course-eb64e",
  storageBucket: "fir-course-eb64e.appspot.com",
  messagingSenderId: "1063812117833",
  appId: "1:1063812117833:web:af4dc6996ffcaf15011698",
  measurementId: "G-C4QJNPRNS3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
