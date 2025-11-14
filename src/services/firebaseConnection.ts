import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAQP6viHbhFStnfNl9WT05iHs8ZFx07nPw",
  authDomain: "reactlinks-ccf8e.firebaseapp.com",
  projectId: "reactlinks-ccf8e",
  storageBucket: "reactlinks-ccf8e.firebasestorage.app",
  messagingSenderId: "838880977591",
  appId: "1:838880977591:web:75743a80c9a471bdc5a332"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db}