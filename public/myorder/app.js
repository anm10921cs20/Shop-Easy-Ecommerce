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
            const datereg = data[1].date;

            
         const TWO_DAYS = 2 * 24 * 60 * 60 * 1000; // 2 நாட்கள் milliseconds

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
          // ✅ 2 நாள் முடிஞ்சாச்சு → எல்லா elements update பண்ணு
          for (let d = 0; d < delivery.length; d++) {
            delivery[d].style.color = "green";
            delivery[d].innerText = "✔️ Delivered Success";
          }
        } else {
          // ✅ இன்னும் time உள்ளது → எல்லாவற்றிலும் same text
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          for (let d = 0; d < delivery.length; d++) {
            delivery[d].innerText = `⏳ ${hours} ${minutes}  ${seconds}Delivery`;
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
                <p class="time"> Order on ${data[1].date}</p>


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
        </div><hr>`
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
                <p class="tit">Order Time</p><p class="ans">${data[1].date}</p>
                <p class="tit">Order Id</p><p class="ans">${data[0]}</p>
                </div><br>
                `;
                maindetailscontainer.appendChild(ordersummary)
                const colordiv1 = document.createElement('div');
                colordiv1.classList.add('color-area');
                maindetailscontainer.appendChild(colordiv1)

















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














function clicked() {



}

// close



const maincontainr = document.getElementsByClassName('maindetailscontainer');

for (var i = 0; i < maincontainr.length; i++) {
    var appclose = document.getElementsByClassName('app-bars')[i];
    console.log(appclose);

}


