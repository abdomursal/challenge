
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyBCY0E6lktmTf1jguecn-hvWeVLRbHZi5k",
  authDomain: "lunchapp-e0e1a.firebaseapp.com",
  projectId: "lunchapp-e0e1a",
  databaseURL: "https://lunchapp-e0e1a.firebaseio.com",
  storageBucket: "lunchapp-e0e1a.appspot.com",
  messagingSenderId: "257086512530",
  appId: "1:257086512530:android:2e416a3ea06109ba00f54b",
//   measurementId: "G-463F3LH7L4"
};

if (firebase.length === 0) {
  firebase.initializeApp({});
}
export { firebase };