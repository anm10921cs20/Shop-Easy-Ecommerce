






//cart

const btnCartOpen = document.querySelector('.app-order-icon');
const cart = document.querySelector('.cart');
const btnCartClose = document.querySelector('#cart-close');



btnCartOpen.addEventListener('click', () => {
    cart.classList.add('cart-active');
})
btnCartClose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
})



window.addEventListener('DOMContentLoaded', loaditems)

function loaditems() {
    loadcontent()
}


//delete cart items

function loadcontent() {
    //remove cart items

    var deleteBtn = document.querySelectorAll('.cart-remove');
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', cartitemsDelete);

    });

    var quantityitems = document.querySelectorAll('.cart-quantity');
    quantityitems.forEach((input) => {
        input.addEventListener('change', qtyvalue)
    })
}





//fucntion of cart delete

function cartitemsDelete() {
    this.parentElement.remove();
    proudctcount()
    totalvalueupdate()

}

//funciton qty vallue

function qtyvalue() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    totalvalueupdate()
    order()
}



//function proudct count

function proudctcount() {
    var cartcount = document.getElementById('cart-count');
    var cartvalue = document.querySelector('.cart-content');
    var cartcounter = document.getElementById('cart-counter');
    var tablecalc = document.getElementById('carttotalcount');
    var cartvalues = cartvalue.children.length;

    cartcounter.innerText = cartvalues;
    tablecalc.innerText = cartvalues;


}
proudctcount()



//total update


function totalvalueupdate() {
    var cart = document.getElementsByClassName('cart-content')[0];
    var cartboxes = cart.getElementsByClassName('cart-item');
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


        localStorage.setItem('pricecart', pricecart);
        const innervalueprice = localStorage.getItem('pricecart')

        pricecartElement.innerText = "Rs." + innervalueprice;

        total = total + price * quantity;

        total = Math.round(total * 100) / 100;

        localStorage.setItem('total', total);

    }
    document.getElementsByClassName('cart-total')[0].innerText = "Rs." + total;
    document.getElementById('total').innerText = "Rs." + total;


}
totalvalueupdate()


//add items in cart

var cartadd = document.getElementsByClassName('button');

for (let i = 0; i < cartadd.length; i++) {
    var button = cartadd[i];
    button.addEventListener('click', additemsclicked)
}

var cartheart = document.getElementsByClassName('fa-heart');
for (let i = 0; i < cartheart.length; i++) {
    var heart = cartheart[i];
    heart.addEventListener('click', heartclicked)
}

// add items to heart like

function heartclicked(event) {
    var heart = event.target;
    var heartitemsvalue = heart.parentElement;
    
    
   

    var hearts = [];

    var heartdetails = {
        anchor:heartitemsvalue.parentElement.href,
        img: heartitemsvalue.getElementsByClassName('product-img')[0].src,
        brand: heartitemsvalue.getElementsByClassName('mobile-brand-name')[0].innerText,
        name: heartitemsvalue.getElementsByClassName('mobile-name')[0].innerText,
        price:heartitemsvalue.getElementsByClassName('rate')[0].innerText,
        delprice:heartitemsvalue.getElementsByClassName('rate-del')[0].innerText,
        percent:heartitemsvalue.getElementsByClassName('percentage')[0].innerText,
        bank:heartitemsvalue.getElementsByClassName('bank-details')[0].innerText,
        warrantybrand:heartitemsvalue.getElementsByClassName('waranty')[0].innerText,
        no: 1
    }
   

    if(JSON.parse(localStorage.getItem('heart')) === null)
    {
        hearts.push(heartdetails);
        const heartcontainer = JSON.stringify(hearts);
        localStorage.setItem('heart',heartcontainer);
    }
    else
    {
        const localhearts = JSON.parse(localStorage.getItem('heart'));
        localhearts.map(heartdata => {
            if(heartdetails.brand == heartdata.brand)
            {
                heartdetails.no = heartdetails.no  + 1;
            }
            else
            {
                hearts.push(heartdata);
            }
        });
        hearts.push(heartdetails);
        localStorage.setItem('heart',JSON.stringify(hearts))
    }

}



//add items cart infucntion

