// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaETDWcGksBmhe3lhb7WJ9-8zsebgLzbw",
    authDomain: "fitness-gym-trainer.firebaseapp.com",
    projectId: "fitness-gym-trainer",
    storageBucket: "fitness-gym-trainer.appspot.com",
    messagingSenderId: "873985261700",
    appId: "1:873985261700:web:81ce9d7510b15d7cd9c2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;