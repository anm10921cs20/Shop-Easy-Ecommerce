const firebaseConfig = {
    apiKey: "AIzaSyA2OdKypmjrY-X7XKId64MndF4HtIRe-bs",
    authDomain: "shopeasy-login.firebaseapp.com",
    databaseURL: "https://shopeasy-login-default-rtdb.firebaseio.com",
    projectId: "shopeasy-login",
    storageBucket: "shopeasy-login.firebasestorage.app",
    messagingSenderId: "255206950436",
    appId: "1:255206950436:web:2e972fbaf4ae6b8f1c7ab1",
    measurementId: "G-YDHQQF7XN8"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();




var openBtn = document.getElementById('app-arrows');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
})


const addressaddBtn = document.getElementById('address-fill');
const addressaddContainer = document.getElementsByClassName('address-content')[0];
const maincontainer = document.getElementsByClassName('containers1')[0];

addressaddBtn.addEventListener('click', () => {
    addressaddContainer.style.display = "block";
    maincontainer.style.display = "none";
})

var openBtn1 = document.getElementById('app-arrow1');

//event listener nav open
openBtn1.addEventListener('click', () => {
    addressaddContainer.style.display = "none";
    maincontainer.style.display = "block";
})

function addressstore() {
    const forms = document.getElementById('form');
    const names = document.getElementsByClassName('form-control')[0].value;
    const phoneno = document.getElementsByClassName('form-control')[1].value;
    const pincode = document.getElementsByClassName('form-control')[2].value;
    const state = document.getElementsByClassName('form-control')[3].value;
    const city = document.getElementsByClassName('form-control')[4].value;
    const houseno = document.getElementsByClassName('form-control')[5].value;
    const roadname = document.getElementsByClassName('form-control')[6].value;


    const home = document.getElementsByClassName('locate')[0];
    const work = document.getElementsByClassName('locate')[0];

    home.addEventListener('click', () => {
        home.innerText;
    })

    work.addEventListener('click', () => {
        work.innerText;
    })

    var detailsstore = [];

    var addressdata = {
        name: names,
        phoneno: phoneno,
        pincode: pincode,
        state: state,
        city: city,
        houseno: houseno,
        roadname: roadname,
        homevalue: home.innerText,
        workvalue: work,
        no: 1
    };



    if (JSON.parse(localStorage.getItem('address-details')) === null) {
        detailsstore.push(addressdata)
        localStorage.setItem('address-details', JSON.stringify(detailsstore));
    } else {
        const valueaddress = JSON.parse(localStorage.getItem('address-details'));
        valueaddress.map(vals => {
            if (addressdata.houseno == vals.houseno) {

            }
            else {
                detailsstore.push(vals);
            }
        })
        detailsstore.push(addressdata)
        localStorage.setItem('address-details', JSON.stringify(detailsstore));
    }








}

const btnsaveaddress = document.getElementsByClassName('btn-saveaddress')[0];
const form = document.getElementsByClassName('form-control')[0]
const form1 = document.getElementsByClassName('form-control')[1]
const form2 = document.getElementsByClassName('form-control')[2]
const form3 = document.getElementsByClassName('form-control')[3]
const form4 = document.getElementsByClassName('form-control')[4]
const form5 = document.getElementsByClassName('form-control')[5]
const form6 = document.getElementsByClassName('form-control')[6]
const alert = document.getElementsByClassName('fill')[0];


