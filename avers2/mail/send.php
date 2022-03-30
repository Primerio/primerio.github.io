<?php
$is_empty = true;
$is_empty = !empty($_POST['Телефон']);

if ($is_empty) {
	$subject_letter = $_POST['theme'];
	$to = 'svyatoslav.ezhov@gmail.com';

	$table = "";
	foreach ($_POST as $name => $value) {
		$is_for_send = $value !== $subject_letter && $value !== $to;
		if ($is_for_send) {
			$table .= "<tr><td><b>$name</b></td><td>$value</td></tr>";
		}
	}

	$message = "
	<html> 
			<head> 
					<title>$subject_letter</title> 
			</head> 
			<body>
				<table>
					$table
				</table>
			</body>
	</html>";


	$server = $_SERVER['SERVER_NAME'];
	$headers  = "From: noreply@$server;\r\n";
	$headers .= "Content-type: text/html; charset=utf-8 \r\n";

	$return_message = "";
	if (mail($to, $subject_letter, $message, $headers)) {
		$return_message = "send_success";
	} else {
		$return_message = "send_error";
	}
	echo $return_message;
	exit();
}
