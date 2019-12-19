<?php
$name = $_POST['firstname'];
$address = $_POST['address'];
$phone = $_POST['telephone'];
$mail = $_POST['email'];

$file = fopen("file.txt","at");
fwrite($file,"\n $phone \n $address \n $name \n $mail");
fclose($file);
?>