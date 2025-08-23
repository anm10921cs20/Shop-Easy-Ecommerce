var data = window.localStorage.getItem('order');

console.log(data);

var details = JSON.parse(data);


var names = details.name;
var img = details.img;
var brand = details.brand;
var price = details.price;


console.log(names);
console.log(img);
console.log(brand);
console.log(price);



    const values = `<div class="cart-content">
        <div class="cart-item">
            <div class="cart-img">
                <img class="cart-img-imges" src="${img}" alt="order-img">
            </div>
            <div class="cart-details">
               <div class="brand">${brand}</div>
               <div class="names">${names}</div>
               <div class="cart-price">
            ${price}
            </div>
            </div>
        
            <ion-icon name="trash" class="cart-remove"></ion-icon>
            
            
        </div>

    </div>
    `;

   
    const stores = values;
    document.body.innerHTML = stores;


    const closed = document.querySelector('.cart-remove');
    closed.addEventListener('click', () => {
        this.parentElement.remove()
    })



    console.log(sessionStorage, null)

   const datas = JSON.stringify(sessionStorage);
   const valu = JSON.parse(datas);


    document.body.innerText =  valu;


sessionStorage.setItem('order', 'mahan')
