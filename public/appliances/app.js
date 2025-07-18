//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})

//event listener nav close

//all product container select

const productcontainer1 =  document.getElementsByClassName('inch50')[0];
const productcontainer2 =  document.getElementsByClassName('smart4k')[0];






//all the container selection

const select1 = document.getElementsByClassName('products-type1')[0];
const select2 = document.getElementsByClassName('products-type2')[0];





//animate function active

const animate = document.getElementsByClassName('animate')[0];






//function process

//first btn first container

select1.addEventListener('click', () => {
productcontainer1.style.display = "flex";
   productcontainer2.style.display = "none";
   animate.style.left = "30px";
      productcontainer1.scrollLeft = 0;
})



//second btn second container

select2.addEventListener('click',() => {
   productcontainer1.style.display = "none";
   productcontainer2.style.display = "flex";
   animate.style.left = "155px";
   productcontainer2.scrollLeft = 0;
})

