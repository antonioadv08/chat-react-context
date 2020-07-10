import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBUOMC2cHbmZKmThDYf-2qP6qP7ZIEpT6E",
    authDomain: "chat-3-97d1e.firebaseapp.com",
    databaseURL: "https://chat-3-97d1e.firebaseio.com",
    projectId: "chat-3-97d1e",
    storageBucket: "chat-3-97d1e.appspot.com",
    messagingSenderId: "258399923914",
    appId: "1:258399923914:web:992583ef9953a6f9114e33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider}