var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
})

// animate the btn

const liBtn1 = document.querySelector('.li1');
const liBtn2 = document.querySelector('.li2');
const animate = document.getElementsByClassName('animate')[0];
const shopeasy = document.getElementsByClassName('shopeasy')[0];
const grocery = document.getElementsByClassName('grocery')[0];


liBtn1.addEventListener('click', () => {
    animate.style.left = "30px"
    liBtn1.style.color = "var(--bs-primary)";
    liBtn2.style.color = "#000";
    shopeasy.style.display = "block";
    grocery.style.display = "none";


})
liBtn2.addEventListener('click', () => {
    animate.style.left = "240px";
    liBtn1.style.color = "#000";
    liBtn2.style.color = "var(--bs-primary)";
    shopeasy.style.display = "none";
    grocery.style.display = "block";



})

// details about cart-box

const containercartBox = document.querySelector('.cart-content0');
const containercartBox1 = document.querySelector('.cart-content1');

console.log(containercartBox.children.length);



const emptydetails = `
 <div class="cart-items">
                <i class="fas fa-shopping-basket"></i>
           <div class="text-show">Your Cart is Empty !</div> 
              <a href="../index.html"><button class="btn btn-primary">Shop Now</button></a>
            </div>
`;


const emptydetails1 = `
 <div class="cart-items">
               <i class="fa-solid fa-carrot"></i>
           <div class="text-show">Your Basket is Empty !</div> 
           <a href="../grocery/grocery.html"><button class="btn btn-primary">Shop Now</button></a>
            </div>
`;

window.addEventListener('DOMContentLoaded',() =>  {
    if (containercartBox.children.length <= 0) {
        containercartBox.innerHTML = emptydetails;


    }
    if (containercartBox1.children.length <= 0) {
        containercartBox1.innerHTML = emptydetails1;
    }









})

window.addEventListener('load', () => {
    var count = dataContainer.length;

    localStorage.setItem('cart-count', count)
})










// cart shopping data

var shopeasyLocal = localStorage.getItem('order');


var dataContainer = JSON.parse(shopeasyLocal) || [];





dataContainer.forEach((items, index) => {

    var cartdivs = document.createElement('div');
    cartdivs.classList.add('cart-item');
    cartdivs.innerHTML = ` <img src="${items.img}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${items.name}</div>
                        <div class="price-box">
                            <div class="cart-price">${items.price}</div>
                            <div class="cart-amt">0</div>  
                        </div>
                        <span class="cart-qtyname">Oty</span><i class="fa-solid fa-minus"></i><input type="number" value="1" class="cart-quantity"><i class="fa-solid fa-plus"></i>
                        <div class="product-brand">${items.brand}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>`;



    containercartBox.appendChild(cartdivs);






})


function totalvalue()
{
    
    var cartboxes = containercartBox.getElementsByClassName('cart-item');
    var total = 0;
    var pricecart = 0;
    for(var i = 0; i < cartboxes.length; i++)
    {
        var cartbox = cartboxes[i];
        var priceElement = cartbox.getElementsByClassName('cart-price')[0];
        var pricecartElement = cartbox.getElementsByClassName('cart-amt')[0];
        var quantityElement = cartbox.getElementsByClassName('cart-quantity')[0];
        
        
        var price = parseFloat(priceElement.innerText.replace("Rs.", ""));
        var quantity = quantityElement.value;
        var pricecart = price * quantity;
        

        pricecartElement.innerText = "Rs." + pricecart;
        total = total + price * quantity; 
        total = Math.round(total * 100) / 100;
    }
    document.getElementsByClassName('total')[0].innerText = "Rs. " + total; 
}
totalvalue()


// container1



var qty =  document.querySelectorAll('.cart-quantity');
qty.forEach((qtys) => {
    qtys.addEventListener('change', qtyupdate);


})



function qtyupdate()
{
    if(isNaN(this.value)||this.value < 1)
    {
        this.value = 1;
    }
}

qty.forEach((qtys) => {
    qtys.addEventListener('change', function () {
        qtyupdate.call(this);
        totalvalue();


      
    });
});





  
        


        const minusBtns = document.querySelectorAll('.fa-minus');
        const plusBtns = document.querySelectorAll('.fa-plus');
        const qtyInputs = document.querySelectorAll('.cart-quantity');

    //    increment

    plusBtns.forEach((plus, id) => {
        plus.addEventListener('click',function() {
            qtyInputs[id].value = parseInt(qtyInputs[id].value) + 1;
            totalvalue();
        })
    })

    // decrement

    minusBtns.forEach((minus, id) => {
        minus.addEventListener('click',function()
    {
        var minusvalue = parseInt(qtyInputs[id].value)
        if(minusvalue > 1)
        {
            qtyInputs[id].value = minusvalue-1;
            totalvalue();
        }
    })
        
    })





    





// cart reamove 



var removeContainer = document.querySelectorAll('.cart-remove');

removeContainer.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        // Remove the cart item from DOM
        this.parentElement.remove();
        totalvalue()

        // Remove the item from dataContainer array
        if (dataContainer && dataContainer.length > idx) {
            dataContainer.splice(idx, 1); // Removes 1 element at index idx
        }
        localStorage.setItem("order", JSON.stringify(dataContainer));

        // If cart is empty, clear localStorage and show empty message
        if (dataContainer.length === 0) {
            localStorage.removeItem("order");
            containercartBox.innerHTML = emptydetails;
        }
    });
});















