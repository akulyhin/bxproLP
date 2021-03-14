const products = [
    {
        'salesDep': {
            'image': './images/products/sales-dep.jpg',
            'price': '10 000',
            'term': 'до 7 дней'
        },
        'contactCentr': {
            'image': '',
            'price': '13 000',
            'term': 'до 10 дней'
        },
        'company': {
            'image': '',
            'price': '15 000',
            'term': 'до 14 дней'
        }
    }
]


const salesDepPrice = document.querySelector('[data-products="salesDep"] .products_price span');
const salesDepImage = document.querySelector('.products_image img');

const contactCentrPrice = document.querySelector('[data-products="contactCentr"] .products_price span');
const companyPrice = document.querySelector('[data-products="company"] .products_price span');


const salesModalPrice = document.querySelector('#salesModal .new-price span');

products.forEach(product => {

    salesDepPrice.textContent = product.salesDep.price;
    salesDepImage.src = product.salesDep.image;
    salesModalPrice.textContent = product.salesDep.price;
    
    contactCentrPrice.textContent = product.contactCentr.price;
    companyPrice.textContent = product.company.price;
})





