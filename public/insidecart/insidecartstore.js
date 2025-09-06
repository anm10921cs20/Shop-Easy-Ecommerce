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

var total = 0;

// details about cart-box

const containercartBox = document.querySelector('.cart-content0');
const containercartBox1 = document.querySelector('.cart-content1');




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

window.addEventListener('DOMContentLoaded', () => {

    shopeasycart(); 

})






// shopeasy cart

function shopeasycart()
{
 if (containercartBox.children.length <= 0) {
        containercartBox.innerHTML = emptydetails;
        return


    } else {
        const productsdetails = document.createElement('div');
        productsdetails.classList.add('productsamt');
        shopeasy.append(productsdetails);
        const br = document.createElement('br');
        shopeasy.append(br)
        shopeasy.append(br)



        const productsvalue = `
    <div class="pricedetails">
        <h4 class="pricedetails-tit">Price Details</h4>
        <i class="fas fa-chevron-down"></i>
    </div><br>
    <div class="details-container">
        <div class="details-price">
            <p class="price">Price(<span class="qty"></span>)</p>
            <p class="pricetotal"></p>

        </div>
        <div class="details-price">
            <p class="price">Protect Promise Fee</p>
            <p class="pricetotal1">Rs.99</p>

        </div>
        
        <div class="details-price common too-low" id="tolow">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.50</p>
        </div>
         <div class="details-price common low" id="low">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.100</p>
        </div>
         <div class="details-price common average" id="average">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.500</p>
        </div>
         <div class="details-price common medium" id="medium">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.1000</p>
        </div>
         <div class="details-price common high" id="high">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.2000</p>
        </div>
         <div class="details-price common too-high" id="too-high">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.3000</p>
        </div>
         <div class="details-price common higly" id="highly">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.4000</p>
        </div>
    </div>
     <div class="details-price text-primary">
            <p class="price">Total Amount</p>
            <p class="pricetotal2">${pricedecrease}</p>

        </div>
        

        

    `;
        const productss = document.createElement('div');
        productss.classList.add('details-price-active')
        productss.innerHTML = productsvalue;
        productsdetails.append(productss);
        shopeasy.append(productsdetails);

        update();
        
        const btnplace = document.getElementsByClassName('totalvalue')[0];
        btnplace.style.display = "block";




      

        const tooLowDiscount = document.getElementById('tolow');
       



        const lowDiscount = document.getElementById('low');
        const averageDiscount = document.getElementById('average');
        const mediumDiscount = document.getElementById('medium');
        const highDiscount = document.getElementById('high');
        const toohighDiscount = document.getElementById('too-high');
        const highlyDiscount = document.getElementById('highly');
        var corner = document.querySelectorAll('.common');

        if (parseInt(totalamt + 99) < 500) {
              tooLowDiscount.style.display = "flex";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
            parseInt(totalamt+ 99) - 50;
            return;
           
        }
        else if (parseInt(totalamt + 99) < 1000) {
            tooLowDiscount.style.display = "none";
             lowDiscount.style.display = "flex";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt+ 99) - 100;
            return;

        }
         else if (parseInt(totalamt + 99) < 5000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
             averageDiscount.style.display = "flex";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt+ 99) - 500;
            return;

        }
         else if (parseInt(totalamt + 99) < 10000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
             mediumDiscount.style.display = "flex";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt+ 99) - 1000;
            return;

        }
         else if (parseInt(totalamt + 99) < 15000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "flex";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt+ 99) - 2000;
            return;
        }
          else if (parseInt(totalamt + 99) < 50000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
             highDiscount.style.display = "none";
            toohighDiscount.style.display = "flex";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt- 3099);
             console.log(pricedecrease);
             
               
            return;
        }
        else if (parseInt(totalamt + 99) < 1000000000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
             highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
              highlyDiscount.style.display = "flex";
               var pricedecrease =   parseInt(totalamt+ 99);
               pricedecrease-4000;
           
            return;
        }





    }
}


// grocery 








// cart shopping data

