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
const db = firebase.firestore();

window.onload = () => {

function uservalue ()
{
    const id = localStorage.getItem('currently_loggedIn');
     const docRef = db.collection('users').doc(id)
    docRef.get().then(doc => {
        if(doc.exists){
          var username = doc.data().userName;
          document.getElementById('username').innerText = username;
          
          
        } else {
            console.log(`No such Document`)
        }
    }).catch(err => {
        console.log(`Error getting document : ${err}`)
    })
}
uservalue()
} 


function useremail() {
    const displayvalue = localStorage.getItem('displayname');
    document.getElementById('username').innerHTML = displayvalue;
}
useremail()







function signOut() 
{
    auth.signOut().then(()=>
    {
        window.localStorage.removeItem('currently_loggedIn');
        window.localStorage.removeItem('filename');
        window.localStorage.removeItem('displayname');
        window.location.replace('../index.html')
    })
    .catch(()=>{
        console.log('error while signout')
    })
}

