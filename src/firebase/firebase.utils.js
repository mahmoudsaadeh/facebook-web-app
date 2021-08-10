import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBwdZCUqpuSSG4jm3EMo8q7UN2CdY0WqwE",
    authDomain: "facebook-web-app-d68b6.firebaseapp.com",
    projectId: "facebook-web-app-d68b6",
    storageBucket: "facebook-web-app-d68b6.appspot.com",
    messagingSenderId: "1000637238563",
    appId: "1:1000637238563:web:5867364954f4ea0db81096"
};





firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();


export default firebase;