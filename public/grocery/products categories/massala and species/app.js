//app nav bars container
//display change method

//display function event



var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})



//product alert

const productsAlert = document.getElementById('product-alert')
const productscount = document.getElementById('alert-para');

//start this product details

productsAlert.style.display="block";
    productscount.innerText='65 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)



//image details id

const imgItems1 = document.getElementById('items-img1');
const imgItems2 = document.getElementById('items-img2')
const imgItems3 = document.getElementById('items-img3')
const imgItems4 = document.getElementById('items-img4')
const imgItems5 = document.getElementById('items-img5')
const imgItems6 = document.getElementById('items-img6')
const imgItems7 = document.getElementById('items-img7')
const imgItems8 = document.getElementById('items-img8')
const imgItems9 = document.getElementById('items-img9')

//default boreder

imgItems1.style.border="1px #000 solid";


//products items

const all =document.querySelector('.all');
const blendedItems = document.querySelector('.blended-items');
const gheeItems = document.querySelector('.ghee-items');
const sunflowerItems = document.querySelector('.sunflower-items');
const ricebranItems = document.querySelector('.ricebran-items');
const oliveoilItems = document.querySelector('.oliveoil-items');
const groundnutItems = document.querySelector('.groundnut-items');
const mustardItems = document.querySelector('.mustard-items');
const othersItems = document.querySelector('.others-items');





//first product items



const items1 = document.getElementById('items-1');
const items2 = document.getElementById('items-2');
const items3 = document.getElementById('items-3');
const items4 = document.getElementById('items-4');
const items5 = document.getElementById('items-5');
const items6 = document.getElementById('items-6');
const items7 = document.getElementById('items-7');
const items8 = document.getElementById('items-8');
const items9 = document.getElementById('items-9');

//add event listener 
//products open
var counter =1;
items1.addEventListener('click',()=>
{
    //remove items

     blendedItems.style.display="none";
      gheeItems.style.display="none";
      sunflowerItems.style.display="none";
        ricebranItems.style.display = "none";
        groundnutItems.style.display="none";
        oliveoilItems.style.display="none"
        mustardItems.style.display = "none";
        othersItems.style.display = "none";
    
    all.style.display="grid";

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='65 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="1px #000 solid";
    imgItems2.style.border="none";
    imgItems3.style.border="none";
    imgItems4.style.border="none";
    imgItems5.style.border="none";
    imgItems6.style.border="none";
    imgItems7.style.border="none";
    imgItems8.style.border="none";
    imgItems9.style.border="none";
    
})

items2.addEventListener('click',() =>
{
    // Scroll the absolutely positioned container to top
   

    //remove items
    all.style.display ="none";
    gheeItems.style.display="none";
    sunflowerItems.style.display="none";
    ricebranItems.style.display = "none";
    oliveoilItems.style.display = "none";
 groundnutItems.style.display="none";
        mustardItems.style.display = "none";
        othersItems.style.display = "none";
        
    //add items
    blendedItems.style.display="grid";

    // Ensure the container is scrollable and scroll to top
    blendedItems.style.overflowY = "scroll";
    blendedItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    blendedItems.scrollTop = 0;

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='7 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="1px #000 solid";
    imgItems3.style.border="none";
    imgItems4.style.border="none";
    imgItems5.style.border="none";
    imgItems6.style.border="none";
    imgItems7.style.border="none";
    imgItems8.style.border="none";
    imgItems9.style.border="none";
})
items3.addEventListener('click',()=>
{
    //remove items
    all.style.display ="none";
     blendedItems.style.display="none";
     sunflowerItems.style.display="none";
       ricebranItems.style.display = "none";
           oliveoilItems.style.display = "none";
            groundnutItems.style.display="none";
        mustardItems.style.display = "none";
        othersItems.style.display = "none";
     //add items
    gheeItems.style.display="grid"

     // Ensure the container is scrollable and scroll to top
    gheeItems.style.overflowY = "scroll";
    gheeItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    gheeItems.scrollTop = 0;

     //alert products value
    productsAlert.style.display="block";
    productscount.innerText='24 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)


    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="none";
    imgItems3.style.border="1px #000 solid";
    imgItems4.style.border="none";
    imgItems5.style.border="none";
    imgItems6.style.border="none";
    imgItems7.style.border="none";
    imgItems8.style.border="none";
    imgItems9.style.border="none";
   
})
items4.addEventListener('click',() =>
{
    // Scroll the absolutely positioned container to top
   

    //remove items
    all.style.display ="none";
    gheeItems.style.display="none";
      ricebranItems.style.display = "none";
    //add items
    blendedItems.style.display="none";
        oliveoilItems.style.display = "none";
         groundnutItems.style.display="none";
        mustardItems.style.display = "none";
        othersItems.style.display = "none";
    sunflowerItems.style.display="grid";


    // Ensure the container is scrollable and scroll to top
    sunflowerItems.style.overflowY = "scroll";
    sunflowerItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    sunflowerItems.scrollTop = 0;

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='22 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="none";
    imgItems3.style.border="none";
    imgItems4.style.border="1px #000 solid";
    imgItems5.style.border="none";
    imgItems6.style.border="none";
    imgItems7.style.border="none";
    imgItems8.style.border="none";
    imgItems9.style.border="none";
})
//items 5

