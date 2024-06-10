import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8lCTAPP2GaJ25jwhvQBT15eger4nNOn8",
  authDomain: "test-appvite.firebaseapp.com",
  projectId: "test-appvite",
  storageBucket: "test-appvite.appspot.com",
  messagingSenderId: "929621211569",
  appId: "1:929621211569:web:8e9c6465f249e458ab2590"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

export const db = getFirestore(app);










/*const querySnapshot = await getDocs(collection(db, "TestUsers"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});*/