import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC44cY4PfmsHJymMet3ULLuRgwGrF8T5vg",
    authDomain: "socialapp-6288e.firebaseapp.com",
    databaseURL: "https://socialapp-6288e.firebaseio.com",
    projectId: "socialapp-6288e",
    storageBucket: "socialapp-6288e.appspot.com",
    messagingSenderId: "257051092893",
    appId: "1:257051092893:web:11c73744f901763181b174",
    measurementId: "G-CP7840GBXM"
  };

//Initialize Firebase

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

export const provider = new firebase.auth.GoogleAuthProvider()
export const fbProvider = new firebase.auth.FacebookAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider) //*provides the pop up window when loggin in with google
export const signInWithFacebook = () => auth.signInWithPopup(fbProvider) //attempt at fb login

firebase.firestore() //! dropped the .settings({ timestampsInSnapshots: true }) due to the warning.
export default firebase