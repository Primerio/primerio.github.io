<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['Name'];
$phone = $_POST['Phone'];
$email = $_POST['Email'];

$utm_source = trim($_POST["utm_source"]);
$utm_medium = trim($_POST["utm_medium"]);
$utm_campaign = trim($_POST["utm_campaign"]);
$utm_term = trim($_POST["utm_term"]);
$utm_content = trim($_POST["utm_content"]);
$country = trim($_POST["country"]);
$city = trim($_POST["city"]);
//$mail->SMTPDebug = 3;




$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;
$mail->Username = 'noreply@realeast.su';
$mail->Password = '592467382';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('noreply@realeast.su');
$mail->addAddress('zamirkul@gmail.com');
$mail->addAddress('islam_yablokov@mail.ru');
$mail->addAddress('irina2don@gmail.com');  
//$mail->addAddress('alexey.mahdi@gmail.com');
//$mail->addAddress('leadlist@dimbrowsky.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');

//$mail->addCC('royalst@ukr.net');
//$mail->addCC('leadlistzaavki@gmail.com');
//$mail->addCC('nastyamazurevich@gmail.com');
//$mail->addCC('islam_yablokov@mail.ru');
//$mail->addBCC('');
//$mail->addAttachment('/var/tmp/file.tar.gz');
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');
$mail->isHTML(true);

$mail->Subject = 'bosfor2turk.realeast.su';
$mail->Body    = 'Имя:' .$name . '<br> Телефон: ' . $phone. '<br>Почта: ' .$email . '<br><br><br><br><br>' . 'utm_source: ' . $utm_source . '<br> utm_medium: ' . $utm_medium . '<br> utm_campaign: ' . $utm_campaign . '<br> utm_term: ' . $utm_term . '<br> utm_content: ' . $utm_content . '<br><br> Страна отправки - ' . $country . '<br> Город: ' . $city;
$mail->AltBody = '$name $phone $email';

if(!$mail->send()) {
    echo 'Error';
} else {
   /* header('location: thank-you.html');*/
}
?>
