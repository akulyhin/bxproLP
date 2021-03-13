// Mobile menu
$('.mobile-menu_button').click(function() {
    $('.overlay-menu').toggleClass('active-menu');
  });
  
  $('.close-menu').click(function() {
    $('.overlay-menu').toggleClass('active-menu');
  });
  
  $('.mobile-menu_link').click(function() {
    $('.overlay-menu').toggleClass('active-menu');
  });
  // Mobile Menu


  
$('.more-services').click(function() {
  $('.services-list_item').css('display', 'block');
  $(this).css('display', 'none');
  });
  
  

// Отправка формы

$(document).ready(function() {
  $('#form-action').submit(function(){
      $.post("./php/bitrix.php", $("#form-action").serialize(),  function(response) {
          $('#form-action').hide('slow');
          $('#post_form_success').html(response);
          dataLayer.push({'event': 'formsend'});
            fbq('track', 'Lead');
      });
      return false;
  });
});



// Плавная прокрутка
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
    return false;
});




// UTM 2 localStorage
// Переменные с текущей ссылкой и корнем после слеша
let href = window.location.href;
let search = window.location.search;

// console.log(href);
// console.log(search);

// массив для будущих ютм
let utmArr = [];

// Определяем ютм, разделям их по знаку "&", записываем их раздельно в массив с уменшенным регистром
if (href.indexOf("?") != -1) {
  search = search.slice(1).toLowerCase();
  utmArr = search.split("&");

// перебираем массив и разбиваем каждый элемент по разделителю "=" и записываем в LocalStorage
  utmArr.map((utm) => {
    localStorage.setItem(utm.split("=")[0], utm.split("=")[1]);
  });
}

// UTM from LocalStorage to form

const utm_source = document.getElementById('utm_source');
const utm_medium = document.getElementById('utm_medium');
const utm_campaign = document.getElementById('utm_campaign');
const utm_content = document.getElementById('utm_content');
const utm_term = document.getElementById('utm_term');

if (localStorage.getItem('utm_source')) {
  utm_source.value = localStorage.getItem('utm_source');
}

if (localStorage.getItem('utm_medium')) {
  utm_medium.value = localStorage.getItem('utm_medium');
}

if (localStorage.getItem('utm_campaign')) {
  utm_campaign.value = localStorage.getItem('utm_campaign');
}

if (localStorage.getItem('utm_content')) {
  utm_content.value = localStorage.getItem('utm_content');
}

if (localStorage.getItem('utm_term')) {
  utm_term.value = localStorage.getItem('utm_term');
}


const back2Top = document.querySelector('.back2Top');

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    back2Top.classList.remove('hidden')
  }
  else {
    back2Top.classList.add('hidden')
  }
})


jQuery(function() {
  // jQuery(".back2Top").hide().removeAttr("href");

  // if (jQuery(window).scrollTop() >= "250")
  //   // jQuery(".back2Top").fadeIn("slow");

  // jQuery(window).scroll(function() {
  //   if (jQuery(window).scrollTop() <= "250") 
  //     jQuery(".back2Top").fadeOut("slow");
  //   else 
  //     jQuery(".back2Top").fadeIn("slow");
  // });

  jQuery(".back2Top").click(function() {
    jQuery("html, body").animate({ scrollTop: 0 }, "slow")
  })
});

