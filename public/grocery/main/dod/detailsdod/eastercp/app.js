//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
})


// heart btn


//special btns added

document.addEventListener('DOMContentLoaded', loadcontent)



function loadcontent() {
    const button = document.querySelectorAll('.btn-main');
    button.forEach((btn) => {
        btn.addEventListener('click', selected);
    })

    // heart btn

    const hearts = document.querySelectorAll('.buttons');
    hearts.forEach((heart) => {
        heart.addEventListener('click', heartactive)
    })




}



//content remove
function selected() {
    this.classList.toggle('btn-main-active');


}


//heart btn added and remove

function heartactive() {
    this.classList.toggle('buttons-active');
}












































// all details open

const alldetailsopen = document.getElementById('alldetails');
const alldetaukscontaineropen = document.getElementById('alldetails-container');

alldetailsopen.addEventListener('click', () => {
    alldetaukscontaineropen.style.display = "block";
})


// all details close


const closealldet = document.getElementById('app-arrow-div');
const alldetaukscontainer = document.getElementById('alldetails-container');

closealldet.addEventListener('click', () => {
    alldetaukscontainer.style.display = "none";
})




// automatic animation click all details

const desc = document.getElementById('desc');
const spec = document.getElementById('spec');
const more = document.getElementById('more');


// animation container

const animationCont = document.getElementsByClassName('animation')[0];
const btnanimate = document.getElementsByClassName('btn-effect')[0];


// open data container

const descriptioncontainer = document.getElementsByClassName('description')[0];
const specscontainer = document.getElementsByClassName('specs')[0];
const moreinfocontainer = document.getElementsByClassName('moreinfo')[0];




desc.addEventListener('click', () => {
    // animation change

    animationCont.style.left = "0";
    btnanimate.style.left = "0";
    btnanimate.style.display = "block";
    var counter = 1;
    var interval = setInterval(() => {
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            btnanimate.style.display = "none"
        }
    }, 1000)

    desc.style.color = "var(--bs-primary)"
    spec.style.color = "#000"
    more.style.color = "#000"

    descriptioncontainer.style.display = "block";
    specscontainer.style.display = "none";
    moreinfocontainer.style.display = "none";


})

spec.addEventListener('click', () => {
    // animation change

    animationCont.style.left = "140px";
    btnanimate.style.left = "140px";
    btnanimate.style.display = "block";
    var counter = 1;
    var interval = setInterval(() => {
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            btnanimate.style.display = "none"
        }
    }, 1000)

    spec.style.color = "var(--bs-primary)";
    desc.style.color = "#000"
    more.style.color = "#000"


    descriptioncontainer.style.display = "none";
    specscontainer.style.display = "block";
    moreinfocontainer.style.display = "none";


})

more.addEventListener('click', () => {
    // animation change

    animationCont.style.left = "280px";
    btnanimate.style.left = "280px";
    btnanimate.style.display = "block";
    var counter = 1;
    var interval = setInterval(() => {
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            btnanimate.style.display = "none"
        }
    }, 1000)

    more.style.color = "var(--bs-primary)"
    desc.style.color = "#000"
    spec.style.color = "#000"

    descriptioncontainer.style.display = "none";
    specscontainer.style.display = "none";
    moreinfocontainer.style.display = "Block";


})




// products details change container details stored marked


const productContainer = document.querySelectorAll('.product-content');

productContainer.forEach((content) => {
    content.addEventListener('click', activate)
})


// function create activate

