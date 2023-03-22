// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDib7G18xrMQgQhfErWWSSOtBKr6puiIgs',
  authDomain: 'netflix-clone-a6325.firebaseapp.com',
  projectId: 'netflix-clone-a6325',
  storageBucket: 'netflix-clone-a6325.appspot.com',
  messagingSenderId: '550191761380',
  appId: '1:550191761380:web:98a1a0cf201c6a86cde9f1',
  measurementId: 'G-WFGHKDEER2',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;