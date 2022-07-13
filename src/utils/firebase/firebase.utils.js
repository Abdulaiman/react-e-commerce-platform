import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import { getRedirectResult } from "firebase/auth";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getFID } from "web-vitals";
const firebaseConfig = {
  apiKey: "AIzaSyBDqeGrmgMfmAPEEw_HQEZxO907yt27pPI",
  authDomain: "crown-clothing-aiman.firebaseapp.com",
  projectId: "crown-clothing-aiman",
  storageBucket: "crown-clothing-aiman.appspot.com",
  messagingSenderId: "449476261350",
  appId: "1:449476261350:web:74750c766a7a115b45d227",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => {
//   signInWithRedirect(auth, provider);
// };

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userAuth);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
