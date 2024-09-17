import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTSaoWuC9_VhE4KXYEGRxWyeJYwG5TWUo",
  authDomain: "instaclone-4a29f.firebaseapp.com",
  projectId: "instaclone-4a29f",
  storageBucket: "instaclone-4a29f.appspot.com",
  messagingSenderId: "30775341546",
  appId: "1:30775341546:web:0df1348cd36d56d7950293",
  measurementId: "G-BT3DZ9MBTH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
