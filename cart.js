//cart

const btnCartOpen = document.querySelector('.app-order-icon');
const cart = document.querySelector('.cart');
const btnCartClose = document.querySelector('#cart-close');

console.log(btnCartOpen)

btnCartOpen.addEventListener('click',()=>
{
    cart.classList.add('cart-active');
})
btnCartClose.addEventListener('click',()=>
{
    cart.classList.remove('cart-active');
})


