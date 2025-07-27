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


//all product container select

const productcontainer31 = document.getElementsByClassName('ton1')[0];
const productcontainer32 = document.getElementsByClassName('ton1-5')[0];
const productcontainer33 = document.getElementsByClassName('ton2')[0];
const productcontainer34 = document.getElementsByClassName('top')[0];
const productcontainer35 = document.getElementsByClassName('energy')[0];


//all the containers see more btns



const productmorebtn31 = document.getElementsByClassName('inch50-btn')[3];
const productmorebtn32 = document.getElementsByClassName('smart4k-btn')[3];
const productmorebtn33 = document.getElementsByClassName('Qled-btn')[3];
const productmorebtn34 = document.getElementsByClassName('inch55-btn')[3];
const productmorebtn35 = document.getElementsByClassName('inch43-btn')[2];







//all the container selection

const select31 = document.getElementsByClassName('products-type1')[3];
const select32 = document.getElementsByClassName('products-type2')[3];
const select33 = document.getElementsByClassName('products-type3')[3];
const select34 = document.getElementsByClassName('products-type4')[3];
const select35 = document.getElementsByClassName('products-type5')[2];







//animate function active

const animate3 = document.getElementsByClassName('animate')[3];






//function process

//first btn first container

select31.addEventListener('click', () => {

   //container display show or hide
   productcontainer31.style.display = "flex";
   productcontainer32.style.display = "none";
   productcontainer33.style.display = "none";
   productcontainer34.style.display = "none";
   productcontainer35.style.display = "none";


   //button see more

   productmorebtn31.style.display = "block"
   productmorebtn32.style.display = "none"
   productmorebtn33.style.display = "none"
   productmorebtn34.style.display = "none"
   productmorebtn35.style.display = "none"


   //animation set
   animate3.style.left = "30px";

   //scroll left
   productcontainer31.scrollLeft = 0;
})



//second btn second container

select32.addEventListener('click', () => {
   productcontainer31.style.display = "none";
   productcontainer32.style.display = "flex";
   productcontainer33.style.display = "none";
   productcontainer34.style.display = "none";
   productcontainer35.style.display = "none";



   productmorebtn31.style.display = "none"
   productmorebtn32.style.display = "block"
   productmorebtn33.style.display = "none"
   productmorebtn34.style.display = "none"
   productmorebtn35.style.display = "none"



   animate3.style.left = "155px";
   productcontainer32.scrollLeft = 0;
})



//third btn third container

select33.addEventListener('click', () => {
   productcontainer31.style.display = "none";
   productcontainer32.style.display = "none";
   productcontainer33.style.display = "flex";
   productcontainer34.style.display = "none";
   productcontainer35.style.display = "none";




   productmorebtn31.style.display = "none"
   productmorebtn32.style.display = "none"
   productmorebtn33.style.display = "block"
   productmorebtn34.style.display = "none"
   productmorebtn35.style.display = "none"


   animate3.style.left = "280px";
   productcontainer33.scrollLeft = 0;
})


//fourth btn fourth container

select34.addEventListener('click', () => {
   productcontainer31.style.display = "none";
   productcontainer32.style.display = "none";
   productcontainer33.style.display = "none";
   productcontainer34.style.display = "flex";
   productcontainer35.style.display = "none";



    productmorebtn31.style.display = "none"
   productmorebtn32.style.display = "none"
   productmorebtn33.style.display = "none"
   productmorebtn34.style.display = "block"
   productmorebtn35.style.display = "none"



   animate3.style.left = "400px";
   productcontainer34.scrollLeft = 0;
})


//fifth btn fifth container

select35.addEventListener('click', () => {
   productcontainer31.style.display = "none";
   productcontainer32.style.display = "none";
   productcontainer33.style.display = "none";
   productcontainer34.style.display = "none";
   productcontainer35.style.display = "flex";


   productmorebtn31.style.display = "none"
   productmorebtn32.style.display = "none"
   productmorebtn33.style.display = "none"
   productmorebtn34.style.display = "none"
   productmorebtn35.style.display = "block"


   animate3.style.left = "530px";
   productcontainer35.scrollLeft = 0;
})


// fans

//all product container select

const productcontainer41 = document.getElementsByClassName('fans')[0];
const productcontainer42 = document.getElementsByClassName('ped-fans')[0];
const productcontainer43 = document.getElementsByClassName('celling')[0];
const productcontainer44 = document.getElementsByClassName('tables')[0];

//all the containers see more btns



const productmorebtn41 = document.getElementsByClassName('inch50-btn')[4];
const productmorebtn42 = document.getElementsByClassName('smart4k-btn')[4];
const productmorebtn43 = document.getElementsByClassName('Qled-btn')[4];
const productmorebtn44 = document.getElementsByClassName('inch55-btn')[4];






//all the container selection

const select41 = document.getElementsByClassName('products-type1')[4];
const select42 = document.getElementsByClassName('products-type2')[4];
const select43 = document.getElementsByClassName('products-type3')[4];
const select44 = document.getElementsByClassName('products-type4')[4];







//animate function active