btnsaveaddress.addEventListener('click', (e) => {

    const names = document.getElementsByClassName('form-control')[0].value;
    const phoneno = document.getElementsByClassName('form-control')[1].value;
    const pincode = document.getElementsByClassName('form-control')[2].value;
    const state = document.getElementsByClassName('form-control')[3].value;
    const city = document.getElementsByClassName('form-control')[4].value;
    const houseno = document.getElementsByClassName('form-control')[5].value;
    const roadname = document.getElementsByClassName('form-control')[6].value;


    e.preventDefault();

    var counter = 16;


    if (form.value.length < 5) {
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                form.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form3.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form4.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form5.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form6.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                alert.innerText = "";

            }
        }, 1000)
        form.style.border = "1px solid var(--bs-danger)";
        form1.style.border = "1px solid var(--bs-danger)";
        form2.style.border = "1px solid var(--bs-danger)";
        form3.style.border = "1px solid var(--bs-danger)";
        form4.style.border = "1px solid var(--bs-danger)";
        form5.style.border = "1px solid var(--bs-danger)";
        form6.style.border = "1px solid var(--bs-danger)";
        alert.innerText = "Fill Blank Details";
    }
    if (form1.value.length < 5) {
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                form.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form3.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form4.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form5.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form6.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                alert.innerText = "";

            }
        }, 1000)

        form.style.border = "1px solid var(--bs-danger)";
        form1.style.border = "1px solid var(--bs-danger)";
        form2.style.border = "1px solid var(--bs-danger)";
        form3.style.border = "1px solid var(--bs-danger)";
        form4.style.border = "1px solid var(--bs-danger)";
        form5.style.border = "1px solid var(--bs-danger)";
        form6.style.border = "1px solid var(--bs-danger)";
        alert.innerText = "Fill Blank Details";

    }
    if (form2.value.length < 5) {
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                form.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form3.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form4.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form5.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form6.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                alert.innerText = "";

            }
        }, 1000)
        form.style.border = "1px solid var(--bs-danger)";
        form1.style.border = "1px solid var(--bs-danger)";
        form2.style.border = "1px solid var(--bs-danger)";
        form3.style.border = "1px solid var(--bs-danger)";
        form4.style.border = "1px solid var(--bs-danger)";
        form5.style.border = "1px solid var(--bs-danger)";
        form6.style.border = "1px solid var(--bs-danger)";
        alert.innerText = "Fill Blank Details";

    }
    if (form3.value.length < 5) {
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                form.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form3.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form4.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form5.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form6.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                alert.innerText = "";
            }
        }, 1000)
        form.style.border = "1px solid var(--bs-danger)";
        form1.style.border = "1px solid var(--bs-danger)";
        form2.style.border = "1px solid var(--bs-danger)";
        form3.style.border = "1px solid var(--bs-danger)";
        form4.style.border = "1px solid var(--bs-danger)";
        form5.style.border = "1px solid var(--bs-danger)";
        form6.style.border = "1px solid var(--bs-danger)";
        alert.innerText = "Fill Blank Details";

    }
    if (form4.value.length < 5) {
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                form.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form3.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form4.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form5.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form6.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                alert.innerText = "";

            }
        }, 1000)
        form.style.border = "1px solid var(--bs-danger)";
        form1.style.border = "1px solid var(--bs-danger)";
        form2.style.border = "1px solid var(--bs-danger)";
        form3.style.border = "1px solid var(--bs-danger)";
        form4.style.border = "1px solid var(--bs-danger)";
        form5.style.border = "1px solid var(--bs-danger)";
        form6.style.border = "1px solid var(--bs-danger)";
        alert.innerText = "Fill Blank Details";

    }
    if (form5.value.length < 5) {
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                form.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form3.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form4.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form5.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form6.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                alert.innerText = "";

            }
        }, 1000)
        form.style.border = "1px solid var(--bs-danger)";
        form1.style.border = "1px solid var(--bs-danger)";
        form2.style.border = "1px solid var(--bs-danger)";
        form3.style.border = "1px solid var(--bs-danger)";
        form4.style.border = "1px solid var(--bs-danger)";
        form5.style.border = "1px solid var(--bs-danger)";
        form6.style.border = "1px solid var(--bs-danger)";
        alert.innerText = "Fill Blank Details";

    }
    if (form6.value.length < 5) {
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                form.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form3.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form4.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form5.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                form6.style.border = "1px solid rgba(0, 0, 0, 0.2)";
                alert.innerText = "";

            }
        }, 1000)
        form.style.border = "1px solid var(--bs-danger)";
        form1.style.border = "1px solid var(--bs-danger)";
        form2.style.border = "1px solid var(--bs-danger)";
        form3.style.border = "1px solid var(--bs-danger)";
        form4.style.border = "1px solid var(--bs-danger)";
        form5.style.border = "1px solid var(--bs-danger)";
        form6.style.border = "1px solid var(--bs-danger)";
        alert.innerText = "Fill Blank Details";

    }

    else {
        addressstore();
        addressaddContainer.style.display = "none";
        window.location.reload()

    }

})






