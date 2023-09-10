// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOigeYQryuH413LSjE6DyXFqGQObUh3i8",
  authDomain: "pucworks-484bb.firebaseapp.com",
  projectId: "pucworks-484bb",
  storageBucket: "pucworks-484bb.appspot.com",
  messagingSenderId: "630764881616",
  appId: "1:630764881616:web:e7e6aec91fca4d8d0880d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }