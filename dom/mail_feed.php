<?php     

	$mail_admin = 'scoutrul@mail.ru';

	$feed_email = $_POST['feed_email'];                 
	$feed_name = $_POST['feed_name'];          
	$feed_message = $_POST['feed_message'];   
    

	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";


 	$subject = 'DOM.NAURASHA.RU сообщение:  ' . $feed_name; 
 	
	$body_message = 'DOM.NAURASHA.RU'. "\r\n";   
 	$body_message .= 'Имя: ' . $feed_name . "\r\n";      
 	$body_message .= 'Сообщение: ' . $feed_message . "\r\n";  
 	$headers .= 'From: '.$feed_name.' <'.$feed_email.'>' . "\r\n" .
 	 'Reply-To: <'.$feed_email.'>' . "\r\n" .
 	 'X-Mailer: PHP/' . phpversion();   

	$mail_sent = mail($mail_admin, $subject, $body_message, $headers);               

	header("Location: /#sent");

?>

