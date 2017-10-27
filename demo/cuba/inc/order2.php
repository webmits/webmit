<?php
if($_SERVER['REQUEST_METHOD']=="POST"){
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
	if($name != "" && $email != "" && $message != ""){
		$header = "Content-type: text/html; charset=utf-8 \r\n";
		$header = "From:Cuba \r\n";
		$thm = "Theme Cuba";
		$msg="
		<strong>Name: </strong>$name<br>
		<strong>Email: </strong>$email<br>
		<strong>Message: </strong>$message<br>";
		$mail_to="dimon24-09-1993@yandex.ru";
		if(mail($mail_to, $thm, $msg, $header));
		echo "yes";		
	}else{
		echo "no";
	}
}
?>