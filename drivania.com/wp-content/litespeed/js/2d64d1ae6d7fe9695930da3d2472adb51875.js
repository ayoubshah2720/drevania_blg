$(function(){"use strict";$(".contact-link").on("click",function(e){e.preventDefault();$(this).parents(".contact-item").find(".overlay-wrapper").addClass("active");$("#overlay").show().addClass("active");$("body").addClass("overlayed")});if($('.fakeccor-list').length){var fakeccorList=$('.fakeccor-list');var fakeccorTitles=fakeccorList.find('.fakeccor-title');var fakeccorImgs=$('.fakeccor-img picture');var fakeccorIndex=1;fakeccorTitles.eq(0).addClass('active');fakeccorImgs.eq(0).addClass('active');var fakeccorInterval=setInterval(function(){fakeccorTitles.removeClass('active');fakeccorImgs.removeClass('active');fakeccorTitles.eq(fakeccorIndex).addClass('active');fakeccorImgs.eq(fakeccorIndex).addClass('active');fakeccorIndex=fakeccorIndex+1<fakeccorTitles.length?fakeccorIndex+1:0},5000);fakeccorTitles.on('mouseenter',function(){fakeccorTitles.removeClass('active');fakeccorImgs.removeClass('active');var titleId=$(this).data('id');$('[data-image-id='+titleId+']').addClass('active');clearInterval(fakeccorInterval)});fakeccorTitles.on('mouseleave',function(){fakeccorInterval=setInterval(function(){fakeccorTitles.removeClass('active');fakeccorImgs.removeClass('active');fakeccorTitles.eq(fakeccorIndex).addClass('active');fakeccorImgs.eq(fakeccorIndex).addClass('active');fakeccorIndex=fakeccorIndex+1<fakeccorTitles.length?fakeccorIndex+1:0},5000)})}})
;