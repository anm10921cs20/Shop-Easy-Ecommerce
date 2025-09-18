var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.location.replace("../index.html")
})

const firebaseConfig = {
    apiKey: "AIzaSyA2OdKypmjrY-X7XKId64MndF4HtIRe-bs",
    authDomain: "shopeasy-login.firebaseapp.com",
    databaseURL: "https://shopeasy-login-default-rtdb.firebaseio.com",
    projectId: "shopeasy-login",
    storageBucket: "shopeasy-login.firebasestorage.app",
    messagingSenderId: "255206950436",
    appId: "1:255206950436:web:2e972fbaf4ae6b8f1c7ab1",
    measurementId: "G-YDHQQF7XN8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();



db.ref('maincart/' + localStorage.getItem('userid') + localStorage.getItem('nameid'))
    .get('value')
    .then((snapshot) => {
        const order = snapshot.val();


        const maindata = Object.entries(order);


        maindata.forEach((data) => {

            const vl = data[1]



            var orders = vl.order;



            const add = Object.values(vl)



            const datass = JSON.parse(add[2])
            const date = data[1].date;
            const two = 1758103624002;

            localStorage.setItem('datestore',two)
           
            

            const datereg = parseInt(localStorage.getItem('datestore'));
            console.log(datereg);
            

            // update time delivery

            const TWO_DAYS = 2 * 24 * 60 * 60 * 1000; 

            // 🔹 Safe parse function
            // 🔹 Safe parse function
            function parseCustomDate(str) {
                if (!str) return null; // Still handle null/undefined/empty string
                const stringStr = String(str); // Convert to string
                const [datePart, timePart] = stringStr.split(", ");
                const [day, month, year] = datePart.split("/").map(Number);
                let hour = 0, minute = 0, second = 0;
                if (timePart) [hour, minute, second] = timePart.split(":").map(Number);
                return new Date(year, month - 1, day, hour, minute, second);
            }

            let startDate;

            if (typeof datereg === "number") {
                // timestamp milliseconds
                startDate = new Date(datereg);
            } else {
                // string like "14/09/2025, 22:17:26"
                startDate = parseCustomDate(datereg);
            }

            if (!startDate || isNaN(startDate.getTime())) {
                console.error("❌ Invalid date:", datereg);
            } else {
                // proceed countdown logic
            }


            if (!startDate || isNaN(startDate.getTime())) {
                console.error("❌ Invalid date:", datereg);
            } else {
                const expireTime = startDate.getTime() + TWO_DAYS;
                const delivery = document.getElementsByClassName("delivery");

                function updateStatus() {
                    const now = Date.now();
                    const diff = expireTime - now;

                    if (diff <= 0) {
                     
                        for (let d = 0; d < delivery.length; d++) {
                            delivery[d].style.color = "green";
                            delivery[d].innerText = " Delivered Success";
                        }
                    } else {
                       
                        const hours = Math.floor(diff / (1000 * 60 * 60));
                        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                        for (let d = 0; d < delivery.length; d++) {
                            delivery[d].innerText = `⏳ ${hours} ${minutes}  ${seconds} Delivery`;
                        }
                    }
                }

                updateStatus();                 // first run
                setInterval(updateStatus, 1000); // update every second
            }






































            for (var i = 0; i < datass.length; i++) {
                const div = document.createElement('div')
                div.innerHTML = `<img class="img-contain" src="${datass[i].img}">`;
                const maindataContainer = document.createElement('div');
                maindataContainer.classList.add('first-order');
                maindataContainer.appendChild(div);
                const contentcontainer = document.getElementsByClassName('orders-items')[0];
                contentcontainer.appendChild(maindataContainer)
                const seconddiv = document.createElement('div');
                seconddiv.classList.add('seconddiv')
                seconddiv.innerHTML = ` <p class="delivery">2days Delivery</p>
                <p class="deliver-name">${datass[i].name}</p>
                <p class="time"> Order on ${data[1].orderdate}</p>


            `;
                maindataContainer.appendChild(seconddiv)
                const thirddiv = document.createElement('div');
                thirddiv.classList.add('chevron-div')
                thirddiv.innerHTML = `<i class="fa-solid fa-chevron-right"></i>
            `
                maindataContainer.appendChild(thirddiv)




                // details containers


                const maindetailscontainer = document.createElement('div');
                maindetailscontainer.classList.add('maindetailscontainer');
                const detailsitems = document.getElementsByClassName('details-items')[0];
                detailsitems.append(maindetailscontainer);

                // nav bar

                const navheader = document.createElement('div');
                navheader.classList.add('nav-bars');
                navheader.innerHTML = `
                 <div class="cart-header">
            <nav class="nav-bar">
                <div class="app-left-bar">
                    <i id="app-arrow" class="fas fa-arrow-left app-bars app-arc"></i>
                </div>
                <div class="app-title">
                    <h4 class="app-title_head">Order Details</h4>
                </div>
            </nav>
        </div>`
                maindetailscontainer.appendChild(navheader)

                // main data

                const maindata = document.createElement('div');
                maindata.classList.add('maindata');
                maindata.innerHTML = `<div class="img-container"><img src="${datass[i].img}" class="img-det"></div>
                <div class="name-container">${datass[i].name}<p>(${datass[i].brand})</p></div><br>
                `;

                maindetailscontainer.appendChild(maindata)

                // color div

                const colordiv = document.createElement('div');
                colordiv.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv)
                // order summary

                const ordersummary = document.createElement('div');
                ordersummary.classList.add('order-summary');
                ordersummary.innerHTML = `<br>
                <p class="ordersummary-tit">Order Summary</p>
                <div class="ordersummary-data">
                <p class="tit">Name</p><p class="ans">${datass[i].name}</p>
                <p class="tit">Brand Varient</p><p class="ans">${datass[i].brand}</p>
                <p class="tit">Price</p><p class="ans">${datass[i].price}</p>
                <p class="tit">Order Time</p><p class="ans">${data[1].orderdate}</p>
                <p class="tit">Order Id</p><p class="ans">${data[0]}</p>
                </div><br>
                `;
                maindetailscontainer.appendChild(ordersummary)
                const colordiv1 = document.createElement('div');
                colordiv1.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv1)

                // address details

                const addressdetails = document.createElement('div');
                addressdetails.classList.add('address-details');
                addressdetails.innerHTML = `<br>
                <p class="ordersummary-tit"><i class="fa-solid fa-house"></i> Address Details </p>
                <div class="address-data">
                ${data[1].address}</div>
                `;
                maindetailscontainer.appendChild(addressdetails)
                 const colordiv2 = document.createElement('div');
                colordiv2.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv2);



                // price details
                 const listingprice = datass[i].price;
                var totalprice = listingprice.slice(3,11);
                var list = parseInt(totalprice) + 40;
                var specialprice = parseInt(totalprice) -10;
                var qty = data[1]?.qty?.[i] ?? 1;
                
                var qtyvlaue  = parseInt(totalprice) * qty;
               
                
                
                var total = qtyvlaue + 59 - 10;
                
                

                 const pricedetails = document.createElement('div');
                pricedetails.classList.add('price-details');
                pricedetails.innerHTML = `<br>
                <p class="ordersummary-tit">Price Details</p>
                <div class="ordersummary-data">
                <p class="tit">Listing Price</p><p class="ans">Rs.${list}</p>
                <p class="tit">Product Qty</p><p class="ans">${data[1]?.qty?.[i] ?? 1}</p>
                <p class="tit">Selling Price</p><p class="ans">${datass[i].price}</p>
                <p class="tit">Discount</p><p class="ans">Rs.150</p>
                <p class="tit">Special Price</p><p class="ans">Rs.${specialprice}</p>
                 <p class="tit">Total Fees</p><p class="ans">Rs.109</p>
                </div>
                 
                `;
                maindetailscontainer.appendChild(pricedetails);

                const totaldet = document.createElement('div');
                totaldet.classList.add('totalamt');
                totaldet.innerHTML = `
               <p class="title">Total Amount</p>
               <p class="answer">Rs.${total}</p>
                `;
                const br = document.createElement('br');
                maindetailscontainer.append(totaldet);
                 maindetailscontainer.append(br);
                 maindetailscontainer.append(br);
                const colordiv3 = document.createElement('div');
                colordiv3.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv3);
                
                
               
                  






















            }









        })
        var dataContainer = document.getElementsByClassName('first-order');


        // app close
        for (let j = 0; j < dataContainer.length; j++) {
            var btn = dataContainer[j]
            btn.addEventListener('click', () => {
                const maincontainr = document.getElementsByClassName('maindetailscontainer');
                maincontainr[j].style.display = "block";
            })
            var btnClose = document.querySelectorAll('#app-arrow');
            btnClose.forEach((btncloses) => {
                btncloses.addEventListener('click', () => {
                    const maincontainr1 = document.getElementsByClassName('maindetailscontainer');
                    maincontainr1[j].style.display = "none";
                })
            })

        }



    })












