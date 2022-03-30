<?php

$recepient = "royalst@ukr.net";
$sitename = "Realmed заявка";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$msg = trim($_POST["msg"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nМессенджер: $msg";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");