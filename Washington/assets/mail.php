<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "washingtonmaina255@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error! could not send message");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <!--====== Style css ======-->
    <link rel="stylesheet" href="public_html/assets/css/style.css">

    <link rel="stylesheet" href="./assets/css/formsent.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--====== Bootstrap css ======-->
    <link rel="stylesheet" href="./public_html/assets/css/bootstrap.min.css">
  <title>Form sent</title>
    <style>
    section{
        min-height: 100vh;
        width: 100vw;
        color:  #754ef9;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #232323;
        position: relative;
    }
    .row{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .row .col span{
        font-size: 30px;
    }
    a{
        text-decoration:none;
        color: #fff;
    }
    .btn{
        margin: 40px 0;
        outline:none;
        background:blue;
        padding:30px 40px;
        cursor:pointer;
    }
    .col{
        margin-bottom: 30px;
    }
    .btn{}
    </style>
</head>
<body>
    <section class="container-fluid">
        <div class="row">
            <div class="col text-center">
               <div class="col">
                <span class="auto-type"></span><br>
               </div>
               <div class="col">
                <a href="https://washingtonmaina.000webhostapp.com" class="btn btn-primary">Go Back To Home Page</a>
               </div>
            </div>
        </div>
    </section>
    
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>   
<script src="public_html/typed.js-master/lib/typed.js"></script>
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
