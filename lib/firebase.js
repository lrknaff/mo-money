import firebase from 'firebase';
var config = {
// your config file
};

export default firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
