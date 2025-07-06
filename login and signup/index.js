//login page

const emailBtn = document.getElementById('email');
const phoneBtn = document.getElementById('mobile');
const loginBtn = document.getElementById('login');

const registerForm = document.getElementsByClassName('register-container')[0];
const loginForm = document.getElementsByClassName('login-container')[0];
const phoneForm = document.getElementsByClassName('phone-container')[0];
const otpForm = document.getElementsByClassName('otp-container')[0];



emailBtn.addEventListener('click', () => {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
})
loginBtn.addEventListener('click', () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
})
// phoneBtn.addEventListener('click',()=>
// {
//     loginForm.style.display = "none";
//     phoneForm.style.display = "block";
// })


//contact container

const emaillogbtn = document.getElementById('logincontact');
emaillogbtn.addEventListener('click', () => {
    loginForm.style.display = "block";
    phoneForm.style.display = "none";
})

//otp container

// const phonebtn = document.getElementById('phone-btn');
// phonebtn.addEventListener('click',()=>
// {
//     phoneForm.style.display="none";
//     otpForm.style.display = "block";

// })

// const otpbtn = document.getElementById('otpbtn');

// otpbtn.addEventListener('click',()=>
// {
//     otpForm.style.display = "none";
//     phoneForm.style.display = "block";
// })



const forgetcontainer = document.getElementById('forget-container');
const forgetBtn = document.getElementById('forget');

forgetBtn.addEventListener('click', () => {
    forgetcontainer.style.display = "block";
    loginForm.style.display = "none";
})





