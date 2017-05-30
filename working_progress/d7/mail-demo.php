<?php     

	$mail_admin = 'scoutrul@mail.ru';
       
	$demo_email = $_POST['demo_email'];            
    


	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";



	 	$subject = 'Ссылка на НАУРАША.ДЕМО для ' . $demo_email;  
		$body_message = 'DOM.NAURASHA.RU'. "\r\n";    
	 	$body_message .= 'Контакт: ' . $demo_email . "\r\n";  
	 	$headers .= 'From: НАУРАША.ДЕМО ' . ' <'.$demo_email.'>' . "\r\n" .
	 	 'Reply-To: <'.$demo_email.'>' . "\r\n" .
	 	 'X-Mailer: PHP/' . phpversion();

	$mail_sent = mail($mail_admin, $subject, $body_message, $headers);               

	header("Location: /#sent");

?>

