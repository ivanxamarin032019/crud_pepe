import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = 
  {
    apiKey: "AIzaSyCKsH5MxijVR4MjwwjZoLwbN03kco4hvBE",
    authDomain: "crud-57048.firebaseapp.com",
    projectId: "crud-57048",
    storageBucket: "crud-57048.appspot.com",
    messagingSenderId: "239883589840",
    appId: "1:239883589840:web:d8faed893c2b081654a6d5"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)

