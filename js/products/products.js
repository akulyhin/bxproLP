"use strict";var products=[{salesDep:{name:"Отдел Продаж",image:"./images/products/sales-dep.jpg",price:"10000",oldPrice:"13000",term:"до 7 дней"},contactCentr:{name:"Контакт-центр",image:"",price:"13 000",oldPrice:"16 000",term:"до 10 дней"},company:{name:"Компания",image:"",price:"15 000",oldPrice:"17 000",term:"до 14 дней"}}],salesDepPrice=document.querySelector('[data-products="salesDep"] .products_price span'),salesDepImage=document.querySelector('[data-products="salesDep"] .products_image img'),salesDepTitle=document.querySelector('[data-products="salesDep"] .products_title'),salesModalTitle=document.querySelector("#salesModal .product-title"),salesModalOlpPrice=document.querySelector("#salesModal .old-price"),salesModalSticker=document.querySelector("#salesModal .sales-sticker"),btnsSalesModal=document.querySelectorAll('.btn-sale[data-modal="salesDep"]'),contactCentrPrice=document.querySelector('[data-products="contactCentr"] .products_price span'),companyPrice=document.querySelector('[data-products="company"] .products_price span'),salesModalPrice=document.querySelector("#salesModal .new-price span"),productModal=document.getElementById("product");products.forEach(function(t){salesDepPrice.textContent=prettify(t.salesDep.price),salesDepImage.src=t.salesDep.image,salesDepTitle.textContent=t.salesDep.name,salesModalTitle.textContent="".concat(t.salesDep.name," битрикс24"),salesModalPrice.textContent=prettify(t.salesDep.price),salesModalOlpPrice.textContent="".concat(prettify(t.salesDep.oldPrice)," грн.");var e=+t.salesDep.price/+t.salesDep.oldPrice*100-100;salesModalSticker.textContent="".concat(Math.round(e),"%"),btnsSalesModal.forEach(function(e){e.addEventListener("click",function(){modalTitle.textContent="Заявка на внедрение: ".concat(t.salesDep.name),productModal.value="Заявка на внедрение: Отдел продаж",product_price.value=t.salesDep.price})}),contactCentrPrice.textContent=t.contactCentr.price,companyPrice.textContent=t.company.price});var testBtn=document.querySelector(".btn-block a.sign-in");function prettify(e){return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}testBtn.addEventListener("click",function(){productModal.value="",product_price.value="",modalTitle.textContent="Оставьте заявку заполнив форму"});