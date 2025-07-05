

// Replace the below config with your Firebase project config
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDiJJl_8641jMbS80q4B5jYzD0-TgDVWk",
  authDomain: "login-382ae.firebaseapp.com",
  projectId: "login-382ae",
  storageBucket: "login-382ae.firebasestorage.app",
  messagingSenderId: "873909040901",
  appId: "1:873909040901:web:57ae96e0121ca5b6d9e96c"
};

// Initialize Firebase

window.onload = function () {
  // Ensure Firebase initialized
  
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const database = firebase.database();
  

  // Setup reCAPTCHA verifier
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'visible',
    'callback': function (response) {
      console.log("reCAPTCHA solved: ", response);
    }
  });

  recaptchaVerifier.render();
};

function login()
{
    var mobilenumber = document.getElementById('mobilenum').value;

    var number = "+91"+mobilenumber
        console.log(number);
        if(mobilenumber.length<10)
        {
            window.alert('enter correct mobile number')
        }
        else
        {
            firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function(confirmResult){
                window.confirmResult=confirmResult;
                coderesult=confirmResult;
                console.log(coderesult);
            })
        }
}

  


