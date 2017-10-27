<?php
if($_SERVER['REQUEST_METHOD']=="POST"){
	$name = trim($_POST['name']);
	$phone = trim($_POST['phone']);
	if($name != "" && $phone != ""){
		$header = "Content-type: text/html; charset=utf-8 \r\n";
		$header = "From:Cuba \r\n";
		$thm = "Theme Cuba";
		$msg="
		<strong>Name: </strong>$name<br>
		<strong>Phone: </strong>$phone<br>";
		$mail_to="dimon24-09-1993@yandex.ru";
		if(mail($mail_to, $thm, $msg, $header));
		echo "yes";		
	}else{
		echo "no";
	}
}
?>