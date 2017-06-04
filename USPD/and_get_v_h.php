<?php
$handleh = fopen("counterh.txt", "r"); 
		if($handleh){ 
		$counterh = ( int ) fread ($handleh,30) ; 
		fclose ($handleh) ; 
		echo $counterh;
		}
?>