function activate(event) {
    var productdata = event.target;
    // products
    const productqty = productdata.getElementsByClassName('pg')[0].innerText;
    const productdis = productdata.getElementsByClassName('percent')[0].innerText;
    const productprice = productdata.getElementsByClassName('rate1')[0].innerText;
    const productdelprice = productdata.getElementsByClassName('rate-del1')[0].innerText;


    //data
    const productel = document.getElementsByClassName('mobile-brand-name')[0];
    const percentel = document.getElementsByClassName('percentage')[0];
    const productrateel = document.getElementsByClassName('rate')[0];
    const productdelrateel = document.getElementsByClassName('rate-del')[0];

    productel.innerText = productqty;
    percentel.innerText = productdis;
    productrateel.innerText = productprice;
    productdelrateel.innerText = productdelprice;

    // radios
    const radios = productdata.getElementsByClassName('quantity')[0];
    radios.checked = true;









}

const radios = document.getElementsByClassName('quantity')[1];
radios.checked = true;









// content document


const productscontainer1 = document.getElementsByClassName('product-content')[0];
const productscontainer2 = document.getElementsByClassName('product-content')[1];

// click event

productscontainer1.addEventListener('click', () => {
    productscontainer1.style.border = "1px solid #4d370d";
    productscontainer2.style.border = "1px solid rgba(0, 0, 0, 0.1)";

    // img container

    const img1 = document.getElementsByClassName('start-img')[0];
    const img2 = document.getElementsByClassName('start-img')[1];

    img1.src = "https://rukminim2.flixcart.com/image/808/970/xif0q/spice-masala/m/t/8/-original-imahfffswrpybhv2.jpeg?q=60";
    img2.src = "https://rukminim2.flixcart.com/image/808/970/xif0q/spice-masala/k/2/a/-original-imahfffscpve4ymp.jpeg?q=60";

    // btn

    buttonEl.innerHTML = "Add";


    const groceryLocaldata = localStorage.getItem('groceryorder');

    const grocerydata = JSON.parse(groceryLocaldata);

    grocerydata.forEach((data) => {
        if (document.getElementsByClassName('mobile-name')[0].innerText === data.name && document.getElementsByClassName('mobile-brand-name')[0].innerText === data.brand) {
            buttonEl.innerHTML = `<a href="../../../../../insidecart/insidecart.html">Added <i class="fa-solid fa-check"></i></a>`;
            return
        }

    })

})

productscontainer2.addEventListener('click', () => {
    productscontainer2.style.border = "1px solid #4d370d";
    productscontainer1.style.border = "1px solid rgba(0, 0, 0, 0.1)";

    // img container

    const img1 = document.getElementsByClassName('start-img')[0];
    const img2 = document.getElementsByClassName('start-img')[1];

    img1.src = "https://rukminim2.flixcart.com/image/824/1828/xif0q/spice-masala/f/j/k/-original-imahfffszwg3zfgy.jpeg?q=90";
    img2.src = "https://rukminim2.flixcart.com/image/824/1828/xif0q/spice-masala/k/e/q/-original-imahfffsvuz6n7k3.jpeg?q=90";

    // local storage cart verified

    grocerydata1.forEach((data) => {
        if (document.getElementsByClassName('mobile-name')[0].innerText == data.name && document.getElementsByClassName('mobile-brand-name')[0].innerText == data.brand) {
            buttonEl.innerHTML = `<a href="../../../../../insidecart/insidecart.html">Added  <i class="fa-solid fa-check"></i></a>`;
            
        }
       
          

    })

   



})

// add buttons

const buttonEl = document.getElementsByClassName('button')[0];

buttonEl.addEventListener('click', () => {
    buttonEl.innerHTML = `<a href="../../../../../insidecart/insidecart.html">Added <i class="fa-solid fa-check"></i></a>`;
})






const groceryLocaldata1 = localStorage.getItem('groceryorder');

const grocerydata1 = JSON.parse(groceryLocaldata1);

grocerydata1.forEach((data) => {
    if (document.getElementsByClassName('mobile-name')[0].innerText == data.name && document.getElementsByClassName('mobile-brand-name')[0].innerText == data.brand) {
        buttonEl.innerHTML = `<a href="../../../../../insidecart/insidecart.html">Added  <i class="fa-solid fa-check"></i></a>`;
        return
    }

})




























