var shopeasyLocal = localStorage.getItem('shoporder');


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
                        <span class="cart-qtyname">Oty</span><i class="fa-solid fa-minus" id="minus"></i><input type="number" value="1" class="cart-quantity" id="cart-quantity"><i class="fa-solid fa-plus" id="plus"></i>
                        <div class="product-brand">${items.brand}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove removeshopeasy"></ion-icon>`;



    containercartBox.appendChild(cartdivs);







})


  var count = dataContainer.length;



var counts = document.getElementById('cart-counts');
var countvalue = count;
counts.innerText = `(${countvalue})`;






function totalvalue() {

    var cartboxes = containercartBox.getElementsByClassName('cart-item');
    var total = 0;
    var pricecart = 0;
    for (var i = 0; i < cartboxes.length; i++) {
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
    totalamt = total + 99;
    document.getElementsByClassName('total')[0].innerText = "Rs. " + (totalamt < 500 ? totalamt - 50 :  totalamt -50 && totalamt < 1000 ? totalamt - 100 :  totalamt -100 && totalamt < 5000 ?  totalamt -500 : totalamt - 500  && totalamt < 10000 ?  totalamt -1000 : totalamt - 1000  && totalamt < 15000 ?  totalamt -2000 : totalamt - 2000  && totalamt < 50000 ?  totalamt -3000 : totalamt - 3000  && totalamt <1000000000 ?  totalamt -4000 : totalamt -4000);







}
totalvalue()


// container1



var qty = document.querySelectorAll('.cart-quantity');
qty.forEach((qtys) => {
    qtys.addEventListener('change', qtyupdate);


})



function qtyupdate() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
}

qty.forEach((qtys) => {
    qtys.addEventListener('change', function () {
        qtyupdate.call(this);
        totalvalue();



    });
});















function update() {


      const pricediscount = document.querySelectorAll('.pricetotal1');

        pricediscount.forEach((btns) => {
            let btnValue = btns.innerText;
            
        })
 var totalprice = (totalamt-99);
    totalvalue.call(this)
   
   

    document.getElementsByClassName('pricetotal')[0].innerText = "Rs." + totalprice;
    document.getElementsByClassName('pricetotal2')[0].innerText = "Rs." + (totalamt < 500 ? totalamt - 50 :  totalamt -50 && totalamt < 1000 ? totalamt - 100 :  totalamt -100 && totalamt < 5000 ?  totalamt -500 : totalamt - 500  && totalamt < 10000 ?  totalamt -1000 : totalamt - 1000  && totalamt < 15000 ?  totalamt -2000 : totalamt - 2000  && totalamt < 50000 ?  totalamt -3000 : totalamt - 3000  && totalamt <100000 ?  totalamt -4000 : totalamt -4000);

    const detailsContainer = document.getElementsByClassName('details-container')[0];
    const chevronDown = document.getElementsByClassName('fa-chevron-down')[0];
    const priceDetails = document.getElementsByClassName('pricedetails')[0];

    priceDetails.addEventListener('click', () => {
        detailsContainer.classList.toggle('details-container-active')
        chevronDown.classList.toggle('fa-chevron-down-active');
    })
    var qtyss = document.getElementsByClassName('qty')[0];
    qtyss.innerText = `${countvalue} item`;






}












// cart reamove 



var removeContainer = document.querySelectorAll('.removeshopeasy');

removeContainer.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        // Remove the cart item from DOM
        this.parentElement.remove();
          window.location.reload();
        totalvalue()
        update()

        // Remove the item from dataContainer array
        if (dataContainer && dataContainer.length > idx) {
            dataContainer.splice(idx, 1); // Removes 1 element at index idx
        }
        localStorage.setItem("shoporder", JSON.stringify(dataContainer));

        // If cart is empty, clear localStorage and show empty message
        if (dataContainer.length === 0) {
            localStorage.removeItem("shoporder");
            containercartBox.innerHTML = emptydetails;
            window.location.reload();
        }
    });
});
















