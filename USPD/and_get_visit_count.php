<?php
$handle = fopen("counter.txt", "r"); 
		if($handle){ 
		$counter = ( int ) fread ($handle,30) ; 
		fclose ($handle) ; 
		$counter++ ;
		$handle = fopen("counter.txt", "w" ) ; 
		fwrite($handle,$counter) ; 
		fclose ($handle); 
		echo $counter;
		} 
?>