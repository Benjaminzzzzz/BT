// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getDatabase} from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import 'firebase/storage'; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK-OSuEVCJfjLN3nfkmDwc7CnPPb6fsvY",
  authDomain: "sut-upcycle.firebaseapp.com",
  projectId: "sut-upcycle",
  storageBucket: "sut-upcycle.appspot.com",
  messagingSenderId: "376639665551",
  appId: "1:376639665551:web:61443762349fa187c047fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db1 = getDatabase(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

