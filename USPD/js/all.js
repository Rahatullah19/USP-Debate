
$('.v_count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 1000,
		easing: 'swing',
		step: function (now_n_t_d) {
			$(this).text(Math.ceil(now_n_t_d).toLocaleString());
		}
	});
});

function load_t_count(){
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
}
function set_t_bar(){
	load_t_count();
	$('.count_t_h').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now_t_h) {
				$('.count_t_h').text(Math.ceil(now_t_h));
				$('.pp_t_h').css( "width", Math.ceil(now_t_h) + '%' ); 
			}
		});
	});
	$('.count_t_d').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now_t_d) {
				$('.count_t_d').text(Math.ceil(now_t_d));
				$('.pp_t_d').css( "width", Math.ceil(now_t_d) + '%' ); 
			}
		});
	});
}
function load_f_count(){
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
}
function set_f_bar(){
	load_f_count();
	$('.count_f_h').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now_f_h) {
				$('.count_f_h').text(Math.ceil(now_f_h));
				$('.pp_f_h').css( "width", Math.ceil(now_f_h) + '%' ); 
			}
		});
	});
	$('.count_f_d').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now_f_d) {
				$('.count_f_d').text(Math.ceil(now_f_d));
				$('.pp_f_d').css( "width", Math.ceil(now_f_d) + '%' ); 
			}
		});
	});
}
function play(ch){
	var live_player = document.getElementById('player');
	var live_title = document.getElementById('live');
	if(live_title.value !== ch){
		switch(ch) {
			case 'bb':
				live_player.src = "http://www.youtube.com/embed/<?php echo get_youtubeid('https://www.youtube.com/watch?v=zBxRWAs6SKM');?>";
				break;
			case 'pbs':
				live_player.src = "http://www.youtube.com/embed/<?php echo get_youtubeid('https://www.youtube.com/watch?v=EuHuzhzb1nc');?>";
				break;
			case 'fn':
				live_player.src = "http://www.youtube.com/embed/<?php echo get_youtubeid('https://www.youtube.com/watch?v=ubp0CEbqW-U');?>";
				break;
			case 'tm':
				live_player.src = "http://www.youtube.com/embed/<?php echo get_youtubeid('https://www.youtube.com/watch?v=UtD0Gx9IvkI');?>";
				break;
			case 'wp':
				live_player.src = "http://www.youtube.com/embed/<?php echo get_youtubeid('https://www.youtube.com/watch?v=L6QElWIKfDk');?>";
				break;
		}
	}
}
function set_i_f_count(){
	i_f_h_c = 2.3;
	i_f_d_t = 2.5;
	i_total_follower = i_f_h_c + i_f_d_t;
	i_follorwerd_per = (i_f_d_t / i_total_follower).toFixed(2);
	i_f_d = i_follorwerd_per * 100;
	i_f_h = 100 - i_f_d;
	var $i_f_bar = $('<div></div>');
	$i_f_bar.append('<div class="progress-bar progress-bar-info progress-bar-striped active pp_d" id="progress_d_t_i_f" role="progressbar" style="width:' + i_f_d + '%; height:30px;">#Trump - <span class="count_d">' +  i_f_d  + '</span>%</div><div class="progress-bar progress-bar-danger progress-bar-striped active pp_h" id="progress_h_c_i_f" role="progressbar" style="width:' + i_f_h + '%; height:30px;">#Hillary - <span class="count_h">' + i_f_h + '</span>%</div>');
	$('.i_follower_bar').html($i_f_bar);
	$('.count_h').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now2) {
				$('.count_h').text(Math.ceil(now2));
				$('.pp_h').css( "width", Math.ceil(now2) + '%' ); 
			}
		});
	});
	$('.count_d').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now1) {
				$('.count_d').text(Math.ceil(now1));
				$('.pp_d').css( "width", Math.ceil(now1) + '%' ); 
			}
		});
	});
}
function set_us_etov(){
	u_e_h_c = <?php echo $h_c_etov ; ?>;
	u_e_d_t = <?php echo $d_t_etov ; ?>;
	u_total_e = u_e_h_c + u_e_d_t;
	u_ed_per = (u_e_d_t / u_total_e).toFixed(2);
	u_e_d = u_ed_per * 100;
	u_e_h = 100 - u_e_d;
	u_e_p_d = u_e_d - (u_e_d % 1);
	u_e_p_h = 100 - u_e_p_d;
	$('#d_t_u_e_count').html(u_e_d_t);
	$('#h_c_u_e_count').html(u_e_h_c);
	var $u_e_bar = $('<div></div>');
	$u_e_bar.append('<div class="progress-bar progress-bar-info progress-bar-striped active pp_v_d" id="progress_d_t_i_f" role="progressbar" style="width:' + u_e_p_d + '%; height:30px;">#Trump - <span class="count_v_d">' +  u_e_p_d  + '</span>%</div><div class="progress-bar progress-bar-danger progress-bar-striped active pp_v_h" id="progress_h_c_i_f" role="progressbar" style="width:' + u_e_p_h + '%; height:30px;">#Hillary - <span class="count_v_h">' + u_e_p_h + '</span>%</div>');
	$('.u_etov_bar').html($u_e_bar);
	$('.count_v_d').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now_v_d) {
				$(this).text(Math.ceil(now_v_d));
				$('.pp_v_d').css( "width", Math.ceil(now_v_d) + '%' ); 
			}
		});
	});
	$('.count_v_h').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step: function (now_v_h) {
				$(this).text(Math.ceil(now_v_h));
				$('.pp_v_h').css( "width", Math.ceil(now_v_h) + '%' ); 
			}
		});
	});
}
function h_d_c_t(v) {
	if (typeof user_u_e_h_c == 'undefined' && typeof user_u_e_d_t == 'undefined'){
	user_u_e_h_c = <?php echo $h_c_etov ; ?>;
	user_u_e_d_t = <?php echo $d_t_etov ; ?>;
	}
	if(v == 'c_h'){
		$.ajax({
			method: 'POST',
			url: '/uspd/add_v_c_h.php',
			data: {'v_c_h' : "etov_c_h"}
		}); 
		user_u_e_h_c += 1;
		$("#vote_now_h").unbind('click');
		$('#s_h_c').html(' You have Voted <span style="color:#E0162B"> Hillary </span>');
		$('#vote_now_d').hide();
	}
	else if(v == 't_d'){
		$.ajax({
			method: 'POST',
			url: '/uspd/add_v_t_d.php',
			data: {'v_t_d' : "etov_t_d"} 
		}); 
		user_u_e_d_t += 1;
		$("#vote_now_d").unbind('click');
		$('#s_d_t').html(' You have Voted <span style="color:#0052A5"> Trump </span> ');
		$('#vote_now_h').hide();
	}
	user_u_total_e = user_u_e_h_c + user_u_e_d_t;
	user_u_ed_per = (user_u_e_d_t / user_u_total_e).toFixed(2);
	user_u_e_d = user_u_ed_per * 100;
	user_u_e_h = 100 - user_u_e_d;
	user_u_e_p_d = user_u_e_d - (user_u_e_d % 1);
	user_u_e_p_h = 100 - user_u_e_p_d;
	$('#you_winner_count_d').html(user_u_e_d_t);
	$('#you_winner_count_h').html(user_u_e_h_c);
	var $user_u_e_bar = $('<div></div>');
	$user_u_e_bar.append('<div class="progress-bar progress-bar-info progress-bar-striped active" id="progress_d_t_i_f" role="progressbar" style="width:' + user_u_e_p_d + '%; height:30px;">#Trump - <span>' +  user_u_e_p_d  + '</span>%</div><div class="progress-bar progress-bar-danger progress-bar-striped active" id="progress_h_c_i_f" role="progressbar" style="width:' + user_u_e_p_h + '%; height:30px;">#Hillary - <span>' + user_u_e_p_h + '</span>%</div>');
	$('.u_etov_bar').html($user_u_e_bar);
}
function startBattle(){
	var battle_field = document.getElementById('battle_field');
	var start_battle = document.getElementById('start_battle');
	if(battle_field.style.display !== "none"){
		battle_field.style.display = "none";
	} else {
		battle_field.style.display = "";
		start_battle.style.display = "none";
	}
	$('.count_n_i').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now_n_i) {
				$(this).text(Math.ceil(now_n_i));
			}
		});
	});
	$('.count_n_v_d').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now_n_v_d) {
				$(this).text(Math.ceil(now_n_v_d).toLocaleString());
			}
		});
	});
	$('.count_n_v_h').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now_n_v_h) {
				$(this).text(Math.ceil(now_n_v_h).toLocaleString());
			}
		});
	});
	$('.count_n_t_d').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now_n_t_d) {
				$(this).text(Math.ceil(now_n_t_d).toLocaleString());
			}
		});
	});
	$('.count_n_t_h').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now_n_t_h) {
				$(this).text(Math.ceil(now_n_t_h).toLocaleString());
			}
		});
	});
	$('.count_n_f_d').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now_n_f_d) {
				$(this).text(Math.ceil(now_n_f_d).toLocaleString());
			}
		});
	});
	$('.count_n_f_h').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now_n_f_h) {
				$(this).text(Math.ceil(now_n_f_h).toLocaleString());
			}
		});
	});
}
