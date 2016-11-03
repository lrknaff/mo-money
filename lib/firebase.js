import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC1m-oiMKSxYc1MyDvgZax-n9B_TvyUl-I',
  authDomain: 'mo-money-2f924.firebaseapp.com',
  databaseURL: 'https://mo-money-2f924.firebaseio.com',
  storageBucket: 'mo-money-2f924.appspot.com',
  messagingSenderId: '23279304385',
}

firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

export default firebase
export const signIn = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()
export const reference = firebase.database().ref('mo-money')
