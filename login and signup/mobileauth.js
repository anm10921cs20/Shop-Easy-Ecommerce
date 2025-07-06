

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDiJJl_8641jMbS80q4B5jYzD0-TgDVWk",
  authDomain: "login-382ae.firebaseapp.com",
  databaseURL: "https://login-382ae-default-rtdb.firebaseio.com",
  projectId: "login-382ae",
  storageBucket: "login-382ae.firebasestorage.app",
  messagingSenderId: "873909040901",
  appId: "1:873909040901:web:57ae96e0121ca5b6d9e96c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();



function register() {
  var email = document.getElementById('register-email').value;
  var pwd = document.getElementById('register-password').value;
  var username = document.getElementById('username').value;
  const loginForm = document.getElementsByClassName('login-container')[0];
  const registerForm = document.getElementsByClassName('register-container')[0];
  console.log(email, pwd, username)




 auth.createUserWithEmailAndPassword(email, pwd).then((userCredential)=>
{
  var user = userCredential.user.uid;
  database.ref('shopeasy login/' + username).set({
  username: username,
  email:email,
});

alert('success stored')
})
.catch((error)=>
{
  var errormessge = error.message;
  alert(errormessge);
});


}




function login() {
  var loginemail = document.getElementById('loginemail').value;
  var loginpwd = document.getElementById('loginpassword').value;

  auth.signInWithEmailAndPassword(loginemail,loginpwd)
  .then(() => {
    var user = auth.currentUser;
    var uid = user.uid;
    
    if(uid === "ePzJQJPm3dZ9F1kjrPx01F44UtX2" )
    {
      window.location.href = "https://shop-easy-ecommerce.vercel.app/"
    }
    else
    {
      window.alert('wrong')
    }
  })
  .catch((error)=>
  {
    document.getElementById('login-message').innerHTML = error.message;
  })

  
}



function admin()
{
  auth.onAuthStateChanged(function(user) {
  if (user) {
    getUserData(user.uid);
  }
});

function getUserData(uid) {
  firebase.database().ref('shopeasy login/' + uid).once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("👤 Username:", data.username);
        console.log("📧 Email:", data.email);
        alert(`Welcome ${data.username} (${data.email})`);
      } else {
        console.log("No data found.");
      }
    })
    .catch((error) => {
      console.error("Error getting data:", error);
    });
}
}











