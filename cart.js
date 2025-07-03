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



window.addEventListener('DOMContentLoaded',loaditems)

function loaditems()
{
    loadcontent()
}


//delete cart items

function loadcontent()
{
    //remove cart items

    var deleteBtn = document.querySelectorAll('.cart-remove');
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click',cartitemsDelete);
        
    });

    var quantityitems = document.querySelectorAll('.cart-quantity');
    quantityitems.forEach((input)=>{
    input.addEventListener('change',qtyvalue)
    })
}





//fucntion of cart delete

function cartitemsDelete()
{
    this.parentElement.remove();
    proudctcount()
}

//funciton qty vallue

function qtyvalue()
{
    if(isNaN(this.value)|| this.value<1)
    {
        this.value = 1;
    }
}



//function proudct count

function proudctcount()
{
    var cartcount = document.getElementById('cart-count');
    var cartvalue =  document.querySelector('.cart-content');
    var cartvalues = cartvalue.children.length;
    cartcount.innerText = cartvalues;
    
    
}
proudctcount()



