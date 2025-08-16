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



function loadcontent()
{
    const button = document.querySelectorAll('.btn-main');
    button.forEach((btn) => {
        btn.addEventListener('click',selected);
    })

    // heart btn

    const hearts = document.querySelectorAll('.buttons');
    hearts.forEach((heart) => {
        heart.addEventListener('click',heartactive)
    })




}



//content remove
function selected()
{
    this.classList.toggle('btn-main-active');

    
}


//heart btn added and remove

function heartactive()
{
    this.classList.toggle('buttons-active');
}



// page vidio open

const vidoplay = document.getElementById('video-play');

vidoplay.addEventListener('click', () => {
    const videoBlur = document.getElementById('blur-container');
    const videocontainer = document.querySelector('.video-container');

    videoBlur.classList.toggle('blur-container-active');
    videocontainer.style.display = "block";
    
})
const videoBlur = document.getElementById('blur-container');
videoBlur.addEventListener('click', () => {
    videoBlur.classList.remove('blur-container-active');
    const videocontainer = document.querySelector('.video-container');
    videocontainer.style.display = "none";
})



// know more container

const knowmore = document.getElementById('know-more');
const knowmoreContainer = document.querySelector('.know-more-container');
const knowmoreClose = document.getElementById('know-more-close');

knowmore.addEventListener('click', () => {
    knowmoreContainer.style.display = "block";
})
knowmoreClose .addEventListener('click', () => {
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