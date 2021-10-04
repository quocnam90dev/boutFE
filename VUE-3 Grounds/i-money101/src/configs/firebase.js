import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDRwTmMbgP0Uh7aP0pZLrzLK8Th_tn4p9w",
  authDomain: "vue101-fc1d2.firebaseapp.com",
  projectId: "vue101-fc1d2",
  storageBucket: "vue101-fc1d2.appspot.com",
  messagingSenderId: "30309603194",
  appId: "1:30309603194:web:cd18341977481f6e8fa8c3",
  measurementId: "G-G76K6PFJPJ"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectStorage, projectFirestore, timestamp }