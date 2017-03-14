<?php 

	error_reporting(E_ALL);
	ini_set('display_errors',1);
	
	require_once('lib/rb.php');
	
	date_default_timezone_set('Europe/Rome');
	
	R::setup('mysql:host=127.0.0.1;dbname=s12','admin', 'admin');
	R::freeze(TRUE);
	
	function sendJson($data="",$code=200,$n=true){
	  header('Cache-Control: no-cache, must-revalidate');
	  header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
	  header('Content-type: application/json');
	  $j = json_encode($data);
	  if ($n) $j = str_replace(':null',':""',$j);
	  echo $j;
	};
	
	$p=(empty($_REQUEST['p'])) ? false : $_REQUEST['p'];
	$pg='pgs/'.$p.'.php';
	if ($p && file_exists($pg)) include_once($pg);
	
?>