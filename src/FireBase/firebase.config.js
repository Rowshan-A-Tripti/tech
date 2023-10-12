// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD2dZqzK4_72RhW4bhFafTRrK3Bk9kJvI",
  authDomain: "education-service-f7214.firebaseapp.com",
  projectId: "education-service-f7214",
  storageBucket: "education-service-f7214.appspot.com",
  messagingSenderId: "1099026338781",
  appId: "1:1099026338781:web:83444e4fbc6dc26e079c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;