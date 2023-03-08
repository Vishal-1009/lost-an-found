import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJYhMvpzSRrTo-pZw6u6ukAzF3lTBfUYE",
  authDomain: "lost-and-find-a56b6.firebaseapp.com",
  projectId: "lost-and-find-a56b6",
  storageBucket: "lost-and-find-a56b6.appspot.com",
  messagingSenderId: "391223525504",
  appId: "1:391223525504:web:66d22a8f607faa8c2ca665"
};


const app = initializeApp(firebaseConfig);
export default firebase.firestore();