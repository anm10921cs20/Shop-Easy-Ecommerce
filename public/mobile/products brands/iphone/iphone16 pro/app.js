//app nav bars container
//display change method

//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})

//event listener nav close


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











