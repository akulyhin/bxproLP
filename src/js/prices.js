
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