//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})

//event listener nav close


//special btns added

document.addEventListener('DOMContentLoaded', loadcontent)



function loadcontent()
{
    const button = document.querySelectorAll('.btn-main');
    button.forEach((btn) => {
        btn.addEventListener('click',selected);
    })

    // heart btn

    const hearts = document.querySelectorAll('.buttons');
    hearts.forEach((heart) => {
        heart.addEventListener('click',heartactive)
        heart.addEventListener('click', (e) => {
            e.preventDefault();
        })
    })






}



//content remove
function selected()
{
    this.classList.toggle('btn-main-active');

    
}


//heart btn added and remove

function heartactive()
{
    this.classList.toggle('buttons-active');
}


//








//btn selected

const btn5G = document.getElementsByClassName('btn-main')[0];
const btnlaunched = document.getElementsByClassName('btn-main')[1];


//main container

const firstcontainer = document.getElementsByClassName('all')[0];
const secondcontainer = document.getElementsByClassName('g5')[0];
const thirdcontainer = document.getElementsByClassName('launch')[0];


btn5G.addEventListener('click', () => {
    firstcontainer.classList.toggle('all-active');
    thirdcontainer.classList.add('launch');
    secondcontainer.classList.toggle('g5-active');
})

btnlaunched.addEventListener('click', () => {
    firstcontainer.classList.toggle('all-active');
    secondcontainer.classList.add('g5');
    thirdcontainer.classList.toggle('launch-active');

})

window.onload = function()
{
    const cartcount = localStorage.getItem('cart-count')
    const cartbox  = document.getElementById('cart-counts');
}

