<?php

	// header("Access-Control-Allow-Methods: *");
    echo 'jajajajajaa';
	// if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// 	email();
	// }

	// function email(){

	// 	$to = 'info@cwgal.com';
	// 	$subject = '[ PREINSCRIPCION ] ' . htmlentities($_REQUEST['nombre'], ENT_COMPAT | ENT_HTML401, 'UTF-8');

	// 	$msg = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/><title>CWG | Nueva preinscripción</title></head>';
	// 	$msg .= '<body style="color:#111835; font-size: 12px; line-height: 18px; font-family: helvetica, arial, verdana, sans-serif">';
	// 	$msg .= '<h3>Nueva preinscripción</h3>';
	// 	$msg .= '<p>Nombre y apellidos: '. htmlentities($_REQUEST['nombre'], ENT_COMPAT | ENT_HTML401, 'UTF-8') .'</p><br>';
	// 	$msg .= '<p>Teléfono: '. htmlentities($_REQUEST['tlf'], ENT_COMPAT | ENT_HTML401, 'UTF-8') .'</p><br>';
	// 	$msg .= '<p>Email: '. htmlentities($_REQUEST['email'], ENT_COMPAT | ENT_HTML401, 'UTF-8') .'</p><br>';
	// 	$msg .= '<p>Se quiere inscribir en: <strong>'. htmlentities($_REQUEST['modal'], ENT_COMPAT | ENT_HTML401, 'UTF-8') .'</strong> y para: <b>'. htmlentities($_REQUEST['grupo'], ENT_COMPAT | ENT_HTML401, 'UTF-8') .'</b></p><br>';
	// 	$msg .= '</body></html>';

	// 	$headers = 'From: '.htmlentities($_REQUEST['email'], ENT_COMPAT | ENT_HTML401, 'UTF-8') . "\r\n" . 'Reply-To: ' . htmlentities($_REQUEST['email'], ENT_COMPAT | ENT_HTML401, 'UTF-8') . "\r\n" . 'Content-type: text/html; charset=utf-8' . "\r\n" ;

	// 	$sent = @mail($to, $subject, $msg, $headers);

	// 	if ($sent) {
	// 		echo '{"response": true}';
	// 	}else{
	// 		echo '{"response": false}';
	// 	}
	// }

?>