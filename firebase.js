import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyApdCPMNzi1CBKurIcvDUaSEFvrIeZYmkg",
  authDomain: "insta-68de9.firebaseapp.com",
  projectId: "insta-68de9",
  storageBucket: "insta-68de9.appspot.com",
  messagingSenderId: "391461090725",
  appId: "1:391461090725:web:4fa0231bb5e5cde3b5a44c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }
