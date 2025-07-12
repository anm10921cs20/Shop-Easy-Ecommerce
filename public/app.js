//app nav bars container
//display change method

//display function event

var openBar = document.getElementById('app-nav-bars');
var openBtn = document.getElementById('app-bars');

//event listener nav open
openBtn.addEventListener('click', () => {
    openBar.style.marginLeft = "0px";
    document.body.style.opacity = "0.9";
})

//event listener nav close

var closeBtn = document.getElementById('nav-close');
closeBtn.addEventListener('click', () =>
{
    openBar.style.marginLeft = "-1000px";
    openBar.style.transitionDuration = "0.9s";
})

const interval = setInterval(() => {
const time = new Date();
const value = time.toLocaleString();
document.getElementById('time').innerText = value;
},1000)


    






