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
