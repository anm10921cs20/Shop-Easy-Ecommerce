// Firebase SDK imports (via <script> tags required in HTML):
// firebase-app-compat.js, firebase-auth-compat.js, firebase-database-compat.js, firebase-firestore-compat.js

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDiJJl_8641jMbS80q4B5jYzD0-TgDVWk",
  authDomain: "login-382ae.firebaseapp.com",
  databaseURL: "https://login-382ae-default-rtdb.firebaseio.com",
  projectId: "login-382ae",
  storageBucket: "login-382ae.appspot.com",
  messagingSenderId: "873909040901",
  appId: "1:873909040901:web:57ae96e0121ca5b6d9e96c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// Save UID in localStorage
const userDetails = (id) => {
  window.localStorage.setItem('currently_loggedIn', id);
};

// On page ready
document.addEventListener('DOMContentLoaded', function () {
  const currentUser = window.localStorage.getItem('currently_loggedIn');
  if (!currentUser) {
    const loginContainer = document.getElementById('login-container');
    if (loginContainer) loginContainer.style.display = "block";
  }
});

function googleLogin() {
  auth.signInWithRedirect(provider);
}


  window.onload = function () {
  auth.getRedirectResult()
    .then((result) => {
      if (result.user) {
        const user = result.user;
        console.log("Logged in as:", user.displayName);

        db.collection("users").doc(user.uid).set({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }).then(() => {
          alert("User saved!");
        }).catch((e) => {
          console.error("Firestore error:", e.message);
        });
      } else {
        console.log("No user result");
      }
    })
    .catch((error) => {
      console.error("Redirect error:", error.message);
    });
};

function register() {
  const email = document.getElementById('register-email').value;
  const pwd = document.getElementById('register-password').value;
  const username = document.getElementById('username').value;
  const loginForm = document.querySelector('.login-container');
  const registerForm = document.querySelector('.register-container');
  const alertMsg = document.getElementById('alertcontainer');
  let counter = 2;

  auth.createUserWithEmailAndPassword(email, pwd).then((userCredential) => {
    const uid = userCredential.user.uid;

    db.collection('users').doc(uid).set({ userName: username, email: email });
    database.ref("shopeasy/" + username).set({ username, email });

    loginForm.style.display = "block";
    registerForm.style.display = "none";
    document.getElementById('register-email').value = "";
    document.getElementById('register-password').value = "";
    document.getElementById('username').value = "";

    alertMsg.style.display = "block";
    alertMsg.style.backgroundColor = "var(--bs-success)";
    alertMsg.innerText = "Successfully Registered";
    const interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertMsg.style.display = "none";
      }
    }, 1000);

  }).catch((error) => {
    alertMsg.style.display = "block";
    alertMsg.style.backgroundColor = "var(--bs-danger)";
    alertMsg.innerText = error.message;
    const interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertMsg.style.display = "none";
      }
    }, 1000);
  });
}

function login() {
  const email = document.getElementById('loginemail').value;
  const pwd = document.getElementById('loginpassword').value;
  const alertMsg = document.getElementById('alertcontainer');
  let counter = 2;

  auth.signInWithEmailAndPassword(email, pwd).then(() => {
    const user = auth.currentUser;
    userDetails(user.uid);

    alertMsg.style.display = "block";
    alertMsg.style.backgroundColor = "var(--bs-success)";
    alertMsg.innerText = "Logging Successfully";
    const interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertMsg.style.display = "none";
      }
    }, 1000);

    window.location.replace('../../home/home.html');

  }).catch((error) => {
    const errorCode = error.code;
    alertMsg.style.display = "block";
    alertMsg.style.backgroundColor = "var(--bs-danger)";

    if (errorCode === "auth/internal-error") {
      alertMsg.innerText = "Your Password is Wrong";
    } else if (errorCode === "auth/wrong-password") {
      alertMsg.innerText = "User Not Found";
    } else if (errorCode === "auth/user-not-found") {
      alertMsg.innerText = "Email Not Registered";
    } else if (errorCode === "auth/invalid-email") {
      alertMsg.innerText = "The email address is badly formatted.";
    } else {
      alertMsg.innerText = error.message;
    }

    const interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertMsg.style.display = "none";
      }
    }, 1000);
  });
}

function forget() {
  const email = document.getElementById('forgetinput').value;
  const loginForm = document.querySelector('.login-container');
  const forgetContainer = document.getElementById('forget-container');
  const alertMsg = document.getElementById('alertcontainer');
  let counter = 2;

  auth.sendPasswordResetEmail(email).then(() => {
    forgetContainer.style.display = "none";
    loginForm.style.display = "block";

    alertMsg.style.display = "block";
    alertMsg.style.backgroundColor = "var(--bs-success)";
    alertMsg.innerText = "Reset Link Sent Successfully";

    const interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertMsg.style.display = "none";
      }
    }, 1000);
  }).catch((err) => {
    alertMsg.style.display = "block";
    alertMsg.style.backgroundColor = "var(--bs-danger)";
    alertMsg.innerText = err.message;

    const interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertMsg.style.display = "none";
      }
    }, 1000);
  });
}
