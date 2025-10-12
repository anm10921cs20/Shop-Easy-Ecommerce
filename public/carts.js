

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
    
    var items1 = [];


    

    var datas1 = {
        name: shopitemsvalue.getElementsByClassName('mobile-name')[0].innerText.slice(0,28),
        img: shopitemsvalue.getElementsByClassName('product-img')[0].src,
        brand: shopitemsvalue.getElementsByClassName('mobile-brand-name')[0].innerText,
        price: shopitemsvalue.getElementsByClassName('rate')[0].innerText,
        no: 1
    };
    if (JSON.parse(localStorage.getItem('groceryorder')) === null) {
        items1.push(datas1);
        const stings = JSON.stringify(items1);
        localStorage.setItem('groceryorder', stings);
    } else {
        const localItems1 = JSON.parse(localStorage.getItem('groceryorder'));
        localItems1.map(datas => {
            if (datas1.price == datas.price) {
                var alertvalue = document.getElementById('alertcontainer');
                var paravalue = document.getElementById('para-alert');
                alertvalue.style.display = "flex"
                var counter = 3;
                var interval = setInterval(() => {
                    counter--;
                    if (counter > 0) {
                        clearInterval(interval);
                        alertvalue.style.display = "none";
                        paravalue.innerText = "Already Added";
                    }
                }, 1000)
                
            } else {
                items1.push(datas)
            }
        });
        items1.push(datas1)
        localStorage.setItem('groceryorder', JSON.stringify(items1))

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
   
}




var counts = document.getElementById('cart-count');
var countvalue = JSON.parse(localStorage.getItem('groceryorder')).length;
console.log(countvalue);

counts.innerText = countvalue;

