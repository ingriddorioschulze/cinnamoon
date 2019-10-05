import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCpx_hNgFvkXWwLJIlCHfX2wx0heOwqYMo',
  authDomain: 'cinnamoon.firebaseapp.com',
  databaseURL: 'https://cinnamoon.firebaseio.com',
  projectId: 'cinnamoon',
  storageBucket: '',
  messagingSenderId: '661812827759',
  appId: '1:661812827759:web:c81c8cc15fd041441cdf9a',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