// add items like


const containeraddress = document.getElementsByClassName('add-btns')[0];



const items = localStorage.getItem('address-details');

const addressitems = JSON.parse(items) || [];

const addresscount = document.getElementById('countaddress');
var addresscountvalue = addressitems.length
addresscount.innerText = `(${addresscountvalue})`;


addressitems.forEach((items, idx) => {
    const divcont = document.createElement('div');
    divcont.classList.add('addressdata');
    divcont.innerHTML = `<div class="index-value"><input type="hidden" name="address" class="address-select"></div><div class="data"><div class="head-content"><h6>${items.name}</h6><p class="head-content-para">${items.homevalue}</p></div>
<p>${items.houseno},${items.roadname},${items.city},${items.state} ${items.pincode}</p><p>${items.phoneno}</p><br>  

</div>
<ion-icon name="trash" class="cart-remove"></ion-icon>
`
    containeraddress.append(divcont)
});


const containerDeleteBtn = document.querySelectorAll('.cart-remove');

containerDeleteBtn.forEach((delbtn, idx) => {
    delbtn.addEventListener('click', function () {

        this.parentElement.remove()


        if (addressitems && addressitems.length > idx) {
            addressitems.splice(idx, 1);  //remove one by one index in local storage
        }
        localStorage.setItem('address-details', JSON.stringify(addressitems));


        //  storage can empty index clear localstorage key data

        if (addressitems.length === 0) {
            localStorage.removeItem('address-details');
            window.location.reload()

        }
    });
})


if (addressitems.length === 0) {
    const divs = document.createElement('div');
    divs.innerHTML = `<div>Address Page Empty Please Add New Address</div>`;
    divs.style.color = "#000"
    containeraddress.append(divs)
}





// address click store storage in local click event

const addressdata = document.querySelectorAll(".addressdata");
const radioaddress = document.getElementsByClassName('address-select');

addressdata.forEach((data, idx) => {
    data.addEventListener('click', () => {
        var value = document.getElementsByClassName('data')[idx].innerHTML;
        radioaddress[idx].checked = true;
        localStorage.setItem('currentaddress', value);
        window.location.reload();

    })
})


const orderContiner = document.getElementsByClassName('containers2')[0];
const change = document.getElementsByClassName('change')[0];
change.addEventListener('click', () => {
    maincontainer.style.display = "block";
    orderContiner.style.display = "none";
})

const datalocal = localStorage.getItem('currentaddress');
var d = document.createElement('div');
d.innerHTML = datalocal;
d.classList.add('addressdata')
d.classList.add('addressdetail')
const addresssotes = document.getElementsByClassName('addressdatastore')[0];
addresssotes.append(d);

const dataapend = document.getElementsByClassName('cart-details-container')[0];
const datamainorder1 = localStorage.getItem('groceryorder');

const datastored1 = JSON.parse(datamainorder1) || [];

datastored1.forEach((datas, idx) => {
    const datadiv = document.createElement('div');
    datadiv.classList.add('cart-itemdata');
    datadiv.classList.add('cart-item')
    datadiv.innerHTML = `<div class="img-values"><img src="${datas.img}" alt="" class="cart-img"> <div>Qty
   <input type="number" class="cart-quantity" value="1">

</div></div>
                    <div class="detail-box">
                   
                        <div class="cart-name">${datas.name}</div>
                        <div class="price-box">
                            <div class="cart-price">${datas.price}</div>
                             <div class="cart-amt">0</div> 
                        </div>
                       
                        <div class="product-brand">${datas.brand}</div> 
                        <div class="cart-delivery">Delivery by 2Days</div>
                    </div>
                   
 `

    dataapend.append(datadiv);





})

