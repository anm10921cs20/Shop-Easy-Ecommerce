//app nav bars container
//display change method

//display function event

var openBar = document.getElementById('app-nav-bars');
var openBtn = document.getElementById('app-bars');

//event listener nav open
openBtn.addEventListener('click', () => {
    openBar.style.marginLeft = "0px";
    document.body.style.opacity = "0.9";
})

//event listener nav close

var closeBtn = document.getElementById('nav-close');
closeBtn.addEventListener('click', () =>
{
    openBar.style.marginLeft = "-1000px";
    openBar.style.transitionDuration = "0.9s";
})



const btnCartOpen = document.querySelector('.app-order-icon');
const cart = document.querySelector('.cart');
const btnCartClose = document.querySelector('#cart-close');

btnCartOpen.addEventListener('click',()=>
{
    cart.classList.add('cart-active');
})
btnCartClose.addEventListener('click',()=>
{
    cart.classList.remove('cart-active');
})






