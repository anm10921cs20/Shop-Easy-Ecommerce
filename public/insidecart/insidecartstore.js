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










// cart shopping data

var shopeasyLocal = localStorage.getItem('order');


var dataContainer = JSON.parse(shopeasyLocal) || [];


window.onload = function () {
    var count = dataContainer.length;

    localStorage.setItem('cart-count', count)
}


dataContainer.forEach((items, index) => {

    var cartdivs = document.createElement('div');
    cartdivs.classList.add('cart-item');
    cartdivs.innerHTML = ` <img src="${items.img}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${items.name}</div>
                        <div class="price-box">
                            <div class="cart-price">${items.price}</div>
                             
                            
                        </div>
                        <span class="cart-qtyname">Oty</span><input type="number" value="1" class="cart-quantity">
                        <div class="product-brand">${items.brand}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>`;



    containercartBox.appendChild(cartdivs);




})



// container1




















// cart reamove 



var removeContainer = document.querySelectorAll('.cart-remove');

removeContainer.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        // Remove the cart item from DOM
        this.parentElement.remove();

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