const mainbtn = document.getElementsByClassName('btn-mainadd')[0];
mainbtn.addEventListener('click', () => {
    orderContiner.style.display = "block";
    maincontainer.style.display = "none";
})

var openBtn2 = document.getElementsByClassName('app-bars')[2];

//event listener nav open
openBtn2.addEventListener('click', () => {
    orderContiner.style.display = "none";
    maincontainer.style.display = "block";
})

function carttotal() {
    var cartboxes = dataapend.getElementsByClassName('cart-itemdata');
    var total = 0;
    for (var i = 0; i < cartboxes.length; i++) {
        var cartbox = cartboxes[i];
        var priceElement = cartbox.getElementsByClassName('cart-price')[0]; // Corrected index access
        var qtyElement = cartbox.getElementsByClassName('cart-quantity')[0];
        var qtyamt = cartbox.getElementsByClassName('cart-amt')[0];

        // Check if priceElement is defined before accessing its properties
        if (priceElement) {
            var price = parseFloat(priceElement.innerText.replace("Rs.", ""));
            var qty = qtyElement.value;
            qtyamt.innerText = "RS." + price * qty;

            total = total + price * qty;
        } else {
            // Handle the case where priceElement is not found
            console.warn("Element with class 'cart-price' not found in cart item:", cartbox);
        }

    }



    var totalvalue = (total + 100);
    document.getElementById('total-value1').innerText = "Rs." + totalvalue;
    document.getElementsByClassName('total-value')[0].innerText = "Rs." + totalvalue;
    document.getElementsByClassName('total-amt')[0].innerText = "Rs." + totalvalue;
    document.getElementById('total-value2').innerText = "Rs." + total;

    document.getElementById('upidelivery').innerText = "Rs." + totalvalue;



    const totalstorage = localStorage.getItem('finaltotal');
    document.getElementById('total-value3').innerText = "Rs." + total;





    localStorage.setItem('finaltotal', totalvalue)

}
carttotal()



var qtyes = document.querySelectorAll('.cart-quantity');

qtyes.forEach((qtys) => {
    qtys.addEventListener('change', updateqty)

})


function updateqty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;

    }
    var qtyarray = [];
    for (var i = 0; i < qtyes.length; i++) {
        qtyarray.push(qtyes[i].value)
        localStorage.setItem('qty-value', JSON.stringify(qtyarray))
    }


    carttotal()
}


// details 
var countervalue = datastored1.length
const detailsContainer = document.getElementsByClassName('details-container')[0];
const chevronDown = document.getElementsByClassName('fa-chevron-down')[0];
const priceDetails = document.getElementsByClassName('pricedetails')[0];

priceDetails.addEventListener('click', () => {
    detailsContainer.classList.toggle('details-container-active')
    chevronDown.classList.toggle('fa-chevron-down-active');
})
var qtyss = document.getElementsByClassName('qty')[0];
var qtysa = document.getElementsByClassName('qtya')[0];


qtyss.innerText = `${countervalue}item`;
qtysa.innerText = `${countervalue}item`;




// payment page

const finaltotal = localStorage.getItem('finaltotal');


const totalamount = document.getElementsByClassName('totalamount')[0];
const totaloontiner = document.getElementsByClassName('totaldetails')[0];
const chevronDown1 = document.getElementsByClassName('fa-chevron-down')[1];
totalamount.addEventListener('click', () => {
    totaloontiner.classList.toggle('totaldetails-active');
    chevronDown1.classList.toggle('fa-chevron-down-active');
})


const btnorder = document.getElementsByClassName('btn-orderadd')[0];
const paymentcontainer = document.getElementsByClassName('containers3')[0];

btnorder.addEventListener('click', () => {
    orderContiner.style.display = "none";
    paymentcontainer.style.display = "block";

})
var openBtn3 = document.getElementById('app-arrows1');

