"use strict";$(".mobile-menu_button").click(function(){$(".overlay-menu").toggleClass("active-menu")}),$(".close-menu").click(function(){$(".overlay-menu").toggleClass("active-menu")}),$(".mobile-menu_link").click(function(){$(".overlay-menu").toggleClass("active-menu")}),$(".more-services").click(function(){$(".services-list_item").css("display","block"),$(this).css("display","none")}),$(document).ready(function(){$("#form-action").submit(function(){return $.post("./php/bitrix.php",$("#form-action").serialize(),function(e){$("#form-action").hide("slow"),$("#post_form_success").html(e),dataLayer.push({event:"formsend"}),fbq("track","Lead")}),!1})});var $page=$("html, body");$('a[href*="#"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},300),!1});