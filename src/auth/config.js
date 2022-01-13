import * as firebase from 'firebase/app';
import 'firebase/auth';

export const authConfig = firebase.initializeApp({
    apiKey: "AIzaSyANgKOwny-eLNAJ3YVyWebRPccBR1ZAINc",
    authDomain: "library-firebase-js.firebaseapp.com",
    projectId: "library-firebase-js",
    storageBucket: "library-firebase-js.appspot.com",
    messagingSenderId: "572752457068",
    appId: "1:572752457068:web:d0d76ecf0819afc2e9d749",
    measurementId: "G-EYVXTKPDCZ"
});
