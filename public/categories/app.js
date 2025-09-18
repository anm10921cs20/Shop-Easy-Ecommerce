var openBtn = document.getElementById('app-arrows');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
})




// main container
const grocerys = document.getElementsByClassName('box1')[0];
const fashion = document.getElementsByClassName('box1')[1];
const appliances = document.getElementsByClassName('box1')[2];
const mobiles = document.getElementsByClassName('box1')[3];
const smargadgets = document.getElementsByClassName('box1')[4];
const beauty = document.getElementsByClassName('box1')[5];
const baby = document.getElementsByClassName('box1')[6];
const food = document.getElementsByClassName('box1')[7];
const furniture = document.getElementsByClassName('box1')[8];
const vehicle = document.getElementsByClassName('box1')[9];



//details container

const groceryContainer = document.getElementsByClassName('grocerys')[0];
const fashionContainer = document.getElementsByClassName('fashion')[0];
const appliancesContainer = document.getElementsByClassName('appliances')[0];
const mobilesContainer = document.getElementsByClassName('mobiles')[0];
const SmartgadgetsContainer = document.getElementsByClassName('smartgadgets')[0];
const beautyContainer = document.getElementsByClassName('beauty')[0];
const babyContainer = document.getElementsByClassName('baby')[0];
const foodContainer = document.getElementsByClassName('food')[0];
const furnitureContainer = document.getElementsByClassName('furniture')[0];
const vehicleContainer = document.getElementsByClassName('vehicle')[0];


// animations 

const animations = document.getElementsByClassName('animatee')[0];


// image containers

const grocerysimg = document.getElementsByClassName('imgs')[0];
const fashionimg = document.getElementsByClassName('imgs')[1];
const appliancesimg = document.getElementsByClassName('imgs')[2];
const mobilesimg = document.getElementsByClassName('imgs')[3];
const smargadgetsimg = document.getElementsByClassName('imgs')[4];
const beautyimg = document.getElementsByClassName('imgs')[5];
const babyimg = document.getElementsByClassName('imgs')[6];
const foodimg = document.getElementsByClassName('imgs')[7];
const furnitureimg = document.getElementsByClassName('imgs')[8];
const vehicleimg = document.getElementsByClassName('imgs')[9];




// grocery 

// btn create

grocerys.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "block";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    

    // animation

    animations.style.left = "0px"

    // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/445210277d67d933.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";
    


    // color manipulate

    grocerys.style.backgroundColor="#fff";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
    beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";


})



// fashion

// btn create

fashion.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "block";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "95px"

     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/8fc23bec44b65d51.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#fff";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
      beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";
})


// appliances

// btn create

appliances.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "block";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "190px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/10c27d1632843295.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#fff";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
      beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";
});


// mobiles


// btn create

mobiles.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "block";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "285px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/211dac4392c83a88.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#fff";
    smargadgets.style.backgroundColor="#f0f2f5";
      beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";
});

// smartgadgets

// btn create

smargadgets.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "block";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "380px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/3f39530400495732.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#fff";
      beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";
});


// beauty


// btn create

beauty.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "block";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "475px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/533c32095b518865.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
      beauty.style.backgroundColor="#fff";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";
});


// baby

// btn create

baby.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "block";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "570px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/67cd96af76266963.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
    beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#fff";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";
});


// food


// btn create

food.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "block";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "665px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/2591666033f07e80.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
    beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#fff";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#f0f2f5";
});

// furniture


// btn create

furniture.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "block";
    vehicleContainer.style.display = "none";

    // animation

    animations.style.left = "762px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/7fe39a9b9c06b55e.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/b2e015585b2f7e70.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
    beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#fff";
    vehicle.style.backgroundColor="#f0f2f5";
});


// vehicles



// btn create

vehicle.addEventListener('click', () => {

    // container block
    groceryContainer.style.display = "none";
    fashionContainer.style.display = "none";
    appliancesContainer.style.display = "none";
    mobilesContainer.style.display = "none";
    SmartgadgetsContainer.style.display = "none";
     beautyContainer.style.display = "none";
    babyContainer.style.display = "none";
    foodContainer.style.display = "none";
    furnitureContainer.style.display = "none";
    vehicleContainer.style.display = "block";

    // animation

    animations.style.left = "855px"



     // images manipulate

    grocerysimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/1612188b207e100a.jpg?q=60";
    fashionimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/a5c08ec92b5278f4.jpg?q=60";
    appliancesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/61768a5d94425980.jpg?q=60";
    mobilesimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/fec54aa2f6fe4c4e.jpg?q=60";
    smargadgetsimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/aa9e279e6e9e866b.jpg?q=60";
    beautyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/6a83c72124f74a4d.jpg?q=60";
    babyimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/e4eaec1eb0dcc72f.jpg?q=60";
    foodimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/9bf7aef688d11ccc.jpg?q=60";
    furnitureimg.src="https://rukminim1.flixcart.com/fk-p-flap/76/76/image/441e0e86a19330a6.jpg?q=60";
    vehicleimg.src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/96c70a2753e5949a.jpg?q=60";


    // color manipulate

    grocerys.style.backgroundColor="#f0f2f5";
    fashion.style.backgroundColor="#f0f2f5";
    appliances.style.backgroundColor="#f0f2f5";
    mobiles.style.backgroundColor="#f0f2f5";
    smargadgets.style.backgroundColor="#f0f2f5";
    beauty.style.backgroundColor="#f0f2f5";
    baby.style.backgroundColor="#f0f2f5";
    food.style.backgroundColor="#f0f2f5";
    furniture.style.backgroundColor="#f0f2f5";
    vehicle.style.backgroundColor="#fff";
});








