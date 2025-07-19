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

const productcontainer1 =  document.getElementsByClassName('inch50')[0];
const productcontainer2 =  document.getElementsByClassName('smart4k')[0];
const productcontainer3 = document.getElementsByClassName('Qled')[0];
const productcontainer4 = document.getElementsByClassName('inch55')[0];
const productcontainer5 = document.getElementsByClassName('inch43')[0];








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

   //animation set
   animate.style.left = "30px";

   //scroll left
      productcontainer1.scrollLeft = 0;
})



//second btn second container

select2.addEventListener('click',() => {
   productcontainer1.style.display = "none";
   productcontainer2.style.display = "flex";
   productcontainer3.style.display = "none";
   productcontainer4.style.display = "none";
   productcontainer5.style.display = "none";

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
   animate.style.left = "400px";
   productcontainer4.scrollLeft = 0;
})



//fifth btn fifth container

select5.addEventListener('click', () => {
    productcontainer1.style.display="none";
   productcontainer2.style.display = "none";
   productcontainer3.style.display = "none";
   productcontainer4.style.display = "none";
   productcontainer5.style.display = "flex";
   animate.style.left = "530px";
   productcontainer5.scrollLeft = 0;
})