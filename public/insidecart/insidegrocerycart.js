window.addEventListener('DOMContentLoaded', () => {

    grocerycart();

})


const groceryContainer = document.getElementsByClassName('grocery')[0];


function grocerycart() {
    if (containercartBox1.children.length <= 0) {
        containercartBox1.innerHTML = emptydetails1;
        return
    }else
    {
        const totalpalceorder = document.getElementsByClassName('totalvalue')[1];
        totalpalceorder.style.display = "block";

        const productsdetails = document.createElement('div');
        productsdetails.classList.add('productsamt');
        groceryContainer.append(productsdetails);
        const br = document.createElement('br');
        groceryContainer.append(br)
        groceryContainer.append(br)



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
            <p class="pricetotal1">Rs.50</p>

        </div>
        
        <div class="details-price common too-low" id="tolow1">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.50</p>
        </div>
         <div class="details-price common low" id="low1">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.100</p>
        </div>
         <div class="details-price common average" id="average1">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.500</p>
        </div>
         <div class="details-price common medium" id="medium1">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.1000</p>
        </div>
         <div class="details-price common high" id="high1">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.2000</p>
        </div>
         <div class="details-price common too-high" id="too-high1">
            <p class="price">Coupons For You</p>
            <p class="pricetotal1 text-success">Rs.3000</p>
        </div>
         <div class="details-price common higly" id="highly1">
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
        groceryContainer.append(productsdetails);

        update1()

         const tooLowDiscount = document.getElementById('tolow1');




        const lowDiscount = document.getElementById('low1');
        const averageDiscount = document.getElementById('average1');
        const mediumDiscount = document.getElementById('medium1');
        const highDiscount = document.getElementById('high1');
        const toohighDiscount = document.getElementById('too-high1');
        const highlyDiscount = document.getElementById('highly1');
        var corner = document.querySelectorAll('.common');

        if (parseInt(totalamt1 + 50) < 500) {
              tooLowDiscount.style.display = "flex";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
            parseInt(totalamt1+ 99) - 50;
            return;
           
        }
        else if (parseInt(totalamt1 + 50) < 1000) {
            tooLowDiscount.style.display = "none";
             lowDiscount.style.display = "flex";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt1+ 99) - 100;
            return;

        }
         else if (parseInt(totalamt1 + 50) < 5000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
             averageDiscount.style.display = "flex";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt1+ 99) - 500;
            return;

        }
         else if (parseInt(totalamt1 + 50) < 10000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
             mediumDiscount.style.display = "flex";
            highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt1+ 99) - 1000;
            return;

        }
         else if (parseInt(totalamt1 + 50) < 15000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
            highDiscount.style.display = "flex";
            toohighDiscount.style.display = "none";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt1+ 99) - 2000;
            return;
        }
          else if (parseInt(totalamt1 + 50) < 50000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
             highDiscount.style.display = "none";
            toohighDiscount.style.display = "flex";
            highlyDiscount.style.display = "none";
             var pricedecrease =   parseInt(totalamt1- 3099);
             console.log(pricedecrease);
             
               
            return;
        }
        else if (parseInt(totalamt1 + 50) < 1000000000) {
            tooLowDiscount.style.display = "none";
            lowDiscount.style.display = "none";
            averageDiscount.style.display = "none";
            mediumDiscount.style.display = "none";
             highDiscount.style.display = "none";
            toohighDiscount.style.display = "none";
              highlyDiscount.style.display = "flex";
               var pricedecrease =   parseInt(totalamt1+ 99);
               pricedecrease-4000;
           
            return;
        }
        
    }
   
}


// grocery shopping data recived

var groceryStorage = localStorage.getItem('groceryorder');

var groceryStorageContainer = JSON.parse(groceryStorage) || [];




groceryStorageContainer.forEach((values, id) => {

    var cartdivgrocery = document.createElement('div');
    cartdivgrocery.classList.add('cart-item');
    cartdivgrocery.innerHTML = ` <img src="${values.img}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${values.name}</div>
                        <div class="price-box">
                            <div class="cart-price">${values.price}</div>
                            <div class="cart-amt">0</div>  
                        </div>
                        <span class="cart-qtyname">Oty</span><i class="fa-solid fa-minus"></i><input type="number" value="1" class="cart-quantity"><i class="fa-solid fa-plus"></i>
                        <div class="product-brand">${values.brand}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove removegrocery"></ion-icon>`;

    containercartBox1.append(cartdivgrocery);

})

// products count and items count localstorage

var grocerycounts = groceryStorageContainer.length;

