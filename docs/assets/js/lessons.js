import { auth, db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const lessonsContainer = document.getElementById("lessons");

async function fetchLessons() {
  const lessonsRef = collection(db, "lessons");
  const snapshot = await getDocs(lessonsRef);

  snapshot.forEach(doc => {
    const lesson = doc.data();
    const card = document.createElement("div");
    card.className = "lesson-card";
    card.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.description}</p>
      <a href="${lesson.link}" target="_blank">Watch</a>
    `;
    lessonsContainer.appendChild(card);
  });
}

fetchLessons();
