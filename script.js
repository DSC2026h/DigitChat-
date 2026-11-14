
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyByX29zvz9Go36tFTCmrDc5OdUAx1IuPbM",
  authDomain: "digitchat-78450.firebaseapp.com",
  projectId: "digitchat-78450",
  storageBucket: "digitchat-78450.firebasestorage.app",
  messagingSenderId: "707684407667",
  appId: "1:707684407667:web:fac1a5a121f17636110d06",
  measurementId: "G-EDXL0CK3HW",
  databaseURL: "https://digitchat-78450-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);

console.log("Digitchat Firebase connected successfully!");
