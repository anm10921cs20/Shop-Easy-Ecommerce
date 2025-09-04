

//add items in cart

var cartadd = document.getElementsByClassName('button');

for (let i = 0; i < cartadd.length; i++) {
    var button = cartadd[i];
    button.addEventListener('click', additemsclicked)
}


//add items cart infucntion

function additemsclicked(event) {
    var button = event.target;
    var shopitemsvalue = button.parentElement;
    
    var items = [];




    var datas = {
        name: shopitemsvalue.getElementsByClassName('mobile-name')[0].innerText,
        img: shopitemsvalue.getElementsByClassName('product-img')[0].src,
        brand: shopitemsvalue.getElementsByClassName('mobile-brand-name')[0].innerText,
        price: shopitemsvalue.getElementsByClassName('rate')[0].innerText,
        no: 1
    };
    if (JSON.parse(localStorage.getItem('groceryorder')) === null) {
        items.push(datas);
        const sting = JSON.stringify(items);
        localStorage.setItem('groceryorder', sting);
    } else {
        const localItems = JSON.parse(localStorage.getItem('groceryorder'));
        localItems.map(data => {
            if (datas.brand == data.brand) {
                datas.no = datas.no + 1;
            } else {
                items.push(data)
            }
        });
        items.push(datas)
        localStorage.setItem('groceryorder', JSON.stringify(items))

    }





    var alertvalue = document.getElementById('alertcontainer');
    alertvalue.style.display = "flex"
    var counter = 3;
    var interval = setInterval(() => {
        counter--;
        if (counter > 0) {
            clearInterval(interval);
            alertvalue.style.display = "none";
        }
    }, 1000)
    totalvalueupdate()
}