function additemsclicked(event) {
    var button = event.target;
    var shopitemsvalue = button.parentElement;


    var items = [];




    var datas = {
        name: shopitemsvalue.getElementsByClassName('mobile-name')[0].innerText,
        img: shopitemsvalue.getElementsByClassName('product-img')[0].src,
        brand: shopitemsvalue.getElementsByClassName('mobile-brand-name')[0].innerText,
        price: shopitemsvalue.getElementsByClassName('rate')[0].innerText,
        no: 1
    };
    if (JSON.parse(localStorage.getItem('order')) === null) {
        items.push(datas);
        const sting = JSON.stringify(items);
        localStorage.setItem('order', sting);
    } else {
        const localItems = JSON.parse(localStorage.getItem('order'));
        localItems.map(data => {
            if (datas.brand == data.brand) {
                datas.no = datas.no + 1;
            } else {
                items.push(data)
            }
        });
        items.push(datas)
        localStorage.setItem('order', JSON.stringify(items))

    }



    shopitemsvalue.getElementsByClassName('product-img')[0].src;



    var dataget = localStorage.getItem('order');

    var dataseq = JSON.parse(dataget)

    for (let i = 0; i < dataseq.length; i++) {
        var price = dataseq[i].price;
        var productname = dataseq[i].name;
        var productbrand = dataseq[i].brand;
        var productimg = dataseq[i].img;

    }















    addcartproduct(price, productname, productbrand, productimg);
    var alertvalue = document.getElementById('alertcontainer');
    alertvalue.style.display = "flex"
    var counter = 3;
    var interval = setInterval(() => {
        counter--;
        if (counter > 0) {
            clearInterval(interval);
            alertvalue.style.display = "none";
        }
    }, 1000)
    totalvalueupdate()
}


//cart btn



//add products function
function addcartproduct(price, productname, productbrand, productimg) {




    var cartdiv = document.createElement('div');
    cartdiv.classList.add('cart-item');
    var cartitems = document.getElementsByClassName('cart-content')[0];
    var cartproductname = cartitems.getElementsByClassName('cart-name');
    var cartproductbrand = cartitems.getElementsByClassName('product-brand');
    var alertvalue = document.getElementById('alertcontainer');
    var alertpara = document.getElementById('para-alert');

    for (var i = 0; i < cartitems.length; i++) {
        if (cartproductname[i].innerText === true && cartproductbrand[i].innerText === true) {

        }

    }




    for (var i = 0; i < cartproductname.length; i++) {
        if (cartproductname[i].innerText == productname.toUpperCase() && cartproductbrand[i].innerText == productbrand) {
            alertvalue.style.display = "flex";
            alertvalue.style.backgroundColor = "var(--bs-danger)";
            alertpara.innerText = "Already Added To Cart";
            var counter = 3;

            var interval = setInterval(() => {
                counter--;
                if (counter > 0) {
                    clearInterval(interval);

                    alertpara.innerText = " Successful added to cart";
                    alertvalue.style.backgroundColor = "#26A96C";
                    alertvalue.style.display = "none";
                }
            }, 1000)
            return;
        } else {


        }

        var totalvalues = localStorage.getItem('pricecart')
    }


    var cartboxcotnet = `
         <img src="${productimg}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${productname}</div>
                        <div class="price-box">
                            <div class="cart-price">${price}</div>
                            <div class="cart-amt">${totalvalues}</div>
                        </div>
                        <span class="cart-qtyname">Oty</span><input type="number" value="1" class="cart-quantity">
                        <div class="product-brand">${productbrand}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>
    `;




    var cartcontainer = cartboxcotnet



    cartdiv.innerHTML = cartcontainer;
    cartitems.append(cartdiv);



    loadcontent()
    proudctcount()

    order()





}



function order() {
    var cartorder = document.getElementsByClassName('cart-content')[0];
    var cartorders = cartorder.getElementsByClassName('cart-item');

    for (var i = 0; i < cartorders.length; i++)
        var cartbronchure = cartorders[i];
    var productname = cartbronchure.getElementsByClassName('cart-name')[0].innerText;
    var productprice = cartbronchure.getElementsByClassName('cart-price')[0].innerText;
    var productquantity = cartbronchure.getElementsByClassName('cart-quantity')[0].value;
    var productamt = cartbronchure.getElementsByClassName('cart-amt')[0].innerText;


    var cartorderobj = {
        name: productname, price: productprice, priceamt: productamt, qty: productquantity
    }

    var table = document.getElementById('table')

    var dataname = cartorderobj.name;
    var dataprice = cartorderobj.price;
    var dataqty = cartorderobj.qty;
    var dataamt = cartorderobj.priceamt;

    var table = document.getElementById('table');

    table.innerHTML += `
        
        <tr>
        <td>${dataname}</td>
        <td>${dataqty}</td>
        <td id="dataprice">${dataprice}</td>
        <td id="dataprice">${dataamt}</td>

        </tr>
        `;


}


function downloadable() {
    window.frames["print_frame"].document.body.innerHTML = document.getElementById('table-container').innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
}


var cartclose = document.getElementById('btn-close');
var carttarget = document.getElementById('tabledetails');
var cartopen = document.getElementById('opencart')

cartclose.addEventListener('click', () => {
    carttarget.style.display = "none"
})

cartopen.addEventListener('click', () => {
    carttarget.style.display = "block";
})


















//cart






