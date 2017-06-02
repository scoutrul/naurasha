<?php     
	$mail_admin = 'support@naurasha.ru';
	$demo_email = $_POST['demo_email'];            
	$demo_name = $_POST['demo_name'];  

	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";
 	$subject = 'Получение ссылки на демо-ролик:  ' . $demo_name; 

	$body_message = 'DOM.NAURASHA.RU ДЕМО'. "\r\n";   
 	$body_message .= 'Имя клиента: ' . $demo_name . "\r\n";      
 	$body_message .= 'E-mail клиента: ' . $demo_email. "\r\n";   
 	$body_message .= 'Ссылка выслана';   
 	$headers .= 'From: '.$demo_email.' <'.$demo_email.'>' . "\r\n" .
 	 'Reply-To: <'.$demo_email.'>' . "\r\n" .
 	 'X-Mailer: PHP/' . phpversion();   

	mail($mail_admin, $subject, $body_message, $headers);      


	$headers_go = 'MIME-Version: 1.0' . "\r\n";
	$headers_go .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";
 	$subject_go = 'Ваша ссылка на демо-ролик «Наураша в стране Наурандии»  '; 
	$body_message_go = 'Здравствуйте!'. "\r\n";   
 	$body_message_go .= 'Ваша ссылка на демо-ролик цифровой лаборатории «Наураша в стране Наурандии»: https://www.youtube.com/watch?v=sCW_bqb_lXM' . "\r\n";      
 	$body_message_go .= 'Возникли вопросы? Мы всегда рады на них ответить! '. "\r\n";   
 	$body_message_go .= 'С уважением, команда поддержки support@naurasha.ru'. "\r\n";  
 	$body_message_go .= 'Телефон: +7(495) 766-24-23';   

 	$headers_go .= 'From: <'.$mail_admin.'>' . "\r\n" .
 	 'Reply-To: <'.$mail_admin.'>' . "\r\n" .
 	 'X-Mailer: PHP/' . phpversion();   
          
	mail($demo_email, $subject_go, $body_message_go, $headers_go);             
 

 header("Location: /#sent");
?>