// close



const maincontainr = document.getElementsByClassName('maindetailscontainer');

for (var i = 0; i < maincontainr.length; i++) {
    var appclose = document.getElementsByClassName('app-bars')[i];
    console.log(appclose);

}


// data update



db.ref('grocerycart/' + localStorage.getItem('userid') + localStorage.getItem('nameid')).get('value').then((snapshot) => {
    const grocerydata = snapshot.val()
  

    const grocery = Object.entries(grocerydata);
   
    grocery.forEach((detail) => {
        var grocers = detail[1];
        const adds = Object.values(grocers);
        const datas = JSON.parse(adds[2]);
        

        
        for (var i = 0; i < datas.length; i++) {
                const div = document.createElement('div')
                div.innerHTML = `<img class="img-contain" src="${datas[i].img}">`;
                const maindataContainer = document.createElement('div');
                maindataContainer.classList.add('first-order');
                maindataContainer.appendChild(div);
                const contentcontainer = document.getElementsByClassName('orders-items')[0];
                contentcontainer.appendChild(maindataContainer)
                const seconddiv = document.createElement('div');
                seconddiv.classList.add('seconddiv')
                seconddiv.innerHTML = ` <p class="delivery">2days Delivery</p>
                <p class="deliver-name">${datas[i].name}</p>
                <p class="time"> Order on ${detail[1].orderdate}</p>


            `;
                maindataContainer.appendChild(seconddiv)
                const thirddiv = document.createElement('div');
                thirddiv.classList.add('chevron-div')
                thirddiv.innerHTML = `<i class="fa-solid fa-chevron-right"></i>
            `
                maindataContainer.appendChild(thirddiv)




                // details containers


                const maindetailscontainer = document.createElement('div');
                maindetailscontainer.classList.add('maindetailscontainer');
                const detailsitems = document.getElementsByClassName('details-items')[0];
                detailsitems.append(maindetailscontainer);

                // nav bar

                const navheader = document.createElement('div');
                navheader.classList.add('nav-bars');
                navheader.innerHTML = `
                 <div class="cart-header">
            <nav class="nav-bar">
                <div class="app-left-bar">
                    <i id="app-arrow" class="fas fa-arrow-left app-bars app-arc"></i>
                </div>
                <div class="app-title">
                    <h4 class="app-title_head">Order Details</h4>
                </div>
            </nav>
        </div>`
                maindetailscontainer.appendChild(navheader)

                // main data

                const maindata = document.createElement('div');
                maindata.classList.add('maindata');
                maindata.innerHTML = `<div class="img-container"><img src="${datas[i].img}" class="img-det"></div>
                <div class="name-container">${datas[i].name}<p>(${datas[i].brand})</p></div><br>
                `;

                maindetailscontainer.appendChild(maindata)

                // color div

                const colordiv = document.createElement('div');
                colordiv.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv)
                // order summary

                const ordersummary = document.createElement('div');
                ordersummary.classList.add('order-summary');
                ordersummary.innerHTML = `<br>
                <p class="ordersummary-tit">Order Summary</p>
                <div class="ordersummary-data">
                <p class="tit">Name</p><p class="ans">${datas[i].name}</p>
                <p class="tit">Brand Varient</p><p class="ans">${datas[i].brand}</p>
                <p class="tit">Price</p><p class="ans">${datas[i].price}</p>
                <p class="tit">Order Time</p><p class="ans">${detail[1].orderdate}</p>
                <p class="tit">Order Id</p><p class="ans">${detail[0]}</p>
                </div><br>
                `;
                maindetailscontainer.appendChild(ordersummary)
                const colordiv1 = document.createElement('div');
                colordiv1.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv1)

                // address details

                const addressdetails = document.createElement('div');
                addressdetails.classList.add('address-details');
                addressdetails.innerHTML = `<br>
                <p class="ordersummary-tit"><i class="fa-solid fa-house"></i> Address Details </p>
                <div class="address-data">
                ${detail[1].address}</div>
                `;
                maindetailscontainer.appendChild(addressdetails)
                 const colordiv2 = document.createElement('div');
                colordiv2.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv2);

                



                // price details
                const listingprice = datas[i].price;
                var totalprice = listingprice.slice(3,11);
                var list = parseInt(totalprice) + 40;
                var specialprice = parseInt(totalprice) -10;
                var qty = parseInt(detail[1].qty[i]);
                var qtyvlaue  = parseInt(totalprice) * qty;

                
                
                var total = qtyvlaue + 59 - 10;
                
                

                 const pricedetails = document.createElement('div');
                pricedetails.classList.add('price-details');
                pricedetails.innerHTML = `<br>
                <p class="ordersummary-tit">Price Details</p>
                <div class="ordersummary-data">
                <p class="tit">Listing Price</p><p class="ans">Rs.${list}</p>
                <p class="tit">Product Qty</p><p class="ans">${detail[1].qty[i] ?? 1}</p>
                <p class="tit">Selling Price</p><p class="ans">${datas[i].price}</p>
                <p class="tit">Discount</p><p class="ans">Rs.10</p>
                <p class="tit">Special Price</p><p class="ans">Rs.${specialprice}</p>
                 <p class="tit">Total Fees</p><p class="ans">Rs.59</p>
                </div>
                 
                `;
                maindetailscontainer.appendChild(pricedetails);

                const totaldet = document.createElement('div');
                totaldet.classList.add('totalamt');
                totaldet.innerHTML = `
               <p class="title">Total Amount</p>
               <p class="answer">Rs.${total}</p>
                `;
                const br = document.createElement('br');
                maindetailscontainer.append(totaldet);
                 maindetailscontainer.append(br);
                 maindetailscontainer.append(br);
                const colordiv3 = document.createElement('div');
                colordiv3.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv3);
                
                
               
                  




























            }









        })
        var dataContainer = document.getElementsByClassName('first-order');


        // app close
        for (let j = 0; j < dataContainer.length; j++) {
            var btn = dataContainer[j]
            btn.addEventListener('click', () => {
                const maincontainr = document.getElementsByClassName('maindetailscontainer');
                maincontainr[j].style.display = "block";
            })
            var btnClose = document.querySelectorAll('#app-arrow');
            btnClose.forEach((btncloses) => {
                btncloses.addEventListener('click', () => {
                    const maincontainr1 = document.getElementsByClassName('maindetailscontainer');
                    maincontainr1[j].style.display = "none";
                })
            })

        }






        

        
        })
    
    






        //back button

        window.addEventListener("popstate", function (event) {
  // mobile back button detect
  console.log("🔙 Back button pressed!");
  
  // ❌ cancel navigation → prevent back
  history.pushState(null, null, location.href); 
  alert("Back button disabled!");
});

// first time call → block back
history.pushState(null, null, location.href);