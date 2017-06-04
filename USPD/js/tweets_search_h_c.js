$(function(){
	$.ajax({
		url: 'get_h_c_tweets.php',
		type: 'GET',
		success: function(response1) {
			if (typeof response1.errors === 'undefined' || response1.errors.length < 1) {
				var $tweets1 = $('<div></div>');
				$.each(response1.statuses, function(i, obj1) {
					var pic_uri_dec1 = decodeURIComponent(obj1.user.profile_image_url);
					$tweets1.append('<div id="hm_work"><img width="40px" class="img-rounded" src=' + pic_uri_dec1 + ' />&nbsp;&nbsp; <b> ' + obj1.user.name + '</b> <a href="javascript:;" id="s_n"> @' + obj1.user.screen_name + '</a><small id="time" style="float:right;">' + obj1.created_at.substring(0,10) + '</small><br /><p id="t_text">' + obj1.text.replace(/(^|\s)(#[a-z\d-]+)/ig, "$1<b>$2</b>") + '</p><span><span class="glyphicon glyphicon-retweet" style="color:#00FF00;"></span> ' + obj1.retweet_count + ' </span><span> &nbsp;&nbsp; <span class="glyphicon glyphicon-heart" style="color:#FA344B;"></span> ' + obj1.favorite_count + ' </span></div>');
				});
				$('.h_c_tweets-container').html($tweets1);
			}
		}
	});
});