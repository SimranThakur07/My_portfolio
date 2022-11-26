import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCVAzrXea2-mdU8VQ6f2knqPxSlMM_LWQs",
  authDomain: "simran-portfolio-d076b.firebaseapp.com",
  projectId: "simran-portfolio-d076b",
  storageBucket: "simran-portfolio-d076b.appspot.com",
  messagingSenderId: "434299657347",
  appId: "1:434299657347:web:ff038efe66bf69f80a0fb6",
  measurementId: "G-Y6ZNLGPMSK"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()