
const firebaseConfig = {
    apiKey: "AIzaSyA2OdKypmjrY-X7XKId64MndF4HtIRe-bs",
    authDomain: "shopeasy-login.firebaseapp.com",
    databaseURL: "https://shopeasy-login-default-rtdb.firebaseio.com",
    projectId: "shopeasy-login",
    storageBucket: "shopeasy-login.firebasestorage.app",
    messagingSenderId: "255206950436",
    appId: "1:255206950436:web:2e972fbaf4ae6b8f1c7ab1",
    measurementId: "G-YDHQQF7XN8"
};





// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const firesttore = firebase.firestore();




const useruid = (id) => {
    localStorage.setItem('userid', id);
}



//   register page


function register() {
    const emails1 = document.getElementById('register-email').value;
    const names = document.getElementById('register-name').value;
    const password = document.getElementById('register-password').value;


    auth.createUserWithEmailAndPassword(emails1, password).then((userCredential) => {
        const uid = userCredential.user.uid;


        db.ref("shopeasyusers/" + names).set(
            {
                emails1, names
            }
        )
        firesttore.collection("users").doc(uid).set({
            email: emails1,
            username: names
        })
        loginContainer.style.display = "block";
        loginContainer1.style.display = "block";
        registerContainer.style.display = "none";
        registerContainer1.style.display = "none";
        registerbtn.style.display = "none";
        loginbtn.style.display = 'flex';
        changeContent.innerText = 'Login';

        document.getElementById('register-email').value = "";
        document.getElementById('register-name').value = "";
        document.getElementById('register-password').value = "";

    }).catch((err) => {
        const error = err.message;
        console.log(error);

    })



}


// login container


function login() {
    const loginemail = document.getElementById('login-email').value;
    const loginpassword = document.getElementById('loginpassword').value;
    var p = document.createElement('p');
    p.classList.add('para-alert');





    auth.signInWithEmailAndPassword(loginemail, loginpassword).then(() => {
        const user = auth.currentUser;
        useruid(user.uid);


        const loginpagecontainer = document.getElementsByClassName('.loginpage-container')[0];
        console.log(loginpagecontainer);

        loginpagecontainer.style.display = "none";
        var alertvalue = document.getElementById('alertcontainer');
        alertvalue.style.display = "flex";
        p.innerText = "Login Successfully"
        alertvalue.append(p);
        var counter = 5;
        var interval = setInterval(() => {
            counter--;
            if (counter > 0) {
                clearInterval(interval);
                alertvalue.style.display = "none";
                 p.innerText = ""
            }
        }, 1000)



    }).catch((err) => {
        var error = err.message;

        var alertvalue = document.getElementById('alertcontainer');
        alertvalue.style.display = "flex";
        p.innerText = error
        alertvalue.append(p);
        var counter = 5;
        var interval = setInterval(() => {
            counter--;
            if (counter > 0) {
                clearInterval(interval);
                alertvalue.style.display = "none";
                 p.innerText = ""
            }
        }, 1000)

    })













}


const uservalue = localStorage.getItem('userid');


const docRef = firesttore.collection('users').doc(uservalue)
docRef.get().then(doc => {
    if (doc.exists) {
        var username = doc.data().username;
        localStorage.setItem('nameid', username);

    } else {
        console.log(`No such Document`)
    }
}).catch(err => {
    console.log(`Error getting document : ${err}`)
})



const datalogin = document.getElementsByClassName('app-login')[0];





function signOut(auth) {
    auth.signOut().then(() => {
        window.localStorage.removeItem('userid');
        window.localStorage.removeItem('nameid');
        window.localStorage.removeItem('useremail');
        window.location.reload();

    })
        .catch(() => {
            console.log('error while signout')
        })
}



function reset() {
    const forgetEmail = document.getElementById('forget-email').value;
    auth.sendPasswordResetEmail(forgetEmail).then(() => {
        var p = document.createElement('p');
        p.classList.add('para-alert');
        var alertvalue = document.getElementById('alertcontainer');
        alertvalue.style.display = "flex";
        p.innerText = "Successfully Sent"
        alertvalue.append(p);
        var counter = 5;
        var interval = setInterval(() => {
            counter--;
            if (counter > 0) {
                clearInterval(interval);
                alertvalue.style.display = "none";
                 p.innerText = ""
            }
        }, 1000)
    }).catch((err) => {
        var p = document.createElement('p');
        p.classList.add('para-alert');
        var alertvalue = document.getElementById('alertcontainer');
        alertvalue.style.display = "flex";
        p.innerText = err.message;
        alertvalue.append(p);
        var counter = 5;
        var interval = setInterval(() => {
            counter--;
            if (counter > 0) {
                clearInterval(interval);
                alertvalue.style.display = "none";
                 p.innerText = ""
            }
        }, 1000)
    })



}










