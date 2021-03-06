const products = [
    {
        'salesDep': {
            'name': 'Отдел Продаж',
            'image': './images/products/sales-dep.jpg',
            'price': '10000',
            'oldPrice': '13000',
            'term': 'до 7 дней'
        },
        'contactCentr': {
            'name': 'Контакт-центр',
            'image': '',
            'price': '13 000',
            'oldPrice': '16 000',
            'term': 'до 10 дней'
        },
        'company': {
            'name': 'Индивидуальный',
            'image': '',
            'price': 'от 25 000',
            'oldPrice': '',
            'term': 'до 14 дней'
        }
    }
]

const salesDepPrice = document.querySelector('[data-products="salesDep"] .products_price span');
const salesDepImage = document.querySelector('[data-products="salesDep"] .products_image img');
const salesDepTitle = document.querySelector('[data-products="salesDep"] .products_title');
const salesModalTitle = document.querySelector('#salesModal .product-title');
const salesModalOlpPrice = document.querySelector('#salesModal .old-price');
const salesModalSticker = document.querySelector('#salesModal .sales-sticker');
const btnsSalesModal = document.querySelectorAll('.btn-sale[data-modal="salesDep"]');


const contactCentrPrice = document.querySelector('[data-products="contactCentr"] .products_price span');
const companyPrice = document.querySelector('[data-products="company"] .products_price span');


const salesModalPrice = document.querySelector('#salesModal .new-price span');

const productModal = document.getElementById('product');

products.forEach(product => {

    salesDepPrice.textContent = prettify(product.salesDep.price);
    salesDepImage.src = product.salesDep.image;
    salesDepTitle.textContent = product.salesDep.name;
    salesModalTitle.textContent = `${product.salesDep.name} битрикс24`;
    salesModalPrice.textContent = prettify(product.salesDep.price);
    salesModalOlpPrice.textContent = `${prettify(product.salesDep.oldPrice)} грн.`;

    const salesResult = +product.salesDep.price / +product.salesDep.oldPrice * 100 - 100;
    salesModalSticker.textContent = `${Math.round(salesResult)}%`;

    btnsSalesModal.forEach(btnSalesModal => {
        btnSalesModal.addEventListener('click', () => {
            modalTitle.textContent = `Заявка на внедрение: ${product.salesDep.name}`;
            productModal.value = `Заявка на внедрение: Отдел продаж`;
            product_price.value = product.salesDep.price;
        })
    })

    
    contactCentrPrice.textContent = product.contactCentr.price;
    companyPrice.textContent = product.company.price;
});



const testBtn = document.querySelector('.btn-block a.sign-in');
testBtn.addEventListener('click', () => {
    productModal.value = '';
    product_price.value = '';
    modalTitle.textContent = 'Оставьте заявку заполнив форму';
})


function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}



