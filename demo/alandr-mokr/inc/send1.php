<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
	
	include('config.php');
		$email = htmlspecialchars(trim($_POST['email']));
		$phone = htmlspecialchars(trim($_POST['phone']));	
		$name = htmlspecialchars(trim($_POST['name']));
		$area = htmlspecialchars(trim($_POST['area']));			

		if($phone != ''){
		$header = "Content-type: text/html; charset=utf-8 \r\n";
		$header = "From:$sitename\r\n";
		$thm = "$theme1";
		$msg="
Имя: $name
Email: $email
Телефон: $phone
Площадь: $area
";
		$mail_to="$mail";
		if(mail($mail_to, $thm, $msg, $header));
		echo "yes";		
		}else{
			echo "Телефон не введен";		
		}
}else{
	echo "прямой запрос запрещен";	
}
?>