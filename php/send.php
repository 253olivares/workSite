<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../lib/PHPMailer/src/Exception.php';
require '../lib/PHPMailer/src/PHPMailer.php';
require '../lib/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

// $mail -> isSMTP();
// $mail-> Host="smtp.gmail.com";
// $mail-> SMTPAuth = true;

// $mail->Username="gradysitefeedbackform@gmail.com";
// $mail->Password="ewjmhzxeznyxqgys";

// $mail->SMTPSecure = "tls";
// $mail->Port=587;

// $mail->setFrom("gradysitefeedbackform@gmail.com");

// $mail->addAddress("olivarezmig@gmail.com");

// $mail->isHTML(true);

// $mail->Subject="Test Email Using PHPMailer";

// $mail->Body = "This is plain text email body";

// $mail->SMTPDebug=2;

// $mail->Send();

// if ($mail->Send()){
// echo '
// <script>
// alert("Sent Successfully");
// document.location.href = `/workSite/#/feedback`;
// </script>';
// } else {
//     echo "Error...! ";
// }
// $mail->smtpClose();
echo '
<script>
alert("Sent Successfully");
document.location.href = `/workSite/#/feedback`;
</script>';
?>