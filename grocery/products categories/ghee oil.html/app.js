//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})

//event listener nav close


const blendedItems = document.querySelector('.blended-items');
const gheeItems = document.querySelector('.ghee-items')
const all =document.querySelector('.all');
console.log(all)
const items1 = document.getElementById('items-1');
const items2 = document.getElementById('items-2');
const items3 = document.getElementById('items-3');
const items4 = document.getElementById('items-4');
const items5 = document.getElementById('items-5');
const items6 = document.getElementById('items-6');
const items7 = document.getElementById('items-7');
const items8 = document.getElementById('items-8');
const items9 = document.getElementById('items-9');

items1.addEventListener('click',()=>
{
    
    all.style.display="grid";
    
})
items2.addEventListener('click',() =>
{
    //remove items
    all.style.display ="none";
    gheeItems.style.display="none"
    //add items
    blendedItems.style.display="grid"
})
items3.addEventListener('click',()=>
{
    //remove items
    all.style.display ="none";
     blendedItems.style.display="none"
     //add items
    gheeItems.style.display="grid"
   
})











//function

function itemsremove()
{
    allItems.style.display="none";
}