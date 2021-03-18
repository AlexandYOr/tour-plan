<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон  :</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
$sendMail = "
<b>Почта клиента для рассылки новостей: $email</b>
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'emailfortasting@yandex.ru'; // Логин на почте
    $mail->Password   = 'Walrus9096'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('emailfortasting@yandex.ru', 'Test Email'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('avo01121997@yandex.ru');  

// Отправка сообщения
if ($email == null) {
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;
} 
elseif(($email != null and $phone == null)) {
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $sendMail;
}    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header ('Location: thankyou.html');

