<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../lib/PHPMailer/src/Exception.php';
require '../lib/PHPMailer/src/PHPMailer.php';
require '../lib/PHPMailer/src/SMTP.php';

if(isset($_POST["send"])) {
    $mail = new PHPMailer(true);
    if(isset($_POST["name"])) {
        $senderName = "Name: ".$_POST["name"];
    } else  {
        $senderName = "Name: No name provided.";
    }

    if(isset($_POST["telephone"])) {
        $senderTelephone = "Sender telephone #: ".$_POST["telephone"];
    } else  {
        $senderTelephone = "Sender telephone #: No telephone provided.";
    }

    if(isset($_POST["formmail_mail_email"])) {
        $senderEmail = "Sender contact email: ".$_POST["formmail_mail_email"];
    } else  {
        $senderEmail = "Sender contact email: No email provided.";
    }

    if(isset($_POST["fax"])) {
        $senderFax = "Sender contact fax #: ".$_POST["fax"];
    } else  {
        $senderFax = "Sender contact fax #: No fax # provided.";
    }
    if(isset($_POST["fax"]) == "true") {
        $mail->Priority = 1;
    } 

    if(isset($_POST["subjectSelect"] ) && isset($_POST["choice"] ) ) {
        $senderSubject ="Site email feedback: " . $_POST["subjectSelect"] . "(".$_POST["choice"] .")";
    } 

    $messageComment ="Senders says:". $_POST["comment"];

    $mail -> isSMTP();
    $mail-> Host="smtp.gmail.com";
    $mail-> SMTPAuth = true;
    
    $mail->Username="gradysitefeedbackform@gmail.com";
    $mail->Password="ewjmhzxeznyxqgys"; 
    // Password not current used for testing changed for final build

    $mail->SMTPSecure = "tls";
    $mail->Port=587

    $mail->setFrom("gradysitefeedbackform@gmail.com");

    $mail->addAddress("tmg@gradybros.com");

    $mail->isHTML(true);

    $mail->Subject=$senderSubject;

    $mail->Body = "
    Gready Brothers Webside Feedback Form Entered Information:
    <br>
    $senderName
    <br>
    $senderTelephone
    <br>
    $senderEmail
    <br>
    $senderFax
    <br>
    $messageComment
    ";

    $mail->Send();
    echo '
    <script>
    alert("Message sent!");
    document.location.href = `/#/feedback`;
    </script>';

} else{
    echo '
    <script>
    alert("Message not sent!");
    document.location.href = `/#/feedback`;
    </script>';
};









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
?>