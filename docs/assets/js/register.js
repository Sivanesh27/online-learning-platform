import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = registerForm['email'].value;
  const password = registerForm['password'].value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful. You can now log in.");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});
