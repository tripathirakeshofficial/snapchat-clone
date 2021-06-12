import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1BjuKtURv51tWyW51ye4RAZW5Pkfac8w",
  authDomain: "snapchat-clone-2c0f4.firebaseapp.com",
  projectId: "snapchat-clone-2c0f4",
  storageBucket: "snapchat-clone-2c0f4.appspot.com",
  messagingSenderId: "862754548974",
  appId: "1:862754548974:web:9f838ffec0dcf087cbd7ff",
  measurementId: "G-C1KMDD2S47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
