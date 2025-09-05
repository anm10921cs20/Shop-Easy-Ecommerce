



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
        anchor: heartitemsvalue.parentElement.href,
        img: heartitemsvalue.getElementsByClassName('product-img')[0].src,
        brand: heartitemsvalue.getElementsByClassName('mobile-brand-name')[0].innerText,
        name: heartitemsvalue.getElementsByClassName('mobile-name')[0].innerText,
        price: heartitemsvalue.getElementsByClassName('rate')[0].innerText,
        delprice: heartitemsvalue.getElementsByClassName('rate-del')[0].innerText,
        percent: heartitemsvalue.getElementsByClassName('percentage')[0].innerText,
        bank: heartitemsvalue.getElementsByClassName('bank-details')[0].innerText,
        warrantybrand: heartitemsvalue.getElementsByClassName('waranty')[0].innerText,
        no: 1
    }


    if (JSON.parse(localStorage.getItem('heart')) === null) {
        hearts.push(heartdetails);
        const heartcontainer = JSON.stringify(hearts);
        localStorage.setItem('heart', heartcontainer);
    }
    else {
        const localhearts = JSON.parse(localStorage.getItem('heart'));
        localhearts.map(heartdata => {
            if (heartdetails.brand == heartdata.brand) {
                heartdetails.no = heartdetails.no + 1;
            }
            else {
                hearts.push(heartdata);
            }
        });
        hearts.push(heartdetails);
        localStorage.setItem('heart', JSON.stringify(hearts))
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



var counts = document.getElementById('cart-count');
var countvalue = localStorage.getItem('cart-count');
counts.innerText = countvalue;






















//cart






