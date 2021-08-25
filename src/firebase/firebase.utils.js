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


export const createUserProfileDocument = async (userAuth, userInfo) => {

    

    if (!userAuth) return;

    console.log(userAuth);
    
    //console.log();

    const userRef = db.doc(`users/${userAuth.uid}`);

    // used only to check if the user with the above id exists in firestore
    // we only get an id, not user info
    const snapshot = await userRef.get();

    console.log(userInfo); // undefined

    //console.log(snapshot);

    // if snapshot doesn't exits -> no data found, so we will add some
    if (!snapshot.exists) {
        console.log("snapshot doesn't exist, so we'll create one!");

        const { email } = userAuth;

        //const fullName = userInfo.fullName2;
        //console.log(fullName);

        const createdAt = new Date(); // returns current date and time (as object)

        //console.log('emailz: ' + email);
        console.log(createdAt);

        await userRef.set({
            email,
            createdAt
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    }

    return userRef;
};



firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();


export default firebase;


/*
fireStore.collection("users").doc(userAuth.uid).set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
*/