import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6Pu-Hoz1HW2caq3BVgqmdKDYj1URnHY0",
  authDomain: "fakemarket-cf1f9.firebaseapp.com",
  projectId: "fakemarket-cf1f9",
  storageBucket: "fakemarket-cf1f9.appspot.com",
  messagingSenderId: "311225912602",
  appId: "1:311225912602:web:970390449d6856744c30a3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
