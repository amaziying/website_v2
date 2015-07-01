<?php
require '/var/www/html/PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;

$msg = $_POST['message'];                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ziyingzhanginc@gmail.com';                 // SMTP username
$mail->Password = 'max214214';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->From = 'ziyingzhanginc@gmail.com';
$mail->FromName = 'Website Contact';
$mail->addAddress('ziyingzhanginc@gmail.com');

$mail->Subject = 'Contact from Website';
$mail->Body    = $msg;
$mail->AltBody = $msg;

if(!$mail->send()) {
   echo json_encode(array('status' => 'failed'));
} else {
   echo json_encode(array('status' => 'success'));
}
?>