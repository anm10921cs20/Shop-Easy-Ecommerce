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
    cartcount.innerText = cartvalues;
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
        pricecartElement.innerText = "Rs." + pricecart;

        total = total + price * quantity;

        total = Math.round(total * 100) / 100;

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



    //add items cart infucntion

    function additemsclicked(event) {
        var button = event.target;
        shopitemsvalue = button.parentElement;
        var price = shopitemsvalue.getElementsByClassName('rate')[0].innerText;
        var productname = shopitemsvalue.getElementsByClassName('mobile-name')[0].innerText;
        var productbrand = shopitemsvalue.getElementsByClassName('mobile-brand-name')[0].innerText;
        var productimg = shopitemsvalue.getElementsByClassName('product-img')[0].src;
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

}

//add products function
function addcartproduct(price, productname, productbrand, productimg) {
    var cartdiv = document.createElement('div');
    cartdiv.classList.add('cart-item');
    var cartitems = document.getElementsByClassName('cart-content')[0];
    var cartproductname = cartitems.getElementsByClassName('cart-name');
    var cartproductbrand = cartitems.getElementsByClassName('product-brand');
    var alertvalue = document.getElementById('alertcontainer');
    var alertpara = document.getElementById('para-alert');


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
        }
    }

    var cartboxcotnet = `
         <img src="${productimg}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-name">${productname}</div>
                        <div class="price-box">
                            <div class="cart-price">${price}</div>
                            <div class="cart-amt">Rs.00</div>
                        </div>
                        <span class="cart-qtyname">Oty</span><input type="number" value="1" class="cart-quantity">
                        <div class="product-brand">${productbrand}</div>
                    </div>
                    <ion-icon name="trash" class="cart-remove"></ion-icon>
    `;


    cartdiv.innerHTML = cartboxcotnet;
    cartitems.append(cartdiv);
    cartdiv.getElementsByClassName('cart-remove')[0].addEventListener('click', cartitemsDelete)
    cartdiv.getElementsByClassName('cart-quantity')[0].addEventListener('change', qtyvalue)
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

        var cartorderobj = {
            name: productname, price: productprice, qty: productquantity
        }

        var table = document.getElementById('table')
        var file = document.createElement('td');
        var dataname = cartorderobj.name;
        var dataprice = cartorderobj.price;
        var dataqty = cartorderobj.qty;


        var table = document.getElementById('table');
        
        table.innerHTML += `
        
        <tr>
        <td>${dataname}</td>
        <td>${dataqty}</td>
        <td>${dataprice}</td>
        </tr>
        `;

       
       

       
    }


    function downloadable()
    {
         window.frames["print_frame"].document.body.innerHTML = document.getElementById('table-container').innerHTML;
         window.frames["print_frame"].window.focus();
         window.frames["print_frame"].window.print();
    }


    var cartclose = document.getElementById('btn-close');
    var carttarget = document.getElementById('tabledetails');
    var cartopen = document.getElementById('opencart')

    cartclose.addEventListener('click', () =>
    {
        carttarget.style.display = "none"
    })

    cartopen.addEventListener('click', () =>
    {
        carttarget.style.display = "block";
    })
   










//cart

