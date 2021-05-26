import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyB5-R00IC6f7nrhART9l2_qfQAwve1jx9A",
    authDomain: "automatetechnologies-1a196.firebaseapp.com",
    databaseURL: "https://automatetechnologies-1a196.firebaseio.com",
    projectId: "automatetechnologies-1a196",
    storageBucket: "automatetechnologies-1a196.appspot.com",
    messagingSenderId: "1085362861207",
    appId: "1:1085362861207:web:a516c89d084eef0bfda5d2",
    measurementId: "G-301TEQYQGX"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
