window.addEventListener('DOMContentLoaded', () => {

    grocerycart();

})


const groceryContainer = document.getElementsByClassName('grocery')[0];


function grocerycart()
{
    if (containercartBox1.children.length <= 0) {
        containercartBox1.innerHTML = emptydetails1;
        return
    }
    else
    {
        const productsdetails = document.createElement('div');
        productsdetails.classList.add('productsamt');
        groceryContainer.append(productsdetails);
    }
}


// grocery shopping data recived

