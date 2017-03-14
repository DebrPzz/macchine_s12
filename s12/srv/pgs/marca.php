<?php 
	$msg='';
	$tbl='marche';
	$id = (!empty($_REQUEST['id'])) ? intval($_REQUEST['id']) : false;
	$dt = json_decode(file_get_contents('php://input'));
	if (empty($id) && !empty($dt->id)) $id=intval($dt->id);
	$data=($id) ? R::load($tbl, $id) :  R::dispense($tbl);
	if (!empty($dt)) : 
		$data->marca = $dt->marca; 
		try {
			R::store($data);
			$msg='Dati salvati correttamente ('.json_encode($data).') ';
		} catch (RedBeanPHP\RedException\SQL $e) {
			$msg=$e->getMessage();
		}
	endif;	
	
	if (!empty($_REQUEST['del'])) : 
		$data=R::load($tbl, intval($_REQUEST['del']));
		try{
			R::trash($data);
		} catch (RedBeanPHP\RedException\SQL $e) {
			$msg=$e->getMessage();
		}
	endif;
	sendJson($data);

	
?>