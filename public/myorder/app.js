var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
})

const orderdata = localStorage.getItem('neworder');

const orders = JSON.parse(orderdata);

// Remove the outer forEach loop and rename 'data' to 'item' for clarity
orders.forEach((item) => {


    const float = JSON.parse(item);
    float.forEach((order) => {
        const orderitems = document.getElementsByClassName('orders-items')[0];
        const div = document.createElement('div');
        div.classList.add('order-item');
        div.innerHTML = `
    <div class="order-item_img">
        <img src="${order.img}" alt="product image">
    </div>
    <div class="order-item_details">
        <h5 class="order-item_title">${order.name}</h5>
        <p class="order-item_price">$${order.price}</p>
    </div>
    `;
        orderitems.appendChild(div);
    })


})
