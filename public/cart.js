



//add items in cart

var cartadd = document.getElementsByClassName('button');

for (let i = 0; i < cartadd.length; i++) {
    var button = cartadd[i];
    button.addEventListener('click', additemsclicked)
}

var cartheart = document.getElementsByClassName('fa-heart');
for (let i = 0; i < cartheart.length; i++) {
    var heart = cartheart[i];
    heart.addEventListener('click', heartclicked)
}

// add items to heart like

function heartclicked(event) {
    var heart = event.target;
    var heartitemsvalue = heart.parentElement;




    var hearts = [];

    var heartdetails = {
        anchor: heartitemsvalue.parentElement.href,
        img: heartitemsvalue.getElementsByClassName('product-img')[0].src,
        brand: heartitemsvalue.getElementsByClassName('mobile-brand-name')[0].innerText,
        name: heartitemsvalue.getElementsByClassName('mobile-name')[0].innerText,
        price: heartitemsvalue.getElementsByClassName('rate')[0].innerText,
        delprice: heartitemsvalue.getElementsByClassName('rate-del')[0].innerText,
        percent: heartitemsvalue.getElementsByClassName('percentage')[0].innerText,
        bank: heartitemsvalue.getElementsByClassName('bank-details')[0].innerText,
        warrantybrand: heartitemsvalue.getElementsByClassName('waranty')[0].innerText,
        no: 1
    }


    if (JSON.parse(localStorage.getItem('heart')) === null) {
        hearts.push(heartdetails);
        const heartcontainer = JSON.stringify(hearts);
        localStorage.setItem('heart', heartcontainer);
    }
    else {
        const localhearts = JSON.parse(localStorage.getItem('heart'));
        localhearts.map(heartdata => {
            if (heartdetails.brand == heartdata.brand) {
                heartdetails.no = heartdetails.no + 1;
            }
            else {
                hearts.push(heartdata);
            }
        });
        hearts.push(heartdetails);
        localStorage.setItem('heart', JSON.stringify(hearts))
    }

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
    if (JSON.parse(localStorage.getItem('order')) === null) {
        items.push(datas);
        const sting = JSON.stringify(items);
        localStorage.setItem('order', sting);
    } else {
        const localItems = JSON.parse(localStorage.getItem('order'));
        localItems.map(data => {
            if (datas.brand == data.brand) {
                datas.no = datas.no + 1;
            } else {
                items.push(data)
            }
        });
        items.push(datas)
        localStorage.setItem('order', JSON.stringify(items))

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


//cart btn






  








var counts = document.getElementById('cart-count');
var countvalue = JSON.parse(localStorage.getItem('order')).length;
counts.innerText = countvalue;























//cart






