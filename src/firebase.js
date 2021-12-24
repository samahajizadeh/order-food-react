// import { toast } from "react-toastify";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP4P7XU29SFzjRcWaqaEZUiNBf9fEQ8nw",
  authDomain: "order-food-project-cc48b.firebaseapp.com",
  databaseURL: "https://order-food-project-cc48b-default-rtdb.firebaseio.com",
  projectId: "order-food-project-cc48b",
  storageBucket: "order-food-project-cc48b.appspot.com",
  messagingSenderId: "827788556335",
  appId: "1:827788556335:web:c6db8f9c864e1093962eda",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
