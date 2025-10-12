//app nav bars container
//display change method



//display function event

var openBtn = document.getElementById('app-arrow');

//event listener nav open
openBtn.addEventListener('click', () => {
   window.history.back();
})

//event listener nav close


// easter

const dataContainer = document.querySelectorAll(".content");

dataContainer.forEach((data) => {
   data.addEventListener('click', detailschange);
})


function detailschange(event) {
   // inside data
   var container = event.target;
   const imgDet = container.getElementsByClassName('img-det')[0].src;
   const qtyDet = container.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container.getElementsByClassName('perce')[0].innerText;


   // print data


   const img = document.getElementsByClassName('product-img')[0];
   const qty = document.getElementsByClassName('qty1')[0];
   const price = document.getElementsByClassName('rate')[0];
   const delprice = document.getElementsByClassName('rate-del')[0];
   const per = document.getElementsByClassName('perce')[0];
   img.src = imgDet;
   qty.innerText = qtyDet;
   price.innerText = priceDet;
   delprice.innerText = DelpriceDet;
   per.innerText = perDet;


   // bootstrap

   const bootcontent = document.getElementById('Easter');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent);
   instance.hide();

}


// maggi

const dataContainer1 = document.querySelectorAll(".content1");

dataContainer1.forEach((datas) => {
   datas.addEventListener('click', detailschange1);
})


function detailschange1(event) {
   // inside data
   var container1 = event.target;
   const imgDet = container1.getElementsByClassName('img-det')[0].src;
   const qtyDet = container1.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container1.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container1.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container1.getElementsByClassName('perce')[0].innerText;


   // print data


   const img1 = document.getElementsByClassName('product-img')[2];
   const qty1 = document.getElementsByClassName('qty2')[0];
   const price1 = document.getElementsByClassName('rate')[2];
   const delprice1 = document.getElementsByClassName('rate-del')[2];
   const per1 = document.getElementsByClassName('perce1')[0];
   img1.src = imgDet;
   qty1.innerText = qtyDet;
   price1.innerText = priceDet;
   delprice1.innerText = DelpriceDet;
   per1.innerText = perDet;


   // bootstrap

   const bootcontent1 = document.getElementById('Maggi');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent1);
   instance.hide();

}


// air freshner

const dataContainer2 = document.querySelectorAll(".content2");

dataContainer2.forEach((datas1) => {
   datas1.addEventListener('click', detailschange2);
})


function detailschange2(event) {
   // inside data
   var container2 = event.target;
   const imgDet = container2.getElementsByClassName('img-det')[0].src;
   const qtyDet = container2.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container2.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container2.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container2.getElementsByClassName('perce')[0].innerText;


   // print data


   const img1 = document.getElementsByClassName('product-img')[3];
   const qty1 = document.getElementsByClassName('qty3')[0];
   const price1 = document.getElementsByClassName('rate')[3];
   const delprice1 = document.getElementsByClassName('rate-del')[3];
   const per1 = document.getElementsByClassName('perce2')[0];
   img1.src = imgDet;
   qty1.innerText = qtyDet;
   price1.innerText = priceDet;
   delprice1.innerText = DelpriceDet;
   per1.innerText = perDet;


   // bootstrap

   const bootcontent1 = document.getElementById('Odonil');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent1);
   instance.hide();

}




// Closeup

const dataContainer3 = document.querySelectorAll(".content3");

dataContainer3.forEach((datas2) => {
   datas2.addEventListener('click', detailschange3);
})


function detailschange3(event) {
   // inside data
   var container2 = event.target;
   const imgDet = container2.getElementsByClassName('img-det')[0].src;
   const qtyDet = container2.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container2.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container2.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container2.getElementsByClassName('perce')[0].innerText;


   // print data


   const img1 = document.getElementsByClassName('product-img')[12];
   const qty1 = document.getElementsByClassName('qty4')[0];
   const price1 = document.getElementsByClassName('rate')[12];
   const delprice1 = document.getElementsByClassName('rate-del')[12];
   const per1 = document.getElementsByClassName('perce3')[0];
   img1.src = imgDet;
   qty1.innerText = qtyDet;
   price1.innerText = priceDet;
   delprice1.innerText = DelpriceDet;
   per1.innerText = perDet;


   // bootstrap

   const bootcontent1 = document.getElementById('CloUp');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent1);
   instance.hide();

}




// harpic

const dataContainer4 = document.querySelectorAll(".content4");

