<?php     
	$mail_naurasha = 'manager@naurasha.ru';
	$mail_admin = 'scoutrul@gmail.com';

	$order_email = $_POST['order_email'];                 
	$order_name = $_POST['order_name'];          
	$order_phone = $_POST['order_phone'];   
	$order_message = $_POST['order_message'];  

	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";
 	$subject = 'DOM.NAURASHA.RU ЗАКАЗ:  ' . $order_name; 
 	
	$body_message = 'DOM.NAURASHA.RU ЗАКАЗ'. "\r\n";   
 	$body_message .= 'Имя: ' . $order_name . "\r\n";      
 	$body_message .= 'Сообщение: ' . $order_message. "\r\n";   
 	$body_message .= 'Телефон: ' . $order_phone;  
 	$headers .= 'From: '.$mail_naurasha.' <'.$mail_naurasha.'>' . "\r\n" .
 	 'Reply-To: <'.$order_email.'>' . "\r\n" .
 	 'X-Mailer: PHP/' . phpversion();   
    
	mail($mail_naurasha, $subject, $body_message, $headers);               
	mail($mail_admin, $subject, $body_message, $headers);               

	header("Location: /#sent");

?>

