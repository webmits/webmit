<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));		
		if($name != ''&& $phone != ''){
		$header = "Content-type: text/html; charset=utf-8 \r\n";
		$header = "From:$sitename\r\n";
		$thm = "тема";
		$msg="
Имя: $name
Телефон: $phone";
		$mail_to="dimon24-09-1993@yandex.ru";
		if(mail($mail_to, $thm, $msg, $header));
		echo "yes";		
		}else{
			echo "Имя и/или телефон не введены";		
		}
}else{
	echo "прямой запрос запрещен";	
}
?>