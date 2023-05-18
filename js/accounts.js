// <INIT FIREBASE>

// Import the necessary functions from the required SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Configuration for your web app in Firebase
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

/* LOGIN FORM */

// Get the login form element
const loginForm = document.getElementById("loginForm");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            console.log("Logged in user:", user);

            // Redirect to the "open" page
            window.location.href = "./open/open.html";
        })
        .catch((error) => {
            // Login failed
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorCode, errorMessage);
        });
});

/* REGISTER FORM */

// Get the register form element
const registerForm = document.getElementById("registerForm");

// Add a submit event listener to the register form
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Check password requirements
    const lengthRequirement = password.length >= 8;
    const uppercaseRequirement = /[A-Z]/.test(password);
    const lowercaseRequirement = /[a-z]/.test(password);
    const numberRequirement = /[0-9]/.test(password);
    const specialCharRequirement = /[!@#$%^&*.]/.test(password);

    if (lengthRequirement && uppercaseRequirement && lowercaseRequirement && numberRequirement && specialCharRequirement) {
        // Create a new user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Registration successful
                const user = userCredential.user;
                console.log("Registered user:", user);

                // Redirect to the "open" page
                window.location.href = "./open/open.html";
            })
            .catch((error) => {
                // Registration failed
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error:", errorCode, errorMessage);
            });
    } else {
        console.log("Password requirements not met");
    }
});

/* PASSWORD REQUIREMENTS */

// Get the password input element and the password requirements element
const passwordInput = document.getElementById("registerPassword");
const passwordRequirements = document.getElementById("passwordRequirements");

// Add an input event listener to the password input
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    // Check password requirements
    const lengthRequirement = password.length >= 8;
    const uppercaseRequirement = /[A-Z]/.test(password);
    const lowercaseRequirement = /[a-z]/.test(password);
    const numberRequirement = /[0-9]/.test(password);
    const specialCharRequirement = /[!@#$%^&*.]/.test(password);

    updateRequirementStatus("lengthRequirement", lengthRequirement);
    updateRequirementStatus("uppercaseRequirement", uppercaseRequirement);
    updateRequirementStatus("lowercaseRequirement", lowercaseRequirement);
    updateRequirementStatus("numberRequirement", numberRequirement);
    updateRequirementStatus("specialCharRequirement", specialCharRequirement);
});

// Function to update the requirement status
function updateRequirementStatus(requirementId, isFulfilled) {
    const requirementStatus = passwordRequirements.querySelector(`#${requirementId} .requirementStatus`);

    if (isFulfilled) {
        requirementStatus.textContent = "✔";
        requirementStatus.style.color = "green";
    } else {
        requirementStatus.textContent = "✘";
        requirementStatus.style.color = "red";
    }
}