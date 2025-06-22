import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDlualMDCAkRvmCs_eryjaHs_qiuYSNDc",
  authDomain: "online-learning-platform-d2078.firebaseapp.com",
  projectId: "online-learning-platform-d2078",
  storageBucket: "online-learning-platform-d2078.appspot.com",
  messagingSenderId: "994472691891",
  appId: "1:994472691891:web:66e5232e86381f9bd008c6",
  measurementId: "G-800V5B2Z15"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
