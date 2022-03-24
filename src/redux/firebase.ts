import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore

const firebaseConfig = {
  apiKey: 'AIzaSyAK26TtV8ctubdwDjV3gqlcbUfKyC0iXqo',
  authDomain: 'data-4f440.firebaseapp.com',
  projectId: 'data-4f440',
  storageBucket: 'data-4f440.appspot.com',
  messagingSenderId: '119678566760',
  appId: '1:119678566760:web:e6c91a654c127c79b056dd',
  measurementId: 'G-8ZDHDJ7BKL',
};
// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
// firebase.firestore(); // <- needed if using firestore

export default firebase;
