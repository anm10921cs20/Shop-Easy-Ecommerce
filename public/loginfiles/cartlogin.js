const  loginpageContainer  = document.getElementsByClassName('loginpage-container')[0];
const openLogin = document.getElementsByClassName('fa-circle-user')[0];
const closeLogin = document.getElementsByClassName('close-login')[0];






// forget container

const forgetContainer = document.getElementsByClassName('forget-container')[0];
const forgetContainer1 = document.getElementsByClassName('forget-container')[1];

const forgetContainerOpen = document.getElementsByClassName
('forget-password')[0];
const loginContainer = document.getElementsByClassName('login-container')[0];
const loginContainer1 = document.getElementsByClassName('login-container')[1];

const registerContainer = document.getElementsByClassName('register-container')[0];
const registerContainer1 = document.getElementsByClassName('register-container')[1];

const alreadyLogin1 = document.getElementsByClassName('forget-container')[1];

// change content

const changeContent = document.querySelector('#changecontent')

// btn continue

const loginbtn = document.getElementsByClassName('loginbtn')[0];
const registerbtn = document.getElementsByClassName('registerbtn')[0];
const forgetbtn = document.getElementsByClassName('forgetbtn')[0];


forgetContainerOpen.addEventListener('click', () => {
    loginContainer.style.display = "none";
    loginContainer1.style.display = "none";
    forgetContainer.style.display = "block";
    forgetContainer1.style.display = "block";
    forgetbtn.style.display = "flex";
    loginbtn.style.display = 'none';
    changeContent.innerText = 'Forget Password';
})
alreadyLogin1.addEventListener('click', () => {
    loginContainer.style.display = "block";
    loginContainer1.style.display = "block";
    forgetContainer.style.display = "none";
    forgetContainer1.style.display = "none";
    loginbtn.style.display = 'flex';
    forgetbtn.style.display = 'none';

    changeContent.innerText = 'Login';
})



// register container
loginContainer1.addEventListener('click', () => {
    loginContainer.style.display = "none";
    loginContainer1.style.display = "none";
    registerContainer.style.display = "block";
    registerContainer1.style.display = "block";
     registerbtn.style.display = "flex";
    loginbtn.style.display = 'none';
    changeContent.innerText = 'New User Registeration';
})
registerContainer1.addEventListener('click', () => {
    loginContainer.style.display = "block";
    loginContainer1.style.display = "block";
    registerContainer.style.display = "none";
    registerContainer1.style.display = "none";
   registerbtn.style.display = "none";
    loginbtn.style.display = 'flex';
    changeContent.innerText = 'Login';
})


// show password
const show = document.getElementsByClassName('show')[0];


const password1 = document.getElementsByClassName('login-password')[0];

    show.addEventListener('click', function() {
    if(password1.type === "password")
    {
        password1.type = "text";
    }
    else
    {
        password1.type = "password";
    }
    
})

// show password2
const show1 = document.getElementsByClassName('show')[1];


const password2 = document.getElementsByClassName('register-password')[0];


    show1.addEventListener('click', function() {
    if(password2.type === "password")
    {
        password2.type = "text";
       
    }
    else
    {
        password2.type = "password";
        
    }
    
})

var p = document.createElement('p');
p.classList.add('para-alert');
loginbtn.addEventListener('click', () => {
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
        }
    }, 1000)
})

