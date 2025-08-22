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


// btns container

// img btns

const imgbtnsclick1 = document.getElementsByClassName('img-colors')[0];
const imgbtnsclick2 = document.getElementsByClassName('img-colors')[1];
const imgbtnsclick3 = document.getElementsByClassName('main-imgs')[0];
const imgbtnsclick4 = document.getElementsByClassName('img-colors')[2];;

// img color text change

const imgcolor = document.getElementById('color1');
const imgcolor1 = document.getElementById('color2');
const imgcolor2 = document.getElementById('color3');
const imgcolor3 = document.getElementById('color4');
const imgcolor4 = document.getElementById('color5');
const imgcolor5 = document.getElementById('color6');



//img manuplation

const startimg1 = document.getElementsByClassName('start-img')[0];
const startimg2 = document.getElementsByClassName('start-img')[1];
const startimg3 = document.getElementsByClassName('start-img')[2];
const startimg4 = document.getElementsByClassName('start-img')[3];
const startimg5 = document.getElementsByClassName('start-img')[4];
const startimg6 = document.getElementsByClassName('start-img')[5];
const startimg7 = document.getElementsByClassName('start-img')[6];
const startimg8 = document.getElementsByClassName('start-img')[7];
const startimg9 = document.getElementsByClassName('start-img')[8];
const startimg10 = document.getElementsByClassName('start-img')[9];
const startimg11= document.getElementsByClassName('start-img')[11];


//all details img

const alldetailsimg = document.getElementById('alldetailsimg');


//rate 

const rate1 = document.getElementById('rate1');
const rate2 = document.getElementById('rate2');
const rate3 = document.getElementById('rate3');




// cross rate

const delrate1 = document.getElementById('rate-del1')
const delrate2 = document.getElementById('rate-del2')
const delrate3 = document.getElementById('rate-del3')











imgbtnsclick1.addEventListener('click', () => {
    imgbtnsclick1.classList.add('main-imgs');
    imgbtnsclick1.classList.remove('img-colors');
    imgbtnsclick2.classList.remove('main-imgs');
    imgbtnsclick3.classList.remove('main-imgs');
    imgbtnsclick4.classList.remove('main-imgs');
    imgbtnsclick2.classList.add('img-colors');
    imgbtnsclick3.classList.add('img-colors');
    imgbtnsclick4.classList.add('img-colors');
    imgcolor.innerHTML = "Black Titanium";
    imgcolor1.innerHTML = "Black Titanium";
    imgcolor2.innerHTML = "Black Titanium";
    imgcolor3.innerHTML = "Black Titanium";
    imgcolor4.innerHTML = "Black Titanium";
    imgcolor5.innerHTML = "Black Titanium";



    alldetailsimg.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/e/x/e/-original-imah4jyw4fpqe7ru.jpeg?q=60&crop=false";


    startimg1.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/e/x/e/-original-imah4jyw4fpqe7ru.jpeg?q=60&crop=false";
    startimg2.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/7/d/z/-original-imah4jywg4hhdvdg.jpeg?q=60&crop=false";
    startimg3.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/3/n/c/-original-imah4jywzxzwkq6g.jpeg?q=60&crop=false";
    startimg4.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/e/d/h/-original-imah4jywf7mnadye.jpeg?q=60&crop=false";




})

