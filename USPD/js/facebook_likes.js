$(function(){
	var like_h;
	var like_d;
	var numberh;
	var numberd;
	
	$.ajax({
		url: 'https://graph.facebook.com/hillaryclinton/?fields=fan_count&access_token=EAAE8OdFLeEEBAGdlaL0rhSxLaonLyFVdwNM601mjgU00IDpZCUpvZCfIteuzxsZAf3y0RqnvlNXp14XHLuUrGPnl31KEIrAZCR3LF70E2cda9ks9wWy0HUizZC7PRv6ZAgj73x32KuE1wfsNM4pCyZAkFhBt394LZBwZD',
		type: 'GET',
		success: function(responseh) {
			if (typeof responseh.errors === 'undefined' || responseh.errors.length < 1) {
				
					likesh = parseInt(responseh.fan_count);
					
				$('#h_c_likes_count').html(likesh);
				set_h_c_likes(likesh);
				
			} else {
				$('#h_c_likes p:first').text('Response error');
			}
		},
		error: function(errors) {
			$('#h_c_likes p:first').text('Request error');
		}
	});
	
	$.ajax({
		url: 'https://graph.facebook.com/DonaldTrump/?fields=fan_count&access_token=EAAE8OdFLeEEBAGdlaL0rhSxLaonLyFVdwNM601mjgU00IDpZCUpvZCfIteuzxsZAf3y0RqnvlNXp14XHLuUrGPnl31KEIrAZCR3LF70E2cda9ks9wWy0HUizZC7PRv6ZAgj73x32KuE1wfsNM4pCyZAkFhBt394LZBwZD',
		type: 'GET',
		success: function(responsed) {
			if (typeof responsed.errors === 'undefined' || responsed.errors.length < 1) {
				
					likesd = parseInt(responsed.fan_count);
					
				$('#d_t_likes_count').html(likesd);
				
				set_d_t_likes(likesd);
				
			} else {
				$('#d_t_likes p:first').text('Response error');
			}
		},
		error: function(errors) {
			$('#d_t_likes p:first').text('Request error');
		}
	});
	
	function set_h_c_likes(lh){
		like_h = lh;
		
		if(like_d){
			get_f_per();
		}
	}
	
	function set_d_t_likes(ld){
		like_d = ld;
		
		if(like_h){
			get_f_per();
		}
		
	}
	
	function get_f_per(){
		total_likes = like_h + like_d;
	
		likesd_per = (like_d / total_likes).toFixed(2);
		
		l_p_d = likesd_per * 100;
		l_p_h = 100 - l_p_d;
		
		var $fb_l_bar = $('<div></div>');
		$fb_l_bar.append('<div class="progress-bar progress-bar-info progress-bar-striped active pp_f_d" id="progress_d_t_likes" role="progressbar" style="width:' + l_p_d + '%; height:30px;">#Trump - <span class="count_f_d">' +  l_p_d  + '</span>%</div><div class="progress-bar progress-bar-danger progress-bar-striped active pp_f_h" id="progress_h_c_likes" role="progressbar" style="width:' + l_p_h + '%; height:30px;">#Hillary - <span class="count_f_h">' + l_p_h + '</span>%</div>');
		
		$('.fb_likes_bar').html($fb_l_bar);
		
	}
});