const animate4 = document.getElementsByClassName('animate')[4];






//function process

//first btn first container

select41.addEventListener('click', () => {

   //container display show or hide
   productcontainer41.style.display = "flex";
   productcontainer42.style.display = "none";
   productcontainer43.style.display = "none";
   productcontainer44.style.display = "none";

   //button see more

   productmorebtn41.style.display = "block"
   productmorebtn42.style.display = "none"
   productmorebtn43.style.display = "none"
   productmorebtn44.style.display = "none"

   //animation set
   animate4.style.left = "30px";

   //scroll left
   productcontainer41.scrollLeft = 0;
})



//second btn second container

select42.addEventListener('click', () => {
   productcontainer41.style.display = "none";
   productcontainer42.style.display = "flex";
   productcontainer43.style.display = "none";
   productcontainer44.style.display = "none";


   productmorebtn41.style.display = "none"
   productmorebtn42.style.display = "block"
   productmorebtn43.style.display = "none"
   productmorebtn44.style.display = "none"


   animate4.style.left = "155px";
   productcontainer42.scrollLeft = 0;
})



//third btn third container

select43.addEventListener('click', () => {
   productcontainer41.style.display = "none";
   productcontainer42.style.display = "none";
   productcontainer43.style.display = "flex";
   productcontainer44.style.display = "none";



    productmorebtn41.style.display = "none"
   productmorebtn42.style.display = "none"
   productmorebtn43.style.display = "block"
   productmorebtn44.style.display = "none"

   animate4.style.left = "280px";
   productcontainer43.scrollLeft = 0;
})


//fourth btn fourth container

select44.addEventListener('click', () => {
   productcontainer41.style.display = "none";
   productcontainer42.style.display = "none";
   productcontainer43.style.display = "none";
   productcontainer44.style.display = "flex";


    productmorebtn41.style.display = "none"
   productmorebtn42.style.display = "none"
   productmorebtn43.style.display = "none"
   productmorebtn44.style.display = "block"


   animate4.style.left = "400px";
   productcontainer44.scrollLeft = 0;
})


//Kitchen Appliances



//all product container select

const productcontainer51 = document.getElementsByClassName('airs')[0];
const productcontainer52 = document.getElementsByClassName('breakfast')[0];
const productcontainer53 = document.getElementsByClassName('cook')[0];
const productcontainer54 = document.getElementsByClassName('juicer')[0];

//all the containers see more btns



const productmorebtn51 = document.getElementsByClassName('inch50-btn')[5];
const productmorebtn52 = document.getElementsByClassName('smart4k-btn')[5];
const productmorebtn53 = document.getElementsByClassName('Qled-btn')[5];
const productmorebtn54 = document.getElementsByClassName('inch55-btn')[5];






//all the container selection

const select51 = document.getElementsByClassName('products-type1')[5];
const select52 = document.getElementsByClassName('products-type2')[5];
const select53 = document.getElementsByClassName('products-type3')[5];
const select54 = document.getElementsByClassName('products-type4')[5];







//animate function active

const animate5 = document.getElementsByClassName('animate')[5];






//function process

//first btn first container

select51.addEventListener('click', () => {

   //container display show or hide
   productcontainer51.style.display = "flex";
   productcontainer52.style.display = "none";
   productcontainer53.style.display = "none";
   productcontainer54.style.display = "none";

   //button see more

   productmorebtn51.style.display = "block"
   productmorebtn52.style.display = "none"
   productmorebtn53.style.display = "none"
   productmorebtn54.style.display = "none"

   //animation set
   animate5.style.left = "30px";

   //scroll left
   productcontainer51.scrollLeft = 0;
})



//second btn second container

select52.addEventListener('click', () => {
   productcontainer51.style.display = "none";
   productcontainer52.style.display = "flex";
   productcontainer53.style.display = "none";
   productcontainer54.style.display = "none";


   productmorebtn51.style.display = "none"
   productmorebtn52.style.display = "block"
   productmorebtn53.style.display = "none"
   productmorebtn54.style.display = "none"


   animate5.style.left = "155px";
   productcontainer52.scrollLeft = 0;
})



//third btn third container

select53.addEventListener('click', () => {
   productcontainer51.style.display = "none";
   productcontainer52.style.display = "none";
   productcontainer53.style.display = "flex";
   productcontainer54.style.display = "none";



    productmorebtn51.style.display = "none"
   productmorebtn52.style.display = "none"
   productmorebtn53.style.display = "block"
   productmorebtn54.style.display = "none"

   animate5.style.left = "280px";
   productcontainer53.scrollLeft = 0;
})


//fourth btn fourth container

select54.addEventListener('click', () => {
   productcontainer51.style.display = "none";
   productcontainer52.style.display = "none";
   productcontainer53.style.display = "none";
   productcontainer54.style.display = "flex";


    productmorebtn51.style.display = "none"
   productmorebtn52.style.display = "none"
   productmorebtn53.style.display = "none"
   productmorebtn54.style.display = "block"


   animate5.style.left = "400px";
   productcontainer54.scrollLeft = 0;
})


//home Apliances




