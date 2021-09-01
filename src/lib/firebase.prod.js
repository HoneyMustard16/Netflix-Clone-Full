import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbfyytc8EgZV92NSY-wH0uu_o4X8hW-oU",
  authDomain: "netflix-clone-full-77259.firebaseapp.com",
  projectId: "netflix-clone-full-77259",
  storageBucket: "netflix-clone-full-77259.appspot.com",
  messagingSenderId: "346767642253",
  appId: "1:346767642253:web:6f850847b86dc415079cc4",
  measurementId: "G-64CB3ET93M",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
