import firebase from 'firebase';
import 'firebase/auth'

import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "your key",
    authDomain: "your key",
    projectId: "your key",
    storageBucket: "your key",
    messagingSenderId: "your key",
    appId: "your key",
    measurementId: "your key"
  };


  export default firebase.initializeApp(firebaseConfig)