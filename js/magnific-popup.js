"use strict";$(".design-content_img").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}}),$(".promo").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen autoplay="1"></iframe></div>',srcAction:"iframe_src"}}),$(".modalForm, .btn-intro-lead").magnificPopup({type:"inline",focus:"#name",mainClass:"mfp-with-zoom mfp-img-mobile",zoom:{enabled:!0,duration:300}}),$(".img-block").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0},gallery:{enabled:!0},zoom:{enabled:!0,duration:500,opener:function(e){return e.find("img")}}}),$(".sertificate-img").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}});