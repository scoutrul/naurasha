<?php     

	$mail_admin = 'scoutrul@mail.ru';

	$demo_email = $_POST['demo_email'];            
	$demo_name = $_POST['demo_name'];  
    

	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";


 	$subject = 'DOM.NAURASHA.RU ДЕМО:  ' . $demo_name; 
 	
	$body_message = 'DOM.NAURASHA.RU ДЕМО'. "\r\n";   
 	$body_message .= 'Имя: ' . $demo_name . "\r\n";      
 	$body_message .= 'E-mail: ' . $demo_email. "\r\n";   
 	$body_message .= 'Ссылка на скачку файла выслана';   

 	$headers .= 'From: '.$demo_name.' <'.$demo_email.'>' . "\r\n" .
 	 'Reply-To: <'.$demo_email.'>' . "\r\n" .
 	 'X-Mailer: PHP/' . phpversion();   

	$mail_sent = mail($mail_admin, $subject, $body_message, $headers);               

	

	$headers_go = 'MIME-Version: 1.0' . "\r\n";
	$headers_go .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";


 	$subject_go = 'Ваша ссылка на демо-версию Наураша в стране Наурандии  ' . $demo_name; 
 	
	$body_message_go = 'Здравствуйте!'. "\r\n";   
 	$body_message_go .= 'Ваша ссылка на демо-версию цифровой лаборатории Наураша в стране Наурандии: http://dom.naurasha.ru/files/setup.exe'. "\r\n";      
 	$body_message_go .= 'Возникли вопросы? Мы всегда рады на них ответить! '. "\r\n";   
 	$body_message_go .= 'С уважением, команда поддержки support@naurasha.ru'. "\r\n";  
 	$body_message_go .= 'Телефон: 8(495) 766-24-23';   

 	$headers_go .= 'From: '.$demo_name.' <'.$demo_email.'>' . "\r\n" .
 	 'Reply-To: <'.$demo_email.'>' . "\r\n" .
 	 'X-Mailer: PHP/' . phpversion();   

	$mail_sent = mail($demo_email, $subject_go, $body_message_go, $headers_go);             
 

 header("Location: /#sent");
?>

