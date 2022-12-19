<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "washingtonmaina255@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./assets/css/formsent.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form sent</title>
</head>
<body>
    <section class="container-fluid">
        <div class="row">
            <div class="col text-center">
               <div class="col">
                <span class="auto-type"></span><br>
               </div>
               <div class="col">
                <a href="index.html" class="btn btn-primary">Go Back To Home Page</a>
               </div>
            </div>
        </div>
    </section>
    

<script src="./typed.js-master/lib/typed.js"></script>
<script>
    var typed = new Typed(".auto-type", {
        strings: ["Thank you for Contacting me ","I will reply before tommorow","Have an amaizing rest of your day"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: false
    })
</script>
</body>
</html>

';


?>
