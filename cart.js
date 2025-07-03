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
    totalvalueupdate()
}

//funciton qty vallue

function qtyvalue()
{
    if(isNaN(this.value)|| this.value<1)
    {
        this.value = 1;
    }
    totalvalueupdate()
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



//total update


function totalvalueupdate()
{
    var cart = document.getElementsByClassName('cart-content')[0];
    var cartboxes = cart.getElementsByClassName('cart-item');
    var total  =0;
    var pricecart = 0;
    for(var i = 0; i < cartboxes.length; i++)
    {
        var cartbox = cartboxes[i];
        var priceElement = cartbox.getElementsByClassName('cart-price')[0];
        var pricecartElement = cartbox.getElementsByClassName('cart-amt')[0];
        var quantityElement = cartbox.getElementsByClassName('cart-quantity')[0];

        var price = parseFloat(priceElement.innerText.replace("Rs.", ""));
        var quantity = quantityElement.value;
        console.log(quantity);
        
        var pricecart = price * quantity;
        pricecartElement.innerText ="Rs."+ pricecart;

        total = total + price * quantity;

        total = Math.round(total*100)/100;
        
    }
    document.getElementsByClassName('cart-total')[0].innerText ="Rs." + total;
}
totalvalueupdate()
