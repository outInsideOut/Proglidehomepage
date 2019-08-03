<?php

    if(isset($_POST['submit'])) {
      require 'PHPMailer/PHPMailerAutoload.php';

      $mail = new PHPMailer;
      $mail->isSMTP();

      $mail->Host = 'smtp.gmail.com'; // Which SMTP server to use.
      $mail->Port = 587; // Which port to use, 587 is the default port for TLS security.
      $mail->SMTPSecure = 'tls'; // Which security method to use. TLS is most secure.
      $mail->SMTPAuth = true; // Whether you need to login. This is almost always required.
      $mail->Username = "insideoutwebdev@gmail.com"; // Your Gmail address.
      $mail->Password = "ifcrzsjwltjulmnp"; // Your Gmail login password or App Specific Password.

    /*
     * Message Configuration
     */

     $mail->setFrom($_POST['mailFrom'],$_POST["name"]);
     $mail->addAddress('insideoutwebdev@gmail.com', "me");
     $mail->addReplyTo($_POST['mailFrom'],$_POST["name"]);

     $name = $_POST["name"];
     $subject = $_POST["subject"];
     $mailFrom = $_POST["mailFrom"];
     $message = $_POST["message"];

     $mailTo = "finred@hotmail.co.uk";
     $headers = "From: ".$mailFrom;
     $txt = $name." has sent you a message from the website:".$message;

     $mail->isHTML(true);
     $mail->Subject="Website Form Submission:".$subject;
     $mail->Body=$txt;


    if ($mail->send()) {
        echo "Your message was sent successfully!";
    } else {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
  }
?>
