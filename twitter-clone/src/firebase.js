import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA2v7CJN1Oezn0PhMXv1gM3gAp84Ilm2uw",
    authDomain: "twitter-clone-9c475.firebaseapp.com",
    databaseURL: "https://twitter-clone-9c475.firebaseio.com",
    projectId: "twitter-clone-9c475",
    storageBucket: "twitter-clone-9c475.appspot.com",
    messagingSenderId: "479697577452",
    appId: "1:479697577452:web:e4d0c7ab3c492556b04cc9",
    measurementId: "G-CKKS4RS8M1"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;