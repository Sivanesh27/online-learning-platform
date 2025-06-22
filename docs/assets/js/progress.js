import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const progressList = document.getElementById("progressList");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const q = query(collection(db, "quizResults"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const item = document.createElement("li");
      const data = doc.data();
      item.textContent = `Score: ${data.score}, Time: ${new Date(data.timestamp.seconds * 1000).toLocaleString()}`;
      progressList.appendChild(item);
    });
  } else {
    progressList.textContent = "Please log in to view your progress.";
  }
});
