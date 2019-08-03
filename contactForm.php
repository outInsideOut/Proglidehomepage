<?php
  if (isset($_POST["submit"])) {

    $name = $_POST["name"];
    $subject = $_POST["subject"];
    $mailFrom = $_POST["mailFrom"];
    $message = $_POST["message"];

    $mailTo = "finred@hotmail.co.uk";
    $headers = "From: ".$mailFrom;
    $txt = $name." has sent you a message from the website:.\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
  }
 ?>
