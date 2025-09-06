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




const emptydetails = `
 <div class="cart-items">
                <i class="fas fa-shopping-basket"></i>
           <div class="text-show">Your Likes is Empty !</div> 
              <a href="../index.html"><button class="btn btn-primary">Explore Now</button></a>
            </div>
`;


const emptydetails1 = `
 <div class="cart-items">
               <i class="fa-solid fa-carrot"></i>
           <div class="text-show">Your Likes is Empty !</div> 
           <a href="../grocery/grocery.html"><button class="btn btn-primary">Explore Now</button></a>
            </div>
`;


window.addEventListener('DOMContentLoaded', () => {

    shopeasycart();
    grocerycart();

})





// shop easy cart function

function shopeasycart() {
    if (containercartBox.children.length <= 0) {
        containercartBox.innerHTML = emptydetails;
        return
    }
}

// grocery 

function grocerycart() {
    if (containercartBox1.children.length <= 0) {
        containercartBox1.innerHTML = emptydetails1;
        return
    }
}

// heart likes count

var counts = document.getElementById('cart-counts');
var heartstorage = localStorage.getItem('heart');
var countlikes = JSON.parse(heartstorage);
localStorage.setItem('heart-count', countlikes.length);
var heartcount = localStorage.getItem('heart-count');

counts.innerText = `(${heartcount})`;



// local storage details


var heartlocal = localStorage.getItem('heart');

var heartcontainers = JSON.parse(heartlocal);

heartcontainers.forEach((heartspack, idx) => {
    var heartdiv = document.createElement('div');
    heartdiv.classList.add('products-items');

    heartdiv.innerHTML = ` <a href="${heartspack.anchor}"><div class="content-container"><img class="product-img"
                                src="${heartspack.img}"
                                width="100px" height="120px" alt="sandoor"><br>
                        <div class="mobile-details-container">
                            <p class="mobile-brand-name">${heartspack.brand}</p>
                            <p class="mobile-name">${heartspack.name}</p>
                            <div class="star-review">
                                <ion-icon name="star-sharp" class="star-icon"></ion-icon><ion-icon name="star-sharp"
                                    class="star-icon"></ion-icon><ion-icon name="star-sharp"
                                    class="star-icon"></ion-icon><ion-icon name="star-sharp"
                                    class="star-icon"></ion-icon><ion-icon name="star-half-sharp"
                                    class="star-icon"></ion-icon>
                                <p>4.4</p>
                            </div>
                           <p class="rate-container"><span class="rate">${heartspack.price}</span><del
                                    class="rate-del">${heartspack.delprice}</del> <span class="percentage">${heartspack.percent}</span></p>
                     <div class="bank-offers">
                                <img src="https://rukminim2.flixcart.com/www/100/42/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90"
                                    height="16px" width="38px" alt="">
                                <p class="bank-details">${heartspack.bank}</p>
                            </div>
                            <div class="bank-returns">
                                <img src="https://rukminim2.flixcart.com/www/173/47/promos/09/02/2024/0b0b6063-507e-45e7-b8b0-f22a591bb06b.png?q=90"
                                    height="18px" width="66px" alt="">
                                <p class="bank-returns-topic"> 2 day delivery, </p>
                            </div>
                            <p class="waranty">${heartspack.warrantybrand}</p><br>


                        </div>
                          <ion-icon name="trash" class="cart-remove"></ion-icon>
                        </div></a>`;


    containercartBox.appendChild(heartdiv);
});


// cart reamove 



var removeContainer = document.querySelectorAll('.cart-remove');

removeContainer.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
    })
    btn.addEventListener('click', function () {
        // Remove the cart item from DOM
        this.parentElement.remove();
        var alertvalue = document.getElementById('alertcontainer');
        alertvalue.style.display = "flex"
        var counter = 8;
        var interval = setInterval(() => {
            counter--;
            if (counter > 0) {
                clearInterval(interval);
                alertvalue.style.display = "none";
            }
        }, 1000)
        



        // Remove the item from dataContainer array
        if (heartcontainers && heartcontainers.length > idx) {
            heartcontainers.splice(idx, 1); // Removes 1 element at index idx
        }
        localStorage.setItem("heart", JSON.stringify(heartcontainers));

        // If cart is empty, clear localStorage and show empty message
        if (heartcontainers.length === 0) {
            window.location.reload();
            localStorage.removeItem("heart");
            containercartBox.innerHTML = emptydetails;
        }
    });
});
