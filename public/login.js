const  loginpageContainer  = document.getElementsByClassName('loginpage-container')[0];
const openLogin = document.getElementsByClassName('fa-circle-user')[0];
const closeLogin = document.getElementsByClassName('close-login')[0];

openLogin.addEventListener('click', () => {
    loginpageContainer.classList.add('loginpage-container-active');
});

closeLogin.addEventListener('click', () => {
    loginpageContainer.classList.remove('loginpage-container-active');
});


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

const btnSubmit = document.getElementsByClassName('btn-continue')[0];

forgetContainerOpen.addEventListener('click', () => {
    loginContainer.style.display = "none";
    loginContainer1.style.display = "none";
    forgetContainer.style.display = "block";
    forgetContainer1.style.display = "block";
    btnSubmit.innerText = 'Send';
    changeContent.innerText = 'Forget Password';
})
alreadyLogin1.addEventListener('click', () => {
    loginContainer.style.display = "block";
    loginContainer1.style.display = "block";
    forgetContainer.style.display = "none";
    forgetContainer1.style.display = "none";
    btnSubmit.innerText = 'Login';
    changeContent.innerText = 'Login';
})



// register container
loginContainer1.addEventListener('click', () => {
    loginContainer.style.display = "none";
    loginContainer1.style.display = "none";
    registerContainer.style.display = "block";
    registerContainer1.style.display = "block";
    btnSubmit.innerText = 'Register';
    changeContent.innerText = 'New User Registeration';
})
registerContainer1.addEventListener('click', () => {
    loginContainer.style.display = "block";
    loginContainer1.style.display = "block";
    registerContainer.style.display = "none";
    registerContainer1.style.display = "none";
    btnSubmit.innerText = 'Login';
    changeContent.innerText = 'Login';
})