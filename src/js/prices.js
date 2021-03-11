
$(document).ready(function(){
    $('.intro-license-table-select').click(function() {
        $('.intro-license-table-select-dropdown').slideToggle(300);

    })
})

$('[data-time="1"]').click(function() {
    $(".intro-license-table-select-title").text('на 1 месяц');
    $('[data-type="crm"] .full').html('1 200 ₴');
    $('[data-type="crm"] .base').css('display', 'none');
    $('[data-type="crm"] .discount').css('display', 'none');

    $('[data-type="task"] .full').html('1 200 ₴');
    $('[data-type="task"] .base').css('display', 'none');
    $('[data-type="task"] .discount').css('display', 'none');

    $('[data-type="team"] .full').html('2 200 ₴');
    $('[data-type="team"] .base').css('display', 'none');
    $('[data-type="team"] .discount').css('display', 'none');

    $('[data-type="company"] .full').html('4 400 ₴');
    $('[data-type="company"] .base').css('display', 'none');
    $('[data-type="company"] .discount').css('display', 'none');
})


$('[data-time="3"]').click(function() {
    $(".intro-license-table-select-title").text('на 3 месяца');
    $('[data-type="crm"] .full').html('3 600 ₴');
    $('[data-type="crm"] .base').css('display', 'none');
    $('[data-type="crm"] .discount').css('display', 'none');

    $('[data-type="task"] .full').html('3 600 ₴');
    $('[data-type="task"] .base').css('display', 'none');
    $('[data-type="task"] .discount').css('display', 'none');

    $('[data-type="team"] .full').html('6 600 ₴');
    $('[data-type="team"] .base').css('display', 'none');
    $('[data-type="team"] .discount').css('display', 'none');

    $('[data-type="company"] .full').html('13 200 ₴');
    $('[data-type="company"] .base').css('display', 'none');
    $('[data-type="company"] .discount').css('display', 'none');
})


$('[data-time="12"]').click(function() {
    $(".intro-license-table-select-title").text('на год');
    $('[data-type="crm"] .full').html('10 080 ₴');
    $('[data-type="crm"] .base').html('14 400 ₴');
    $('[data-type="crm"] .base').css('display', 'block');
    $('[data-type="crm"] .discount').css('display', 'block').html('30%');

    $('[data-type="task"] .full').html('10 080 ₴');
    $('[data-type="task"] .base').html('14 400 ₴');
    $('[data-type="task"] .base').css('display', 'block');
    $('[data-type="task"] .discount').css('display', 'block').html('30%');

    $('[data-type="team"] .full').html('18 480 ₴');
    $('[data-type="team"] .base').html('26 400 ₴');
    $('[data-type="team"] .base').css('display', 'block');
    $('[data-type="team"] .discount').css('display', 'block').html('30%');

    $('[data-type="company"] .full').html('36 960 ₴');
    $('[data-type="company"] .base').html('52 800 ₴');
    $('[data-type="company"] .base').css('display', 'block');
    $('[data-type="company"] .discount').css('display', 'block').html('30%');
})


$('[data-time="24"]').click(function() {
    $(".intro-license-table-select-title").text('на 2 года');
    $('[data-type="crm"] .full').html('17 280 ₴');
    $('[data-type="crm"] .base').html('28 800 ₴');
    $('[data-type="crm"] .base').css('display', 'block');
    $('[data-type="crm"] .discount').css('display', 'block').html('40%');

    $('[data-type="task"] .full').html('17 280 ₴');
    $('[data-type="task"] .base').html('28 800 ₴');
    $('[data-type="task"] .base').css('display', 'block');
    $('[data-type="task"] .discount').css('display', 'block').html('40%');

    $('[data-type="team"] .full').html('31 680 ₴');
    $('[data-type="team"] .base').html('52 800 ₴');
    $('[data-type="team"] .base').css('display', 'block');
    $('[data-type="team"] .discount').css('display', 'block').html('40%');

    $('[data-type="company"] .full').html('63 360 ₴');
    $('[data-type="company"] .base').html('105 600 ₴');
    $('[data-type="company"] .base').css('display', 'block');
    $('[data-type="company"] .discount').css('display', 'block').html('40%');
})


$('[data-tab="license-box"]').click(function() {
    $(this).addClass('-active');
    $('[data-tab="license-cloud"]').removeClass('-active');
    $('#license-cloud').removeClass('-active');
    $('#license-box').addClass('-active');
})


$('[data-tab="license-cloud"]').click(function() {
    $(this).addClass('-active');
    $('[data-tab="license-box"]').removeClass('-active');
    $('#license-box').removeClass('-active');
    $('#license-cloud').addClass('-active');
})

const counts = document.querySelectorAll('.intro-license-table-user-count');

$('[data-count="50"]').click(function() {
    $('[data-type="corporate"] .full').text('35 200 ₴');

    counts.forEach(item => {
        if (item.className === 'intro-license-table-user-count -active') {
            item.classList.remove('-active');
        }
    });

    $(this).addClass('-active');
})

$('[data-count="100"]').click(function() {
    counts.forEach(item => {
        if (item.className === 'intro-license-table-user-count -active') {
            item.classList.remove('-active');
        }
    })

    $(this).addClass('-active');
    $('[data-type="corporate"] .full').text('66 000 ₴');
})

$('[data-count="250"]').click(function() {
    counts.forEach(item => {
        if (item.className === 'intro-license-table-user-count -active') {
            item.classList.remove('-active');
        }
    })

    $(this).addClass('-active');
    $('[data-type="corporate"] .full').text('88 000 ₴');
})

$('[data-count="500"]').click(function() {
    counts.forEach(item => {
        if (item.className === 'intro-license-table-user-count -active') {
            item.classList.remove('-active');
        }
    })

    $(this).addClass('-active');
    $('[data-type="corporate"] .full').text('169 000 ₴');
})


const features = document.querySelectorAll('.intro-license-features-item__title');

features.forEach(feature => {
    feature.addEventListener('click', (e) => {
        console.dir(e.target);
        e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display === 'none' ? '' : 'none';
        console.log(e.target.nextElementSibling)
    })
})


const btnsLead = document.querySelectorAll('.btn-intro-lead');
const product = document.getElementById('product');
const modalTitle = document.querySelector('.modal-title');

btnsLead.forEach(btn => {
    btn.addEventListener('click', () => {
        product.value = `Тариф: ${btn.dataset.name}`;
        modalTitle.innerHTML = `Заявка на тариф: ${btn.dataset.name}`;
    })
})