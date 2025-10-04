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


function detailschange(event)
{
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


// easter

const dataContainer1 = document.querySelectorAll(".content1");

dataContainer1.forEach((datas) => {
   datas.addEventListener('click', detailschange1);
})


function detailschange1(event)
{
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