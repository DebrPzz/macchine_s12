<?php 
	$msg='';
	$tbl='marche';
	$data=R::find($tbl);
	$out=Array();
	foreach ($data as $d){
		$out[]=$d;
	}
	sendJson($out);
	
?>