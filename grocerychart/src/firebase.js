import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD7qw5NOQQXHU1fsvDx5YCwocSsqZOaeS0",
  authDomain: "groceryproject-3b802.firebaseapp.com",
  databaseURL: "https://groceryproject-3b802.firebaseio.com",
  projectId: "groceryproject-3b802",
  storageBucket: "groceryproject-3b802.appspot.com",
  messagingSenderId: "130156783632",
  appId: "1:130156783632:web:0bacb35fae7ede05e44295",
  measurementId: "G-LZ65HVX05P"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;