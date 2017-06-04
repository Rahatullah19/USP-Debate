$(function(){
	setInterval(function(){ 
		$.ajax({
			url: 'get_recent_d_t_tweets.php',
			type: 'GET',
			success: function(response) {
				if (typeof response.errors === 'undefined' || response.errors.length < 1) {
					var $tweets = $('<div></div>');
					$.each(response.statuses, function(i, obj) {
						var pic_uri_dec = decodeURIComponent(obj.user.profile_image_url);
						$tweets.append('<div id="hm_work"><img width="40px" class="img-rounded" src=' + pic_uri_dec + ' />&nbsp;&nbsp; <b> ' + obj.user.name + '</b> <a href="javascript:;" id="s_n"> @' + obj.user.screen_name + '</a><small id="time" style="float:right;">' + obj.created_at.substring(0,10) + '</small><br /><p id="t_text">' + obj.text.replace(/(^|\s)(#[a-z\d-]+)/ig, "$1<b>$2</b>") + '</p><span><span class="glyphicon glyphicon-retweet" style="color:#00FF00;"></span> ' + obj.retweet_count + ' </span><span> &nbsp;&nbsp; <span class="glyphicon glyphicon-heart" style="color:#FA344B;"></span> ' + obj.favorite_count + ' </span></div>');
					});
					$('.d_t_recent_tweets-container').html($tweets);
				}
			}
		});
	}, 30000);
});