imgbtnsclick2.addEventListener('click', () => {
    imgbtnsclick2.classList.add('main-imgs');
    imgbtnsclick2.classList.remove('img-colors');
    imgbtnsclick1.classList.remove('main-imgs');
    imgbtnsclick3.classList.remove('main-imgs');
    imgbtnsclick4.classList.remove('main-imgs');
    imgbtnsclick1.classList.add('img-colors');
    imgbtnsclick3.classList.add('img-colors');
    imgbtnsclick4.classList.add('img-colors');
    imgcolor.innerHTML = "Desert Titanium";
    imgcolor1.innerHTML = "Desert Titanium";
    imgcolor2.innerHTML = "Desert Titanium";
    imgcolor3.innerHTML = "Desert Titanium";
    imgcolor4.innerHTML = "Desert Titanium";
    imgcolor5.innerHTML = "Desert Titanium";



    alldetailsimg.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/7/d/z/-original-imah4jywfm9uuvzw.jpeg?q=60&crop=false";

    startimg1.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/7/d/z/-original-imah4jywfm9uuvzw.jpeg?q=60&crop=false"
     startimg2.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/o/e/f/-original-imah4jywbnu45unk.jpeg?q=60&crop=false";
    startimg3.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/p/k/z/-original-imah4jywhzmcyuwg.jpeg?q=60&crop=false";
    startimg4.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/n/6/v/-original-imah4jywmhy8b4du.jpeg?q=60&crop=false";


})

imgbtnsclick3.addEventListener('click', () => {
    imgbtnsclick3.classList.add('main-imgs');
    imgbtnsclick3.classList.remove('img-colors');
    imgbtnsclick1.classList.remove('main-imgs');
    imgbtnsclick4.classList.remove('main-imgs');
    imgbtnsclick1.classList.add('img-colors');
    imgbtnsclick2.classList.add('img-colors');
    imgbtnsclick4.classList.add('img-colors');
    imgcolor.innerHTML = "Natural Titanium";
    imgcolor1.innerHTML = "Natural Titanium";
    imgcolor2.innerHTML = "Natural Titanium";
    imgcolor3.innerHTML = "Natural Titanium";
    imgcolor4.innerHTML = "Natural Titanium";
    imgcolor5.innerHTML = "Natural Titanium";



    alldetailsimg.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=60&crop=false";
    

    startimg1.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=60&crop=false";
     startimg2.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/i/a/e/-original-imah4jywx3pnmh7y.jpeg?q=60&crop=false";
    startimg3.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/7/i/c/-original-imah4jyweenbdphu.jpeg?q=60&crop=false";
    startimg4.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/a/w/q/-original-imah4jywmuur2nwb.jpeg?q=60&crop=false";



})

imgbtnsclick4.addEventListener('click', () => {
    imgbtnsclick4.classList.add('main-imgs');
    imgbtnsclick4.classList.remove('img-colors');
    imgbtnsclick1.classList.remove('main-imgs');
    imgbtnsclick1.classList.add('img-colors');
    imgbtnsclick2.classList.add('img-colors');
    imgbtnsclick3.classList.add('img-colors');
    imgcolor.innerHTML = "White Titanium";
    imgcolor1.innerHTML = "White Titanium";
    imgcolor2.innerHTML = "White Titanium";
    imgcolor3.innerHTML = "White Titanium";
    imgcolor4.innerHTML = "White Titanium";
    imgcolor5.innerHTML = "White Titanium";



    alldetailsimg.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/x/5/2/-original-imah4jywyma4j8vy.jpeg?q=60&crop=false";


    startimg1.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/x/5/2/-original-imah4jywyma4j8vy.jpeg?q=60&crop=false";
     startimg2.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/c/q/2/-original-imah4jywwmbzebh4.jpeg?q=60&crop=false";
    startimg3.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/r/k/9/-original-imah4jywn67cjzfp.jpeg?q=60&crop=false";
    startimg4.src = "https://rukminim1.flixcart.com/image/808/970/xif0q/mobile/1/k/q/-original-imah4jywmz4ezgxs.jpeg?q=60&crop=false";



})

// storage btns

const storagebtns1 = document.getElementsByClassName('btn-storage')[0];
const storagebtns2 = document.getElementsByClassName('btn-storage')[1];
const storagebtns3 = document.getElementsByClassName('btn-storage')[2];
const storagebtns4 = document.getElementsByClassName('btn-storage')[3];
const storage = document.getElementById('storage');
const storage1 = document.getElementById('storage1');
const storage2 = document.getElementById('storage2');
const storage3 = document.getElementById('storage3');
const storage4 = document.getElementById('storage4');
const storage5 = document.getElementById('storage5');
const storage6 = document.getElementById('storage6');



