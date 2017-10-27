<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
	include('config.php');
		$name = htmlspecialchars(trim($_POST['name']));
		$email = htmlspecialchars(trim($_POST['email']));
				
		if($name != ''&& $email != ''){
		$header = "Content-type: text/html; charset=utf-8 \r\n";
		$header = "From:$sitename\r\n";
		$thm = "$theme4";
		$msg="
Имя: $name
E-mail: $email";
		$mail_to="$mail";
		if(mail($mail_to, $thm, $msg, $header));
		echo "yes";		
		}else{
			echo "Имя и/или телефон не введены";		
		}
}else{
	echo "прямой запрос запрещен";	
}
?>