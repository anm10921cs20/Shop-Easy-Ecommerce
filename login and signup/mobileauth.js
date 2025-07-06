

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
firebase.analytics();

const auth = firebase.auth();
const database = firebase.database();
const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();






const userDetails = id => {
  window.localStorage.setItem('currently_loggedIn', id)

}


window.onload = () => {

  try {
    const currentUser = window.localStorage.getItem('currently_loggedIn')
    if (currentUser === null) {
      throw new Error('No Current User')
    }
    else {

      userDetails()
    }

  } catch (err) {
    const logincontainer = document.getElementById('login-container');
    logincontainer.style.display = "block";
  }
}




// google login







function googleLogin()
{
  auth.signInWithPopup(google).then((result)=>
  {
    const user = result.user;
    alert('login Successfully: '+ user.displayName)
    console.log(user);
    localStorage.setItem('displayname',user.displayName);
    window.location.replace('../../home/home.html');
  }).catch((err)=>{
    alert('error: '+ err.message );
  })
}










































function register() {
  var email = document.getElementById('register-email').value;
  var pwd = document.getElementById('register-password').value;
  var username = document.getElementById('username').value;
  const loginForm = document.getElementsByClassName('login-container')[0];
  const registerForm = document.getElementsByClassName('register-container')[0];
  var alertmessge = document.getElementById('alertcontainer');
  
  var counter = 2;
  console.log(email, pwd, username)




  auth.createUserWithEmailAndPassword(email, pwd).then((userCredential) => {
    var user = userCredential.user.uid;
   
    
      
      loginForm.style.display = "block";
      registerForm.style.display = "none";
      document.getElementById('loginemail').value = "";

      document.getElementById('loginpassword').value = "";

      document.getElementById('register-email').value = "";
      document.getElementById('register-password').value = "";
      document.getElementById('username').value = "";


      db.collection('users').doc(userCredential.user.uid).set({
        userName: username,
        email: email,
      });

      database.ref("shopeasy/" + username).set({
        username:username,
        email:username
      })
      alertmessge.style.display = "block"
      alertmessge.style.backgroundColor = "var(--bs-success)";
      alertmessge.innerText = "Successfuly Registered";
      var interval = setInterval(() => {
        counter--;
        if (counter < 0) {
          clearInterval(interval);
          alertmessge.style.display = "none";
        }
      }, 1000)
    })


    .catch((error) => {
      var errormessge = error.message;
      alertmessge.style.display = "block"
      alertmessge.style.backgroundColor = "var(--bs-danger)";
      alertmessge.innerText = errormessge;
      var interval = setInterval(() => {
        counter--;
        if (counter < 0) {
          clearInterval(interval);
          alertmessge.style.display = "none";
        }
      }, 1000)
    });

   


}




function login() {
  var loginemail = document.getElementById('loginemail').value;
  var loginpwd = document.getElementById('loginpassword').value;
  var counter = 2;



  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return auth.signInWithEmailAndPassword(loginemail, loginpwd)
        .then(() => {
          var user = auth.currentUser;
          var uid = user.uid;
          userDetails(uid);
          console.log(uid);
          var alertmessge = document.getElementById('alertcontainer');
          alertmessge.style.display = "block"
          alertmessge.style.backgroundColor = "var(--bs-success)";
          alertmessge.innerText = "Logging Successfully";
          var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
              clearInterval(interval);
              alertmessge.style.display = "none";
            }
          }, 1000)
          window.location.replace('../../home/home.html');


        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var alertmessge = document.getElementById('alertcontainer');
          var counter = 2;




          if (errorCode === "auth/internal-error") {
            alertmessge.style.display = "block"
            alertmessge.style.backgroundColor = "var(--bs-danger)";
            alertmessge.innerText = "Your Password is Wrong";
            var interval = setInterval(() => {
              counter--;
              if (counter < 0) {
                clearInterval(interval);
                alertmessge.style.display = "none";
              }
            }, 1000)


          }
          if (errorCode === "auth/wrong-password") {
            alertmessge.style.display = "block"
            alertmessge.style.backgroundColor = "var(--bs-danger)";
            alertmessge.innerText = "User Not Found";
            var interval = setInterval(() => {
              counter--;
              if (counter < 0) {
                clearInterval(interval);
                alertmessge.style.display = "none";
              }
            }, 1000)


          } else if (errorCode === "auth/user-not-found") {
            alertmessge.style.display = "block"
            alertmessge.style.backgroundColor = "var(--bs-danger)";
            alertmessge.innerText = "Email Not Registered";
            var interval = setInterval(() => {
              counter--;
              if (counter < 0) {
                clearInterval(interval);
                alertmessge.style.display = "none";
              }
            }, 1000)
          } else if (errorCode === "auth/invalid-email") {
            alertmessge.style.display = "block"
            alertmessge.style.backgroundColor = "var(--bs-danger)";
            alertmessge.innerText = "The email address is badly formatted.";
            var interval = setInterval(() => {
              counter--;
              if (counter < 0) {
                clearInterval(interval);
                alertmessge.style.display = "none";
              }
            }, 1000)
          }



        })

    })

    .catch((error) => {
      console.error("Login Error: ", error.message);
    });




}




function forget() {
  const emailforget = document.getElementById('forgetinput').value;
  var alertmessge = document.getElementById('alertcontainer');
  const loginForm = document.getElementsByClassName('login-container')[0];
  const forgetcontainer = document.getElementById('forget-container');
  var counter = 2;
  auth.sendPasswordResetEmail(emailforget).then(() => {
    forgetcontainer.style.display = "none";
    loginForm.style.display = "block";
    alertmessge.style.display = "block";
    alertmessge.style.backgroundColor = "var(--bs-success)";
    alertmessge.innerText = "Reset Link Send Successful.";
    var interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertmessge.style.display = "none";
      }
    }, 1000)
  }).catch((err) => {
    alertmessge.style.display = "block"
    alertmessge.style.backgroundColor = "var(--bs-danger)";
    alertmessge.innerText = err.message;
    var interval = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        alertmessge.style.display = "none";
      }
    }, 1000)
  })

}