storagebtns1.addEventListener('click', () => {
    storagebtns1.classList.add('main-btn')
    storagebtns2.classList.remove('main-btn');
    storagebtns3.classList.remove('main-btn');
    storagebtns4.classList.remove('main-btn');
    storage.innerHTML = "128 GB";
    storage1.innerHTML = "128 GB";
    storage2.innerHTML = "128 GB";
    storage3.innerHTML = "128 GB";
    storage4.innerHTML = "128 GB";
    storage5.innerHTML = "128 GB";
    storage6.innerHTML = "128 GB";


    const gb128Rate =  "Rs.106900";
    rate1.innerHTML = gb128Rate;
    rate2.innerHTML = gb128Rate;
    rate3.innerHTML = gb128Rate;

    const delgn128 = "RS.1,19,900";
    delrate1.innerHTML = delgn128;
    delrate2.innerHTML = delgn128;
    delrate3.innerHTML = delgn128;




})

storagebtns2.addEventListener('click', () => {
    storagebtns2.classList.add('main-btn')
    storagebtns1.classList.remove('main-btn');
    storagebtns3.classList.remove('main-btn');
    storagebtns4.classList.remove('main-btn');
    storage.innerHTML = "256 GB";
    storage1.innerHTML = "256 GB";
    storage2.innerHTML = "256 GB";
    storage3.innerHTML = "256 GB";
    storage4.innerHTML = "256 GB";
    storage5.innerHTML = "256 GB";
    storage6.innerHTML = "256 GB";



    const gb256Rate =  "Rs.122900";
    rate1.innerHTML = gb256Rate;
    rate2.innerHTML = gb256Rate;
    rate3.innerHTML = gb256Rate;

    const delgn256 = "RS.1,29,900";
    delrate1.innerHTML = delgn256;
    delrate2.innerHTML = delgn256;
    delrate3.innerHTML = delgn256;

    
})

storagebtns3.addEventListener('click', () => {
    storagebtns3.classList.add('main-btn')
    storagebtns1.classList.remove('main-btn');
    storagebtns2.classList.remove('main-btn');
    storagebtns4.classList.remove('main-btn');
    storage.innerHTML = "512 GB";
    storage1.innerHTML = "512 GB";
    storage2.innerHTML = "512 GB";
    storage3.innerHTML = "512 GB";
    storage4.innerHTML = "512 GB";
    storage5.innerHTML = "512 GB";
    storage6.innerHTML = "512 GB";



     const gb512Rate =  "Rs.134900";
    rate1.innerHTML = gb512Rate;
    rate2.innerHTML = gb512Rate;
    rate3.innerHTML = gb512Rate;

    const delgn512 = "RS.1,49,900";
    delrate1.innerHTML = delgn512;
    delrate2.innerHTML = delgn512;
    delrate3.innerHTML = delgn512;

})

storagebtns4.addEventListener('click', () => {
    storagebtns4.classList.add('main-btn')
    storagebtns1.classList.remove('main-btn');
    storagebtns2.classList.remove('main-btn');
    storagebtns3.classList.remove('main-btn');
    storage.innerHTML = "1 TB";
    storage1.innerHTML = "1 TB";
    storage2.innerHTML = "1 TB";
    storage3.innerHTML = "1 TB";
    storage4.innerHTML = "1 TB";
    storage5.innerHTML = "1 TB";
    storage6.innerHTML = "1 TB";



    const tb1Rate =  "Rs.162900";
    rate1.innerHTML = tb1Rate;
    rate2.innerHTML = tb1Rate;
    rate3.innerHTML = tb1Rate;

    const deltb1 = "RS.1,69,900";
    delrate1.innerHTML = deltb1;
    delrate2.innerHTML = deltb1;
    delrate3.innerHTML = deltb1;

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
































































