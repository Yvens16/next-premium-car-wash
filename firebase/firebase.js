import firebase from 'firebase/app'
import firebaseConfig from './firebaseconfig';
import 'firebase/analytics'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}
const firebaseAnalytics = firebase.analytics;


export { firebase, firebaseAnalytics };