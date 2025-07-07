const auth = firebase.auth();
const db =firebase.firestore();
const database = firebase.database();




var logincontainer = document.getElementById('login-container');
var registercontainer = document.getElementById('register-container')


//buttons

var regBtn = document.getElementById('submitregister');





const userDetails = currentUser =>{
    console.log(JSON.stringify(currentUser));
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

    }catch(err){
        logincontainer.style.display = "block";
    }
}

regBtn.addEventListener('click',(event) =>
{
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('register-email').value;
    const password  = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    auth.createUserWithEmailAndPassword(email,password).then(userCredential => {
        alert('Account Created Successfully')
    }).then(()=>
    {
        db.collection('users').doc(userCredential.user.uid).set({
            userName : username,
            email:email
        })
    }).then(()=>{
        registercontainer.style.display  = "none";
        logincontainer.style.display = "block";
    }).catch((err)=>{
        alert(err);
    }).then(()=>{
        
    })
})