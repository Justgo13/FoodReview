import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCvNIZNbLpQykjXaFzOuN4vXHCg-P-_rs",
  authDomain: "foodreview-b8503.firebaseapp.com",
  projectId: "foodreview-b8503",
  storageBucket: "foodreview-b8503.appspot.com",
  messagingSenderId: "1023534151265",
  appId: "1:1023534151265:web:176f286114c42a4efcdc20",
  databaseURL: "https://foodreview-b8503-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);
const dbRef = ref(db);

// push element to database with auto-gen key
// const userRef = ref(db, 'users');
// const newUserRef = push(userRef);
// set(newUserRef, {
//     username: "ad",
//     password: "12"
// });

// get element from database
// get(child(dbRef, `users/-MpnZ9XSvPzZhcI3jsXQ`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));