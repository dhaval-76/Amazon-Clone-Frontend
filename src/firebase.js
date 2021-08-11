import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsSxU6v-arX37KmwyNDF6i3nlcQj_f4x4",
    authDomain: "clone-62791.firebaseapp.com",
    projectId: "clone-62791",
    storageBucket: "clone-62791.appspot.com",
    messagingSenderId: "697251023166",
    appId: "1:697251023166:web:ac6e0842868641927c846f",
    measurementId: "G-BNZHTLCSYV",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export default auth;
export { db };
