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

const containercartBox = document.querySelector('.cart-content');
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

if (containercartBox.children.length <= 0) {
    containercartBox.innerHTML = emptydetails;


}
if (containercartBox1.children.length <= 0) {
    containercartBox1.innerHTML = emptydetails1;
}








// cart shopping data

var shopeasyLocal = localStorage.getItem('order');


var dataContainer = JSON.parse(shopeasyLocal);


window.onload = function() 
{
    var count = dataContainer.length;

localStorage.setItem('cart-count',count)
}



// container1
var price1 = dataContainer[0].price;
var productname1 = dataContainer[0].name;
var productbrand1 = dataContainer[0].brand;
var productimg1 = dataContainer[0].img;






const divprod1 = `<br>
 <div class="cart-item">
 <img src="${productimg1}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${productname1}</div>
                        <div class="price-box">
                            <div class="cart-price">${price1}</div>
                            
                        </div>
                        <span class="cart-qtyname">Oty</span><input type="number" value="1" class="cart-quantity">
                        <div class="product-brand">${productbrand1}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>
            </div>

`;


containercartBox.innerHTML = divprod1;


// container2
var price2 = dataContainer[1].price;
var productname2 = dataContainer[1].name;
var productbrand2 = dataContainer[1].brand;
var productimg2 = dataContainer[1].img;






const divprod2 = `<br>
 <div class="cart-item">
 <img src="${productimg2}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${productname2}</div>
                        <div class="price-box">
                            <div class="cart-price">${price2}</div>
                            
                        </div>
                        <span class="cart-qtyname">Oty</span><input type="number" value="1" class="cart-quantity">
                        <div class="product-brand">${productbrand2}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>
            </div>

`;


containercartBox.innerHTML += divprod2;


// container3
var price3 = dataContainer[2].price;
var productname3 = dataContainer[2].name;
var productbrand3 = dataContainer[2].brand;
var productimg3 = dataContainer[2].img;






const divprod3 = `<br>
 <div class="cart-item">
 <img src="${productimg3}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${productname3}</div>
                        <div class="price-box">
                            <div class="cart-price">${price3}</div>
                            
                        </div>
                        <span class="cart-qtyname">Oty</span><input type="number" value="1" class="cart-quantity">
                        <div class="product-brand">${productbrand3}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>
            </div>

`;


containercartBox.innerHTML += divprod3;


// container4
var price4 = dataContainer[3].price;
var productname4 = dataContainer[3].name;
var productbrand4 = dataContainer[3].brand;
var productimg4 = dataContainer[3].img;






const divprod4 = `<br>
 <div class="cart-item">
 <img src="${productimg4}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${productname4}</div>
                        <div class="price-box">
                            <div class="cart-price">${price4}</div>
                            
                        </div>
                        <span class="cart-qtyname">Oty</span><input type="number" value="1" class="cart-quantity">
                        <div class="product-brand">${productbrand4}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>
            </div>

`;


containercartBox.innerHTML += divprod4;











// cart reamove 



    var removeContainer = document.querySelectorAll('.cart-remove');
    
    removeContainer.forEach((btn, idx) => {
        btn.addEventListener('click', function() {
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











