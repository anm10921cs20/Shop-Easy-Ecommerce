
const firebaseConfig = {
    apiKey: "AIzaSyA2OdKypmjrY-X7XKId64MndF4HtIRe-bs",
    authDomain: "shopeasy-login.firebaseapp.com",
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
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);


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





    auth.signInWithEmailAndPassword(loginemail, loginpassword).then(() => {
        const user = auth.currentUser;
        useruid(user.uid);


        const loginpagecontainer = document.getElementsByClassName('loginpage-container')[0];
        console.log(loginpagecontainer);

        loginpagecontainer.style.display = "none";

        const ids = localStorage.getItem('userid');
        console.log(ids);

        const docRef = firesttore.collection('users').doc(ids)
        docRef.get().then(doc => {
            if (doc.exists) {
                const username = doc.data().username;
                localStorage.setItem('names', username);












            } else {
                console.log(`No such Document`)
            }
        }).catch(err => {
            console.log(`Error getting document : ${err}`)
        })


    })












}


const datalogin = document.getElementsByClassName('app-login')[0];





function signOut() {
    auth.signOut().then(() => {
        window.localStorage.removeItem('userid');
        window.localStorage.removeItem('names');
        window.location.reload();

    })
        .catch(() => {
            console.log('error while signout')
        })
}





auth.onAuthStateChanged((user) => {
    if (user) {

        const nameid = localStorage.getItem('names');
        document.getElementById('login-name').innerText = nameid;
        console.log("👋 Already logged in:", user.email);



        // signout
        const unlist = document.getElementsByClassName('nav-bar-body_nav-menu')[0];
        const li = document.createElement('li');
        li.classList.add('nav-menu_items');
        li.innerHTML = `<a href="#"><i class="fa-solid fa-user"></i> Logout</a>`;
        unlist.append(li);
        const logout = document.getElementsByClassName('nav-menu_items')[11];
        logout.addEventListener('click', () => {
            signOut();
        })

        // login non


        // login container hidden

        const loginpagecontainer4 = document.getElementsByClassName('loginpage-container')[0];
        console.log(loginpagecontainer4);
        loginpagecontainer4.style.display = "none";


        // login image hidden

        const loginimg = document.getElementsByClassName('app-login')[0];
        
       loginimg.onclick = function()
       {
        window.location.replace('./insidecart/insidecart.html')
       }


    } else {
        console.log("🟡 Not logged in");
        const loginpagecontainer = document.getElementsByClassName('loginpage-container')[0];
        loginpagecontainer.style, display = "block";


         // login image open

        const loginimg = document.getElementsByClassName('app-login')[0];
     
       

    }
});


