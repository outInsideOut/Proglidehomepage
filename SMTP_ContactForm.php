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

     //set where email is sent from
     $mail->setFrom($_POST['mailFrom'],$_POST["name"]);
     //Set where mail is sent to
     $mail->addAddress('insideoutwebdev@gmail.com', "me");
     //set where reply should be sent to
     $mail->addReplyTo($_POST['mailFrom'],$_POST["name"]);

     //take variable values from html form
     $name = $_POST["name"];
     $subject = $_POST["subject"];
     $mailFrom = $_POST["mailFrom"];
     $message = nl2br($_POST["message"]);

     $mailTo = "finred@hotmail.co.uk";
     $headers = "From: ".$mailFrom;
     // $txt = $name." has sent you a message from the website: ".$message;
     $txt = "<h2 align=center>From: ".$name."<br>Email: ".$mailFrom."<br></h2>
     <p font-size:1.5rem><b>Message:</b></p><p>".$message."</p>";

     $mail->isHTML(true);
     $mail->Subject="Website Form Submission: ".$subject;
     $mail->Body=$txt;

     if ($mail->send()) {
         echo "Your message was sent successfully!";
     } else {
         echo "Mailer Error: " . $mail->ErrorInfo;
     }
     header("Location: http://insideoutwebdev.hopto.org/contact.html");
  }
?>
