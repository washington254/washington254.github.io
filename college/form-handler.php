<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'MargmarkConsultant@gmail.com';

$email_subject = 'New Client Message';

$email_body ="User name: $name.\n".
              "User email: $visitor_email .\n".
                "Subject: $subject.\n".
                "User message: $message .\n";
$to = 'kuibitafx@gmail.com';
$headers = "From: $email_from \r\n\";
$headers .= ";"Reply to: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
header("location: index.html");

?>