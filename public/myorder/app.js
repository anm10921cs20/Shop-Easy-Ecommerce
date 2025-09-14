var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
    window.history.back();
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
        console.log(order);

        const maindata = Object.entries(order);


        maindata.forEach((data) => {

            const vl = data[1]
            console.log(data[1].address);


            var orders = vl.order;



            const add = Object.values(vl)



            const datass = JSON.parse(add[2])
            console.log(datass);

            for (var i = 0; i < datass.length; i++) {
                const div = document.createElement('div')
                div.innerHTML = `<img class="img-contain" src="${datass[i].img}">`;
                const maindataContainer = document.createElement('div');
                maindataContainer.classList.add('first-order');
                maindataContainer.appendChild(div);
                const contentcontainer = document.getElementsByClassName('orders-items')[0];
                contentcontainer.appendChild(maindataContainer)
                const seconddiv = document.createElement('div');
                seconddiv.innerHTML = ` <p>2days Delivery</p>
                <p class="deliver-name">${datass[i].name}</p>

            `;
            maindataContainer.appendChild(seconddiv)
            const thirddiv = document.createElement('div');
            thirddiv.classList.add('chevron-div')
            thirddiv.innerHTML = `<i class="fa-solid fa-chevron-right"></i>
            `
            maindataContainer.appendChild(thirddiv)
            }









        })

    })








