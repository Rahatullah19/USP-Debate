$(function(){
	var t_follower_h;
	var t_follower_d;
		
	$.ajax({
		url: 'twitter_d_t_follow.php',
		type: 'GET',
		success: function(responsed) {

			if (typeof responsed.errors === 'undefined' || responsed.errors.length < 1) {
					
					t_follower_d = parseInt(responsed.followers_count);
						
					$('#d_t_twitter_follow_count').html(t_follower_d);
					set_d_t_t_follow(t_follower_d);
				
			} else {
				$('#d_t_twitter_follow_count p:first').text('Response error');
			}
		},
		error: function(errors) {
			$('#d_t_twitter_follow_count p:first').text('Request error');
		}
	});
	
	$.ajax({
		url: 'twitter_h_c_follow.php',
		type: 'GET',
		success: function(responseh) {

			if (typeof responseh.errors === 'undefined' || responseh.errors.length < 1) {
				
					t_follower_h = parseInt(responseh.followers_count);
						
					$('#h_c_twitter_follow_count').html(t_follower_h);
					set_h_c_t_follow(t_follower_h);
				
			} else {
				$('#h_c_twitter_follow_count p:first').text('Response error');
			}
		},
		error: function(errors) {
			$('#h_c_twitter_follow_count p:first').text('Request error');
		}
	});
	
	
	function set_h_c_t_follow(t_f_h){
		t_follower_h = t_f_h;
		
		if(t_follower_d){
			get_t_f_per();
		}
	}
	
	function set_d_t_t_follow(t_f_d){
		t_follower_d = t_f_d;
		
		if(t_follower_h){
			get_t_f_per();
		}
		
	}
	
	function get_t_f_per(){
		total_t_follower = t_follower_h + t_follower_d;
	
		
		t_followerd_per = (t_follower_d / total_t_follower).toFixed(2);
		
		
		t_followd_per = t_followerd_per * 100;
		t_followh_per = 100 - t_followd_per;
		
		
		t_f_p_d = t_followd_per - (t_followd_per % 1);
		t_f_p_h = 100 - t_f_p_d;
		
		var $t_f_bar = $('<div></div>');
		$t_f_bar.append('<div class="progress-bar progress-bar-info progress-bar-striped active pp_t_d" id="progress_d_t_t_follower" role="progressbar" style="width:' + t_f_p_d + '%; height:30px;">#Trump - <span class="count_t_d">' +  t_f_p_d  + '</span>%</div><div class="progress-bar progress-bar-danger progress-bar-striped active pp_t_h" id="progress_h_c_t_follower" role="progressbar" style="width:' + t_f_p_h + '%; height:30px;">#Hillary - <span class="count_t_h">' + t_f_p_h + '</span>%</div>');
		
		$('.t_follower_bar').html($t_f_bar);
		
	}
	
	
});




