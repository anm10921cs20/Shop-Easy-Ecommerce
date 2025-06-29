//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})

//event listener nav close





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