//event listener nav open
openBtn3.addEventListener('click', () => {
    orderContiner.style.display = "block";
    paymentcontainer.style.display = "none";
})

const chevronDown2 = document.getElementsByClassName('fa-chevron-down')[2];

const cashon = document.getElementsByClassName('cashondelivery')[0];
const notebnt = document.getElementsByClassName('notes-btn')[0];
cashon.addEventListener('click', () => {
    notebnt.classList.toggle('notes-btn-active');
    chevronDown2.classList.toggle('fa-chevron-down-active');
})
const chevronDown3 = document.getElementsByClassName('fa-chevron-down')[3];

const cashon1 = document.getElementsByClassName('cashondelivery')[1];
const notebnt1 = document.getElementsByClassName('notes-btn')[1];
cashon1.addEventListener('click', () => {
    notebnt1.classList.toggle('notes-btn-active');
    chevronDown3.classList.toggle('fa-chevron-down-active');
})

const chevronDown4 = document.getElementsByClassName('fa-chevron-down')[4];

const cashon2 = document.getElementsByClassName('cashondelivery')[2];
const notebnt2 = document.getElementsByClassName('notes-btn')[2];
cashon2.addEventListener('click', () => {
    notebnt2.classList.toggle('notes-btn-active');
    chevronDown4.classList.toggle('fa-chevron-down-active');
})





// cash on delivery btn

const castondeliverbtn = document.getElementById('cashondeliver');
const ordercashback = document.getElementsByClassName('order-cash-backgrop')[0];
const orderconfirm = document.getElementsByClassName('order-cash-confirm')[0];
const no = document.getElementsByClassName('no')[0];
const yes = document.getElementsByClassName('yes')[0];
const alertcontainer = document.getElementsByClassName('alert-container')[0];
castondeliverbtn.addEventListener('click', () => {
    ordercashback.style.display = "block";
    orderconfirm.style.display = "block";
})
no.addEventListener('click', () => {
    ordercashback.style.display = "none";
    orderconfirm.style.display = "none";
});
yes.addEventListener('click', () => {
    ordercashback.style.display = "none";
    orderconfirm.style.display = "none";
    alertcontainer.style.display = "block";
    const localdetails = localStorage.getItem('groceryorder');

    db.ref('groceryorders/' + localStorage.getItem('nameid') ).push({
        order:localdetails,
        total:localStorage.getItem('finaltotal'),
        qty:localStorage.getItem('qty-value'),
        address:localStorage.getItem('currentaddress'),
        date:new Date().toLocaleString()
    })

    const localdetails1 = localStorage.getItem('finaltotal');
    const localdetails2 = localStorage.getItem('qty-value');

    const neworder = [];
    const totalorder = [];
    const qtyorder = [];


        const orderdata = JSON.parse(localStorage.getItem('neworder')) || [];
        const orderdata1 = JSON.parse(localStorage.getItem('totalorder')) || [];
        const orderdata2 = JSON.parse(localStorage.getItem('qtyorder')) || [];

        orderdata.map((data) => {
            neworder.push(data);

        });
        orderdata1.map((data1) => {

            totalorder.push(data1);

        }); orderdata2.map((data2) => {

            qtyorder.push(data2);
        });
        neworder.push(localdetails);
        totalorder.push(localdetails1);
        qtyorder.push(localdetails2);
        localStorage.setItem('neworder', JSON.stringify(neworder));
        localStorage.setItem('totalorder', JSON.stringify(totalorder));
        localStorage.setItem('qtyorder', JSON.stringify(qtyorder));
    
   




    setTimeout(() => {
        ordercashback.style.display = "none";
        orderconfirm.style.display = "none";
        alertcontainer.style.display = "none";
        localStorage.removeItem('groceryorder');
        localStorage.removeItem('finaltotal');
        localStorage.removeItem('qty-value');
        window.location.replace ("../insidecart/insidecart.html");
    },5000)
})

