//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})

//event listener nav close




//telivison

//all product container select

const productcontainer1 = document.getElementsByClassName('inch50')[0];
const productcontainer2 = document.getElementsByClassName('smart4k')[0];
const productcontainer3 = document.getElementsByClassName('Qled')[0];
const productcontainer4 = document.getElementsByClassName('inch55')[0];
const productcontainer5 = document.getElementsByClassName('inch43')[0];

// all the containers see more btns


const productmorebtn1 = document.getElementsByClassName('inch50-btn')[0];
const productmorebtn2 = document.getElementsByClassName('smart4k-btn')[0];
const productmorebtn3 = document.getElementsByClassName('Qled-btn')[0];
const productmorebtn4 = document.getElementsByClassName('inch55-btn')[0];
const productmorebtn5 = document.getElementsByClassName('inch43-btn')[0];








//all the container selection

const select1 = document.getElementsByClassName('products-type1')[0];
const select2 = document.getElementsByClassName('products-type2')[0];
const select3 = document.getElementsByClassName('products-type3')[0];
const select4 = document.getElementsByClassName('products-type4')[0];
const select5 = document.getElementsByClassName('products-type5')[0];






//animate function active

const animate = document.getElementsByClassName('animate')[0];






//function process

//first btn first container

select1.addEventListener('click', () => {

   //container display show or hide
   productcontainer1.style.display = "flex";
   productcontainer2.style.display = "none";
   productcontainer3.style.display = "none";
   productcontainer4.style.display = "none";
   productcontainer5.style.display = "none";


   //btn concept more 

   productmorebtn1.style.display = "block"
   productmorebtn2.style.display = "none"
   productmorebtn3.style.display = "none"
   productmorebtn4.style.display = "none"
   productmorebtn5.style.display = "none"

   //animation set
   animate.style.left = "30px";

   //scroll left
   productcontainer1.scrollLeft = 0;
})



//second btn second container

select2.addEventListener('click', () => {
   productcontainer1.style.display = "none";
   productcontainer2.style.display = "flex";
   productcontainer3.style.display = "none";
   productcontainer4.style.display = "none";
   productcontainer5.style.display = "none";


   productmorebtn1.style.display = "none"
   productmorebtn2.style.display = "block"
   productmorebtn3.style.display = "none"
   productmorebtn4.style.display = "none"
   productmorebtn5.style.display = "none"


   animate.style.left = "155px";
   productcontainer2.scrollLeft = 0;
})



//third btn third container

select3.addEventListener('click', () => {
   productcontainer1.style.display = "none";
   productcontainer2.style.display = "none";
   productcontainer3.style.display = "flex";
   productcontainer4.style.display = "none";
   productcontainer5.style.display = "none";


   productmorebtn1.style.display = "none"
   productmorebtn2.style.display = "none"
   productmorebtn3.style.display = "block"
   productmorebtn4.style.display = "none"
   productmorebtn5.style.display = "none"




   animate.style.left = "280px";
   productcontainer3.scrollLeft = 0;
})


//fourth btn fourth container

select4.addEventListener('click', () => {
   productcontainer1.style.display = "none";
   productcontainer2.style.display = "none";
   productcontainer3.style.display = "none";
   productcontainer4.style.display = "flex";
   productcontainer5.style.display = "none";

   productmorebtn1.style.display = "none"
   productmorebtn2.style.display = "none"
   productmorebtn3.style.display = "none"
   productmorebtn4.style.display = "block"
   productmorebtn5.style.display = "none"


   animate.style.left = "400px";
   productcontainer4.scrollLeft = 0;
})



//fifth btn fifth container

select5.addEventListener('click', () => {
   productcontainer1.style.display = "none";
   productcontainer2.style.display = "none";
   productcontainer3.style.display = "none";
   productcontainer4.style.display = "none";
   productcontainer5.style.display = "flex";


   productmorebtn1.style.display = "none"
   productmorebtn2.style.display = "none"
   productmorebtn3.style.display = "none"
   productmorebtn4.style.display = "none"
   productmorebtn5.style.display = "block"


   animate.style.left = "530px";
   productcontainer5.scrollLeft = 0;
})




//fridge

//all product container select

const productcontainer11 = document.getElementsByClassName('double-door')[0];
const productcontainer12 = document.getElementsByClassName('single-door')[0];
const productcontainer13 = document.getElementsByClassName('deep-freezers')[0];
const productcontainer14 = document.getElementsByClassName('side-by-side')[0];

//all the containers see more btns



const productmorebtn11 = document.getElementsByClassName('inch50-btn')[1];
const productmorebtn12 = document.getElementsByClassName('smart4k-btn')[1];
const productmorebtn13 = document.getElementsByClassName('Qled-btn')[1];
const productmorebtn14 = document.getElementsByClassName('inch55-btn')[1];






//all the container selection

const select11 = document.getElementsByClassName('products-type1')[1];
const select12 = document.getElementsByClassName('products-type2')[1];
const select13 = document.getElementsByClassName('products-type3')[1];
const select14 = document.getElementsByClassName('products-type4')[1];






//animate function active

const animate1 = document.getElementsByClassName('animate')[1];






//function process

//first btn first container

select11.addEventListener('click', () => {

   //container display show or hide
   productcontainer11.style.display = "flex";
   productcontainer12.style.display = "none";
   productcontainer13.style.display = "none";
   productcontainer14.style.display = "none";

   //button see more

   productmorebtn11.style.display = "block"
   productmorebtn12.style.display = "none"
   productmorebtn13.style.display = "none"
   productmorebtn14.style.display = "none"

   //animation set
   animate1.style.left = "30px";

   //scroll left
   productcontainer11.scrollLeft = 0;
})



