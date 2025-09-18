const firebaseConfig1 = {
    apiKey: "AIzaSyA2OdKypmjrY-X7XKId64MndF4HtIRe-bs",
    authDomain: "shopeasy-login.firebaseapp.com",
    databaseURL: "https://shopeasy-login-default-rtdb.firebaseio.com",
    projectId: "shopeasy-login",
    storageBucket: "shopeasy-login.firebasestorage.app",
    messagingSenderId: "255206950436",
    appId: "1:255206950436:web:2e972fbaf4ae6b8f1c7ab1",
    measurementId: "G-YDHQQF7XN8"
};

firebase.initializeApp(firebaseConfig1);

const fs = firebase.firestore();
const auths = firebase.auth();



var openBtn = document.getElementById('app-arrows');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
})




const datavalue = fs.collection("users").doc(localStorage.getItem('userid'));
datavalue.get().then((doc) => {
    if(doc.exists)
    {
        var namevalue = doc.data().username;
        var emailvalue = doc.data().email
        document.getElementById('names').innerText = namevalue;
        document.getElementById('mail').innerText = emailvalue;

        
    }
})


function signOut(auths) {
    auths.signOut().then(() => {
        window.localStorage.removeItem('userid');
        window.localStorage.removeItem('nameid');
        window.localStorage.removeItem('useremail');
        window.location.reload();

    })
        .catch(() => {
            console.log('error while signout')
        })
}


const logoutdet  = document.getElementsByClassName('logout')[0];
logoutdet.addEventListener('click', () => {
    signOut(auths);
    var counter = 3;
    var interval = setInterval(()=>{
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            window.location.replace('../index.html');
        }
    })
    
})