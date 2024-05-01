import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuHBdsZfj6CJ3S8c55Yl6ApLK-XRCEPKs",
    authDomain: "carrinho-compras-8e1cf.firebaseapp.com",
    projectId: "carrinho-compras-8e1cf",
    storageBucket: "carrinho-compras-8e1cf.appspot.com",
    messagingSenderId: "955222418766",
    appId: "1:955222418766:web:f58bd922e3c8c172f6ea1f"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export { db, auth }