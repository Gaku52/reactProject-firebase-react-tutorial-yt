import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX4hWcR5kaeDcDJWEh8eFXL08RHh36pGM",
  authDomain: "fir-react-tutorial-yt.firebaseapp.com",
  projectId: "fir-react-tutorial-yt",
  storageBucket: "fir-react-tutorial-yt.appspot.com",
  messagingSenderId: "839783409467",
  appId: "1:839783409467:web:ea2cc6ce3a79de5ff6391e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;