items5.addEventListener('click',() =>
{
    // Scroll the absolutely positioned container to top
   

    //remove items
    all.style.display ="none";
    gheeItems.style.display="none";
    //add items
    blendedItems.style.display="none";
    sunflowerItems.style.display="none";
        oliveoilItems.style.display = "none";
         groundnutItems.style.display="none";
        mustardItems.style.display = "none";
        othersItems.style.display = "none";
    
    ricebranItems.style.display = "grid";


    // Ensure the container is scrollable and scroll to top
    ricebranItems.style.overflowY = "scroll";
    ricebranItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    ricebranItems.scrollTop = 0;

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='3 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="none";
    imgItems3.style.border="none";
    imgItems4.style.border="none";
    imgItems5.style.border="1px #000 solid";
    imgItems6.style.border="none";
    imgItems7.style.border="none";
    imgItems8.style.border="none";
    imgItems9.style.border="none";
})


//items 6

items6.addEventListener('click',() =>
{
    // Scroll the absolutely positioned container to top
   

    //remove items
    all.style.display ="none";
    gheeItems.style.display="none";
    //add items
    blendedItems.style.display="none";
    sunflowerItems.style.display="none";
    
    ricebranItems.style.display = "none";
     groundnutItems.style.display="none";
        mustardItems.style.display = "none";
        othersItems.style.display = "none";
    oliveoilItems.style.display = "grid";


    // Ensure the container is scrollable and scroll to top
    oliveoilItems.style.overflowY = "scroll";
    oliveoilItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    oliveoilItems.scrollTop = 0;

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='3 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="none";
    imgItems3.style.border="none";
    imgItems4.style.border="none";
    imgItems5.style.border="none";
    imgItems6.style.border="1px #000 solid";
    imgItems7.style.border="none";
    imgItems8.style.border="none";
    imgItems9.style.border="none";
})




//items 7
items7.addEventListener('click',() =>
{
    // Scroll the absolutely positioned container to top
   

    //remove items
    all.style.display ="none";
    gheeItems.style.display="none";
    //add items
    blendedItems.style.display="none";
    sunflowerItems.style.display="none";
    
    ricebranItems.style.display = "none";
    oliveoilItems.style.display = "none";
     groundnutItems.style.display="grid";
        mustardItems.style.display = "none";
        othersItems.style.display = "none";


    // Ensure the container is scrollable and scroll to top
    groundnutItems.style.overflowY = "scroll";
    groundnutItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    groundnutItems.scrollTop = 0;

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='4 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="none";
    imgItems3.style.border="none";
    imgItems4.style.border="none";
    imgItems5.style.border="none";
    imgItems6.style.border="none";
    imgItems7.style.border="1px #000 solid";
    imgItems8.style.border="none";
    imgItems9.style.border="none";
})





//items 8

items8.addEventListener('click',() =>
{
    // Scroll the absolutely positioned container to top
   

    //remove items
    all.style.display ="none";
    gheeItems.style.display="none";
    //add items
    blendedItems.style.display="none";
    sunflowerItems.style.display="none";
    
    ricebranItems.style.display = "none";
    oliveoilItems.style.display = "none";
     groundnutItems.style.display="none";
        mustardItems.style.display = "grid";
        othersItems.style.display = "none";


    // Ensure the container is scrollable and scroll to top
    mustardItems.style.overflowY = "scroll";
    mustardItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    mustardItems.scrollTop = 0;

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='1 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="none";
    imgItems3.style.border="none";
    imgItems4.style.border="none";
    imgItems5.style.border="none";
    imgItems6.style.border="none";
    imgItems7.style.border="none";
    imgItems8.style.border="1px #000 solid";
    imgItems9.style.border="none";
})




//items 9

items9.addEventListener('click',() =>
{
    // Scroll the absolutely positioned container to top
   

    //remove items
    all.style.display ="none";
    gheeItems.style.display="none";
    //add items
    blendedItems.style.display="none";
    sunflowerItems.style.display="none";
    
    ricebranItems.style.display = "none";
    oliveoilItems.style.display = "none";
     groundnutItems.style.display="none";
        mustardItems.style.display = "none";
        othersItems.style.display = "grid";


    // Ensure the container is scrollable and scroll to top
    othersItems.style.overflowY = "scroll";
    othersItems.style.height = "810px"; // Set a fixed height (adjust as needed)
    othersItems.scrollTop = 0;

    //alert products value
    productsAlert.style.display="block";
    productscount.innerText='7 Products';

    var interval = setInterval(function(){
        counter--;
        if(counter<0)
        {
            clearInterval(interval);
            productsAlert.style.display="none";
        }
    },1000)

    //border off
    imgItems1.style.border="none";
    imgItems2.style.border="none";
    imgItems3.style.border="none";
    imgItems4.style.border="none";
    imgItems5.style.border="none";
    imgItems6.style.border="none";
    imgItems7.style.border="none";
    imgItems8.style.border="none";
    imgItems9.style.border="1px #000 solid";
})
















//function

function itemsremove()
{
    allItems.style.display="none";
}







//cart





