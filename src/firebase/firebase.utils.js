import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyDcuc7ITEIxxkaRROawiIVG0iYxRKC8mos",
        authDomain: "crown-db-6a63e.firebaseapp.com",
        databaseURL: "https://crown-db-6a63e.firebaseio.com",
        projectId: "crown-db-6a63e",
        storageBucket: "crown-db-6a63e.appspot.com",
        messagingSenderId: "386447738106",
        appId: "1:386447738106:web:d5451dce23a161bb647543",
        measurementId: "G-2CGM0DEQ7P"
};


export const createUserProfileDocument = async (userAuth, additionalData) =>{
        if(!userAuth)return ;
                
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        //  console.log(userRef)
        const snapShot = await userRef.get()
        if(!snapShot.exists){
                const {displayName, email} = userAuth;
                const createdAt = new Date();
                
                try{
                     await userRef.set({
                             displayName,
                             email,
                             createdAt,
                             ...additionalData
                     })  
                }
                catch(error){
                        console.log('error createting user', error.message);
                }
        }
        return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


export default firebase;

