const products = [
    {
        'salesDep': {
            'price': '10 000',
            'term': 'до 7 дней'
        },
        'contactCentr': {
            'price': '13 000',
            'term': 'до 10 дней'
        },
        'company': {
            'price': '15 000',
            'term': 'до 14 дней'
        }
    }
]


const salesDepPrice = document.querySelector('[data-products="salesDep"] .products_price span');
const contactCentrPrice = document.querySelector('[data-products="contactCentr"] .products_price span');
const companyPrice = document.querySelector('[data-products="company"] .products_price span');

const salesModalPrice = document.querySelector('#salesModal .new-price span')


products.forEach(product => {

    salesDepPrice.textContent = product.salesDep.price;
    salesModalPrice.textContent = product.salesDep.price;
    
    contactCentrPrice.textContent = product.contactCentr.price;
    companyPrice.textContent = product.company.price;
})





