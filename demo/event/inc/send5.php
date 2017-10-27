<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
	include('config.php');
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$email = htmlspecialchars(trim($_POST['email']));	
		$message = htmlspecialchars(trim($_POST['message']));	
		
		if($name != ''&& $phone != '' && $email != ''){
		$header = "Content-type: text/html; charset=utf-8 \r\n";
		$header = "From:$sitename\r\n";
		$thm = "$theme5";
		$msg="
Имя: $name
Телефон: $phone
E-mail: $email
Сообщение: $message";
		$mail_to="$mail";
		if(mail($mail_to, $thm, $msg, $header));
		echo "yes";		
		}else{
			echo "Имя, телефон и/или email не введены";		
		}
}else{
	echo "прямой запрос запрещен";	
}
?>