import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Sample question loader
const questions = [
  { q: "What is 2 + 2?", a: "4" },
  { q: "What is the capital of France?", a: "Paris" }
];

const quizContainer = document.getElementById("quizContainer");
const result = document.getElementById("result");

function loadQuiz() {
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <label>${q.q}</label>
      <input type="text" id="answer${index}" placeholder="Answer"><br><br>
    `;
    quizContainer.appendChild(div);
  });
}

document.getElementById("submitQuiz").addEventListener("click", async () => {
  let score = 0;

  questions.forEach((q, index) => {
    const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
    if (userAnswer === q.a.toLowerCase()) score++;
  });

  result.textContent = `Your Score: ${score}/${questions.length}`;

  // Save to Firestore
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await addDoc(collection(db, "quizResults"), {
        uid: user.uid,
        score: score,
        timestamp: new Date()
      });
    }
  });
});

loadQuiz();
