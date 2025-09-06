







var cartheart = document.getElementsByClassName('fa-heart');
for (let i = 0; i < cartheart.length; i++) {
    var heart = cartheart[i];
    heart.addEventListener('click', heartclicked)
}

<<<<<<< HEAD
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



=======
//add items cart infucntion
>>>>>>> 81f0b876751a4917ed9b9b9a41968b4d4f4bad67



//cart btn















<<<<<<< HEAD
=======
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







var counts = document.getElementById('cart-count');
var countvalue = JSON.parse(localStorage.getItem('order')).length;
counts.innerText = countvalue;
>>>>>>> 81f0b876751a4917ed9b9b9a41968b4d4f4bad67























//cart






