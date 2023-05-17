/* <INIT FIREBASE */
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBV8-fnfulxYeUN0ihEBspN3lrc9S793Aw",
    authDomain: "spotify-d4807.firebaseapp.com",
    projectId: "spotify-d4807",
    storageBucket: "spotify-d4807.appspot.com",
    messagingSenderId: "600857688172",
    appId: "1:600857688172:web:a428df7fcbdd24d9cd4049",
    measurementId: "G-20KJGENQDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            console.log("Logged in user:", user);

            // Redirect to the "open" page
            window.location.href = "/open/open.html";
        })
        .catch((error) => {
            // Login failed
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorCode, errorMessage);
        });
});


const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registration successful
            const user = userCredential.user;
            console.log("Registered user:", user);

            // Redirect to the "open" page
            window.location.href = "/open/open.html";
        })
        .catch((error) => {
            // Registration failed
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorCode, errorMessage);
        });
});
