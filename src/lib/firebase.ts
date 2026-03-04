import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDMP_N-LewDn8s2QlGgBWEZcs6wYi8KTOI",
  authDomain: "hajat-delivery.firebaseapp.com",
  projectId: "hajat-delivery",
  storageBucket: "hajat-delivery.firebasestorage.app",
  messagingSenderId: "589304531493",
  appId: "1:589304531493:web:85daaefc1ebe1281cf0dcc",
  measurementId: "G-L22WTC8284"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
