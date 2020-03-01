import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB37NI745I2r5zR6UCWz0uf9eQif5c8gJE",
    authDomain: "crwn-db-f5d1c.firebaseapp.com",
    databaseURL: "https://crwn-db-f5d1c.firebaseio.com",
    projectId: "crwn-db-f5d1c",
    storageBucket: "crwn-db-f5d1c.appspot.com",
    messagingSenderId: "1083796820810",
    appId: "1:1083796820810:web:e0ca5a744fd4160993a7b3",
    measurementId: "G-2XF8JKT14D"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;  