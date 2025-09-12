var openBtn = document.getElementById('app-arrow');

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
    divcont.innerHTML = `<div class="index-value"><input type="radio" name="address" class="address-select"></div><div><div class="head-content"><h6>${items.name}</h6><p class="head-content-para">${items.homevalue}</p></div>
<p>${items.houseno},${items.roadname},${items.city},${items.state},${items.pincode}</p><p>${items.phoneno}</p><br>  

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

