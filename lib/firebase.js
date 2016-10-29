import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyC1m-oiMKSxYc1MyDvgZax-n9B_TvyUl-I",
    authDomain: "mo-money-2f924.firebaseapp.com",
    databaseURL: "https://mo-money-2f924.firebaseio.com",
    storageBucket: "mo-money-2f924.appspot.com",
    messagingSenderId: "23279304385"
};

export default firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
