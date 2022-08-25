// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaW1HolFv9WlbF8DOV-mWvAzEZmQYYYos",
  authDomain: "portlab-listserv.firebaseapp.com",
  databaseURL: "https://portlab-listserv-default-rtdb.firebaseio.com",
  projectId: "portlab-listserv",
  storageBucket: "portlab-listserv.appspot.com",
  messagingSenderId: "1022151150360",
  appId: "1:1022151150360:web:95dc9e1839a15b83116c6d",
  measurementId: "G-CLE5XKL0L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);