dataContainer4.forEach((datas2) => {
   datas2.addEventListener('click', detailschange4);
})


function detailschange4(event) {
   // inside data
   var container2 = event.target;
   const imgDet = container2.getElementsByClassName('img-det')[0].src;
   const qtyDet = container2.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container2.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container2.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container2.getElementsByClassName('perce')[0].innerText;


   // print data


   const img1 = document.getElementsByClassName('product-img')[17];
   const qty1 = document.getElementsByClassName('qty5')[0];
   const price1 = document.getElementsByClassName('rate')[17];
   const delprice1 = document.getElementsByClassName('rate-del')[17];
   const per1 = document.getElementsByClassName('perce4')[0];
   img1.src = imgDet;
   qty1.innerText = qtyDet;
   price1.innerText = priceDet;
   delprice1.innerText = DelpriceDet;
   per1.innerText = perDet;


   // bootstrap

   const bootcontent1 = document.getElementById('Harpic');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent1);
   instance.hide();

}


// merashampoo

const dataContainer5 = document.querySelectorAll(".content5");

dataContainer5.forEach((datas2) => {
   datas2.addEventListener('click', detailschange5);
})


function detailschange5(event) {
   // inside data
   var container2 = event.target;
   const imgDet = container2.getElementsByClassName('img-det')[0].src;
   const qtyDet = container2.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container2.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container2.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container2.getElementsByClassName('perce')[0].innerText;


   // print data


   const img1 = document.getElementsByClassName('product-img')[36];
   const qty1 = document.getElementsByClassName('qty6')[0];
   const price1 = document.getElementsByClassName('rate')[36];
   const delprice1 = document.getElementsByClassName('rate-del')[36];
   const per1 = document.getElementsByClassName('perce5')[0];
   img1.src = imgDet;
   qty1.innerText = qtyDet;
   price1.innerText = priceDet;
   delprice1.innerText = DelpriceDet;
   per1.innerText = perDet;


   // bootstrap

   const bootcontent1 = document.getElementById('MerSha');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent1);
   instance.hide();

}


// doveshampoo

const dataContainer6 = document.querySelectorAll(".content6");

dataContainer6.forEach((datas2) => {
   datas2.addEventListener('click', detailschange6);
})


function detailschange6(event) {
   // inside data
   var container2 = event.target;
   const imgDet = container2.getElementsByClassName('img-det')[0].src;
   const qtyDet = container2.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container2.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container2.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container2.getElementsByClassName('perce')[0].innerText;


   // print data


   const img1 = document.getElementsByClassName('product-img')[37];
   const qty1 = document.getElementsByClassName('qty7')[0];
   const price1 = document.getElementsByClassName('rate')[37];
   const delprice1 = document.getElementsByClassName('rate-del')[37];
   const per1 = document.getElementsByClassName('perce6')[0];
   img1.src = imgDet;
   qty1.innerText = qtyDet;
   price1.innerText = priceDet;
   delprice1.innerText = DelpriceDet;
   per1.innerText = perDet;


   // bootstrap

   const bootcontent1 = document.getElementById('Dove');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent1);
   instance.hide();

}



// kelaogs

const dataContainer7 = document.querySelectorAll(".content7");

dataContainer7.forEach((datas2) => {
   datas2.addEventListener('click', detailschange7);
})


function detailschange7(event) {
   // inside data
   var container2 = event.target;
   var imgele = container2.getElementsByClassName('img-det')[0];
   const imgDet = imgele.src;
   const qtyDet = container2.getElementsByClassName('quantity')[0].innerText;
   const priceDet = container2.getElementsByClassName('price')[0].innerText;
   const DelpriceDet = container2.getElementsByClassName('del-rate')[0].innerText;
   const perDet = container2.getElementsByClassName('perce')[0].innerText;


   // print data


   const img1 = document.getElementsByClassName('product-img')[40];
   const qty1 = document.getElementsByClassName('qty8')[0];
   const price1 = document.getElementsByClassName('rate')[40];
   const delprice1 = document.getElementsByClassName('rate-del')[40];
   const per1 = document.getElementsByClassName('perce7')[0];
   img1.src = imgDet;
   qty1.innerText = qtyDet;
   price1.innerText = priceDet;
   delprice1.innerText = DelpriceDet;
   per1.innerText = perDet;


   // bootstrap

   const bootcontent1 = document.getElementById('Kelogs');
   const instance = bootstrap.Offcanvas.getInstance(bootcontent1);
   instance.hide();

}


