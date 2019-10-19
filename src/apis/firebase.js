import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = {}

var firebaseConfig = {
  apiKey: 'AIzaSyC5l-k6j7bFUreJhdyEXiwTfeZoRjLJ-iU',
  authDomain: 'horizon-fc1c9.firebaseapp.com',
  databaseURL: 'https://horizon-fc1c9.firebaseio.com',
  projectId: 'horizon-fc1c9',
  storageBucket: 'horizon-fc1c9.appspot.com',
  messagingSenderId: '354530515268',
  appId: '1:354530515268:web:a5b0d6ef2b435608c61f11'
}

firebase.initializeApp(firebaseConfig)

firebase.firestore().settings(settings)

export default firebase