var cartgrocerycounts = document.getElementById('cart-counts1');

cartgrocerycounts.innerText = `(${grocerycounts})`;


function totalvaluegrocery() {

    var cartboxes = containercartBox1.getElementsByClassName('cart-item');
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
    totalamt1 = total + 50;
    document.getElementsByClassName('total')[1].innerText = "Rs. " + (totalamt1 < 500 ? totalamt1 - 50 :  totalamt1-50 && totalamt1 < 1000 ? totalamt1 - 100 :  totalamt1 -100 && totalamt1 < 5000 ?  totalamt1 -500 : totalamt1 - 500  && totalamt1 < 10000 ?  totalamt1 -1000 : totalamt1 - 1000  && totalamt1 < 15000 ?  totalamt1 -2000 : totalamt1 - 2000  && totalamt1 < 50000 ?  totalamt1 -3000 : totalamt1 - 3000  && totalamt1 <1000000000 ?  totalamt1 -4000 : totalamt1 -4000);







}
totalvaluegrocery()



// delete container cart box for grocery

var removeContainer1 = document.querySelectorAll(".removegrocery");

removeContainer1.forEach((btns, idx) => {
    btns.addEventListener('click', function() {
        this.parentElement.remove()
       window.location.reload;
        totalvaluegrocery()
        update1()
        if(groceryStorageContainer && groceryStorageContainer.length > idx)
        {
            groceryStorageContainer.splice(idx, 1);
        }
        localStorage.setItem('groceryorder',JSON.stringify(groceryStorageContainer));

        if(groceryStorageContainer.length === 0)
        {
            localStorage.removeItem('groceryorder');
            containercartBox1.innerHTML = emptydetails1;
            window.location.reload();
        }



    })
} )


var qty1 = containercartBox1.querySelectorAll('.cart-quantity');
qty1.forEach((qty1s) => {
    qty1s.addEventListener('change',qtyupdate1);
})

function qtyupdate1()
{
    if(isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
}

qty1.forEach((qty1ss) => {
    qty1ss.addEventListener('change', function () {
        qtyupdate1.call(this);
        totalvaluegrocery();
    })
})

const minusBtns1 = document.querySelectorAll('.fa-minus');
const plusBtns1 = document.querySelectorAll('.fa-plus');
const qtyInputs1 = document.querySelectorAll('.cart-quantity');

// increment

plusBtns1.forEach((plus1, id) => {
    plus1.addEventListener('click', function () {
        qtyInputs1[id].value = parseInt(qtyInputs1[id].value) + 1;
        totalvaluegrocery();
        update1()
    })
})

// decrement

minusBtns1.forEach((minus1, id) => {
    minus1.addEventListener('click', function (){
        var minus1 = parseInt(qtyInputs1[id].value);
        if(minus1 > 1)
        {
            qtyInputs1[id].value = minus1 -1;
            totalvaluegrocery();
            update1()
        }
    })
})






function update1() {


      const pricediscount = document.querySelectorAll('.pricetotal1');

        pricediscount.forEach((btns) => {
            let btnValue = btns.innerText;
            
        })
 var totalprice1 = (totalamt1-50);
    totalvaluegrocery.call(this)
   
    
    document.getElementsByClassName('pricetotal')[1].innerText = "Rs." + totalprice1;
    document.getElementsByClassName('pricetotal2')[1].innerText = "Rs." + (totalamt1 < 500 ? totalamt1 - 50 :  totalamt1 -50 && totalamt1 < 1000 ? totalamt1 - 100 :  totalamt1 -100 && totalamt1 < 5000 ?  totalamt1 -500 : totalamt1 - 500  && totalamt1 < 10000 ?  totalamt1 -1000 : totalamt1 - 1000  && totalamt1 < 15000 ?  totalamt1 -2000 : totalamt1 - 2000  && totalamt1 < 50000 ?  totalamt1 -3000 : totalamt1 - 3000  && totalamt1 <100000 ?  totalamt1 -4000 : totalamt1 -4000);

    const detailsContainer1 = document.getElementsByClassName('details-container')[1];
    const chevronDown1 = document.getElementsByClassName('fa-chevron-down')[1];
    const priceDetails1 = document.getElementsByClassName('pricedetails')[1];

    priceDetails1.addEventListener('click', () => {
        detailsContainer1.classList.toggle('details-container-active')
        chevronDown1.classList.toggle('fa-chevron-down-active');
    })
    var qtyss = document.getElementsByClassName('qty')[1];
    qtyss.innerText = `${grocerycounts} item`;






}






