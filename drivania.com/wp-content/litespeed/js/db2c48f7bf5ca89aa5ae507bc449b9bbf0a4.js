(function($){"use strict";$(function(){if($('.side-menu-tabs').length){$('.side-menu-tabs .side-menu-list li').on('click',function(){var tab_id=$(this).data('tab-id');$('.side-menu-tabs .side-menu-list li').removeClass('active');$('.page-content .side-menu-content:visible').fadeOut('fast',function(){$('#tab-'+tab_id).fadeIn('fast')});$(this).addClass('active')})}})})(jQuery)
;