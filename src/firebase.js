import firebase from 'firebase/app'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAeiG4CZxLgiyTtrjPK83K_8Wtd6yMbDJI",
    authDomain: "task-app-5e6ee.firebaseapp.com",
    databaseURL: "https://task-app-5e6ee.firebaseio.com",
    projectId: "task-app-5e6ee",
    storageBucket: "task-app-5e6ee.appspot.com",
    messagingSenderId: "1069489587273",
    appId: "1:1069489587273:web:0b09be4f19d66ca6ef6b98",
    measurementId: "G-EV7V0GEC8N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;

//https://console.firebase.google.com/u/0/project/task-app-5e6ee/database/firestore/data~2Ftimes~2FhixOqegh5IJQD6cgcWQn