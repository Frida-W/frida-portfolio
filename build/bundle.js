$((function(){"use strict";var e=$(window).width(),t=$(window).height();$(".section.started").css({height:t}),$(window).on("load",(function(){$(".preloader .spinner").fadeOut((function(){$(".preloader").fadeOut(),$("body").addClass("ready")}))})),e>720&&(window.sr=ScrollReveal(),sr.reveal(".animated")),grained("#home-section",{animate:!0,patternWidth:400,patternHeight:400,grainOpacity:.35,grainDensity:3,grainWidth:1,grainHeight:1}),$(".image-3d").hover3d({selector:".image-3d-card",invert:!1}),$("#video-bg").YTPlayer(),$(".section.about .btn.extra, .section.quotes .btn").on("click",(function(){var e=parseFloat($(".section.contacts").offset().top);return $("body,html").animate({scrollTop:e-90},800),!1})),$(".box-items").imagesLoaded((function(){$(".box-items").masonry({itemSelector:".box-item"})})),$(".has-popup").magnificPopup({type:"inline",overflowY:"auto",closeBtnInside:!0,mainClass:"mfp-fade"});const a=document.getElementsByClassName("collapsible-btn");let n;for(n=0;n<a.length;n++)a[n].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));$("#cform").validate({rules:{name:{required:!0},tel:{required:!0},message:{required:!0},subject:{required:!0},email:{required:!0,email:!0}},success:"valid",submitHandler:function(){const e=$("input[name='name']").val(),t=$("input[name='tel']").val(),a=$("input[name='email']").val(),n={to_name:"Frida",from_name:e,subject:$("input[name='subject']").val(),message:`${$("textarea[name='message']").val()}, please reply me via ${a} or ${t}`};emailjs.send("service_lnadkjc","template_cwm6xpn",n).then((function(e){console.log("SUCCESS!",e.status,e.text),alert("Your message has been sent!")}),(function(e){console.log("FAILED...",e),alert("Oops... "+JSON.stringify(e))}))}})}));