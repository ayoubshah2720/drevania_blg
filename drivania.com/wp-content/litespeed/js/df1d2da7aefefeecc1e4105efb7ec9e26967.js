(function($){"use strict";function loadMorePosts(){$('.load-more').addClass('clicked');var offset=$('.card-group .card-item').length+1;var postsPerPage=2;var ajaxUrl='/wp-admin/admin-ajax.php';$.ajax({url:ajaxUrl,type:'POST',data:{action:'load_more_posts',offset:offset,posts_per_page:postsPerPage},success:function(response){$('.load-more').before(response);offset+=postsPerPage;if(offset>=$('.load-more').data('total')){$('.load-more').css('visibility','hidden')}else{$('.load-more').removeClass('clicked')}},error:function(_,errorThrown){console.log(errorThrown)},complete:function(){}})}
function initializePosts(){$('.load-more').on('click',function(e){e.preventDefault();if($(this).hasClass('clicked')){return!1}else{loadMorePosts()}})}
initializePosts()})(jQuery)
;