//second btn second container

select12.addEventListener('click', () => {
   productcontainer11.style.display = "none";
   productcontainer12.style.display = "flex";
   productcontainer13.style.display = "none";
   productcontainer14.style.display = "none";


   productmorebtn11.style.display = "none"
   productmorebtn12.style.display = "block"
   productmorebtn13.style.display = "none"
   productmorebtn14.style.display = "none"


   animate1.style.left = "155px";
   productcontainer12.scrollLeft = 0;
})



//third btn third container

select13.addEventListener('click', () => {
   productcontainer11.style.display = "none";
   productcontainer12.style.display = "none";
   productcontainer13.style.display = "flex";
   productcontainer14.style.display = "none";



    productmorebtn11.style.display = "none"
   productmorebtn12.style.display = "none"
   productmorebtn13.style.display = "block"
   productmorebtn14.style.display = "none"

   animate1.style.left = "280px";
   productcontainer13.scrollLeft = 0;
})


//fourth btn fourth container

select14.addEventListener('click', () => {
   productcontainer11.style.display = "none";
   productcontainer12.style.display = "none";
   productcontainer13.style.display = "none";
   productcontainer14.style.display = "flex";


    productmorebtn11.style.display = "none"
   productmorebtn12.style.display = "none"
   productmorebtn13.style.display = "none"
   productmorebtn14.style.display = "block"


   animate1.style.left = "400px";
   productcontainer14.scrollLeft = 0;
})




//washing machines

//all product container select

const productcontainer21 = document.getElementsByClassName('lg')[0];
const productcontainer22 = document.getElementsByClassName('ifb')[0];
const productcontainer23 = document.getElementsByClassName('semi')[0];
const productcontainer24 = document.getElementsByClassName('samsung')[0];
const productcontainer25 = document.getElementsByClassName('fully')[0];


//all the containers see more btns



const productmorebtn21 = document.getElementsByClassName('inch50-btn')[2];
const productmorebtn22 = document.getElementsByClassName('smart4k-btn')[2];
const productmorebtn23 = document.getElementsByClassName('Qled-btn')[2];
const productmorebtn24 = document.getElementsByClassName('inch55-btn')[2];
const productmorebtn25 = document.getElementsByClassName('inch43-btn')[1];







//all the container selection

const select21 = document.getElementsByClassName('products-type1')[2];
const select22 = document.getElementsByClassName('products-type2')[2];
const select23 = document.getElementsByClassName('products-type3')[2];
const select24 = document.getElementsByClassName('products-type4')[2];
const select25 = document.getElementsByClassName('products-type5')[1];







//animate function active

const animate2 = document.getElementsByClassName('animate')[2];






//function process

//first btn first container

select21.addEventListener('click', () => {

   //container display show or hide
   productcontainer21.style.display = "flex";
   productcontainer22.style.display = "none";
   productcontainer23.style.display = "none";
   productcontainer24.style.display = "none";
   productcontainer25.style.display = "none";


   //button see more

   productmorebtn21.style.display = "block"
   productmorebtn22.style.display = "none"
   productmorebtn23.style.display = "none"
   productmorebtn24.style.display = "none"
   productmorebtn25.style.display = "none"


   //animation set
   animate2.style.left = "30px";

   //scroll left
   productcontainer21.scrollLeft = 0;
})



//second btn second container

select22.addEventListener('click', () => {
   productcontainer21.style.display = "none";
   productcontainer22.style.display = "flex";
   productcontainer23.style.display = "none";
   productcontainer24.style.display = "none";
   productcontainer25.style.display = "none";



   productmorebtn21.style.display = "none"
   productmorebtn22.style.display = "block"
   productmorebtn23.style.display = "none"
   productmorebtn24.style.display = "none"
   productmorebtn25.style.display = "none"



   animate2.style.left = "155px";
   productcontainer22.scrollLeft = 0;
})



//third btn third container

select23.addEventListener('click', () => {
   productcontainer21.style.display = "none";
   productcontainer22.style.display = "none";
   productcontainer23.style.display = "flex";
   productcontainer24.style.display = "none";
   productcontainer25.style.display = "none";




   productmorebtn21.style.display = "none"
   productmorebtn22.style.display = "none"
   productmorebtn23.style.display = "block"
   productmorebtn24.style.display = "none"
   productmorebtn25.style.display = "none"


   animate2.style.left = "280px";
   productcontainer23.scrollLeft = 0;
})


//fourth btn fourth container

select24.addEventListener('click', () => {
   productcontainer21.style.display = "none";
   productcontainer22.style.display = "none";
   productcontainer23.style.display = "none";
   productcontainer24.style.display = "flex";
   productcontainer25.style.display = "none";



    productmorebtn21.style.display = "none"
   productmorebtn22.style.display = "none"
   productmorebtn23.style.display = "none"
   productmorebtn24.style.display = "block"
   productmorebtn25.style.display = "none"



   animate2.style.left = "400px";
   productcontainer24.scrollLeft = 0;
})


//fifth btn fifth container

select25.addEventListener('click', () => {
   productcontainer21.style.display = "none";
   productcontainer22.style.display = "none";
   productcontainer23.style.display = "none";
   productcontainer24.style.display = "none";
   productcontainer25.style.display = "flex";


   productmorebtn21.style.display = "none"
   productmorebtn22.style.display = "none"
   productmorebtn23.style.display = "none"
   productmorebtn24.style.display = "none"
   productmorebtn25.style.display = "block"


   animate2.style.left = "530px";
   productcontainer25.scrollLeft = 0;
})


//air conditioner



