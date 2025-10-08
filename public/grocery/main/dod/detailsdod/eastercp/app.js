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







// know more container

const knowmore = document.getElementById('know-more');
const knowmoreContainer = document.querySelector('.know-more-container');
const knowmoreClose = document.getElementById('know-more-close');

knowmore.addEventListener('click', () => {
    knowmoreContainer.style.display = "block";
})
knowmoreClose.addEventListener('click', () => {
    knowmoreContainer.style.display = "none";
})



// products details container

const productshigh = document.getElementById('proddetails');
const productschev = document.getElementById('chevrons');
const productsvalues = document.getElementById('full-details')

productshigh.addEventListener('click', () => {
    productschev.classList.toggle('down-hover');
    productsvalues.classList.toggle('full-details-active');

})


// image change function

const imageChange = document.querySelector('#imagechange');

imageChange.addEventListener('click', () => {
    imageChange.src = "https://rukminim1.flixcart.com/www/120/102/promos/04/09/2023/d8a65dd0-321c-4028-9496-660e67ad6696.png?q=60";
    const a = document.createElement('a');
    a.href = "../../../../../../../insidecart/insidecart.html"

})


































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

    animationCont.style.left ="0";
    btnanimate.style.left ="0";
    btnanimate.style.display = "block";
     var counter = 1;
    var interval = setInterval(() => {
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            btnanimate.style.display = "none"
        }
    },1000)

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
    btnanimate.style.left ="140px";
    btnanimate.style.display = "block";
    var counter = 1;
    var interval = setInterval(() => {
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            btnanimate.style.display = "none"
        }
    },1000)

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
    btnanimate.style.left ="280px";
    btnanimate.style.display = "block";
     var counter = 1;
    var interval = setInterval(() => {
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            btnanimate.style.display = "none"
        }
    },1000)

    more.style.color = "var(--bs-primary)"
    desc.style.color = "#000"
    spec.style.color = "#000"

    descriptioncontainer.style.display = "none";
    specscontainer.style.display = "none";
        moreinfocontainer.style.display = "Block";
  

})


// all products details container


const productsclose = document.getElementsByClassName('app-left-bar')[2];
const productsopen = document.getElementById('alldetailed');

const productscontainer = document.getElementsByClassName('products-details-container')[0];

productsopen.addEventListener('click', () => {
    productscontainer.style.display = "block";
})

productsclose.addEventListener('click', () => {
    productscontainer.style.display = "none";
})


// similar products 

const similaropen = document.getElementById('product-similarly');
const similarclose = document.getElementsByClassName('app-left-bar1')[0]
const similarcontainer = document.getElementsByClassName('similar-open-container')[0];


similaropen.addEventListener('click', () => {
    similarcontainer.style.display = "block";
})
similarclose.addEventListener('click', () => {
    similarcontainer.style.display = "none";
})
































































