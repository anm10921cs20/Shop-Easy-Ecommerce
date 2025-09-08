var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
})


const addressaddBtn = document.getElementById('address-fill');
const addressaddContainer = document.getElementsByClassName('address-content')[0];
const maincontainer = document.getElementsByClassName('containers1')[0];

addressaddBtn.addEventListener('click', () => {
    addressaddContainer.style.display = "block";
    maincontainer.style.display = "none";
})

var openBtn1 = document.getElementById('app-arrow1');

//event listener nav open
openBtn1.addEventListener('click', () => {
    addressaddContainer.style.display = "none";
    maincontainer.style.display = "block";
})