"use strict";$(".mobile-menu_button").click(function(){$(".overlay-menu").toggleClass("active-menu")}),$(".close-menu").click(function(){$(".overlay-menu").toggleClass("active-menu")}),$(".mobile-menu_link").click(function(){$(".overlay-menu").toggleClass("active-menu")}),$(".more-services").click(function(){$(".services-list_item").css("display","block"),$(this).css("display","none")}),$(document).ready(function(){$("#form-action").submit(function(){return $.post("./php/bitrix.php",$("#form-action").serialize(),function(e){$("#form-action").hide("slow"),$("#post_form_success").html(e),dataLayer.push({event:"formsend"}),fbq("track","Lead")}),!1})});var $page=$("html, body");$('a[href*="#"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},300),!1});var href=window.location.href,search=window.location.search,utmArr=[];-1!=href.indexOf("?")&&(utmArr=(search=search.slice(1).toLowerCase()).split("&")).map(function(e){localStorage.setItem(e.split("=")[0],e.split("=")[1])});var utm_source=document.getElementById("utm_source"),utm_medium=document.getElementById("utm_medium"),utm_campaign=document.getElementById("utm_campaign"),utm_content=document.getElementById("utm_content"),utm_term=document.getElementById("utm_term");localStorage.getItem("utm_source")&&(utm_source.value=localStorage.getItem("utm_source")),localStorage.getItem("utm_medium")&&(utm_medium.value=localStorage.getItem("utm_medium")),localStorage.getItem("utm_campaign")&&(utm_campaign.value=localStorage.getItem("utm_campaign")),localStorage.getItem("utm_content")&&(utm_content.value=localStorage.getItem("utm_content")),localStorage.getItem("utm_term")&&(utm_term.value=localStorage.getItem("utm_term"));var back2Top=document.querySelector(".back2Top");window.addEventListener("scroll",function(){100<window.scrollY?back2Top.classList.remove("hidden"):back2Top.classList.add("hidden")}),jQuery(function(){jQuery(".back2Top").click(function(){jQuery("html, body").animate({scrollTop:0},"slow")})});ment.getElementById('utm_medium');
var utm_campaign = document.getElementById('utm_campaign');
var utm_content = document.getElementById('utm_content');
var utm_term = document.getElementById('utm_term');

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

var back2Top = document.querySelector('.back2Top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    back2Top.classList.remove('hidden');
  } else {
    back2Top.classList.add('hidden');
  }
});
jQuery(function () {
  jQuery(".back2Top").click(function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, "slow");
  });
});