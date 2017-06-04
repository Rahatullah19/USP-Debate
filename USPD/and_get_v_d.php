<?php
$handled = fopen("counterd.txt", "r"); 
		if($handled){ 
		$counterd = ( int ) fread ($handled,30) ; 
		fclose ($handled) ; 
		echo $counterd;
		}
?>