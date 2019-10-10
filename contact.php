<!DOCTYPE html>
<html lang="en">
<head>
  <meta chartset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact | AllFishing TV | The Best Fishing Resource on the Internet</title>
  

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- jQuery library -->
<script src="js/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="js/bootstrap.min.js"></script>

<link rel="stylesheet" href="css/allfishingtvgeneral.css">
<link rel="stylesheet" href="css/contact.css">
<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy|PT+Serif|Patua+One|Roboto|Ubuntu" rel="stylesheet">

</head>
<body>
<div class = "row">
	<div class = "col-md-12">
		<h1 class= "head">
			<div class="media">
				<div class="media-left media-bottom">
					<a href = "index.html"><img src="img/AllFishingTVThumbnailXSmall.png" class="media-object select fish" style="margin-left:10px; margin:7px;">
					</a>
				</div>
				<div class="media-body media-middle">
					<b id = "exhead">Contact</b>
				</div>
			</div>
		</h1>
	</div>
</div>
<nav class="navbar col-md-12 navbar navbar-default">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">
					Toggle navigation
				</span>
				<span class="icon-bar">
				</span>
				<span class="icon-bar">
				</span>
				<span class="icon-bar">
				</span>
			</button>
		</div>
		<div id="navbar" class="navbar-collapse collapse">
			<ul class="nav navbar-nav">
				<li>
					<a href="index.html">
						Home
					</a>
				</li>
				<li>
					<a href="media.html">
						Media
					</a>
				</li>
				<li>
					<a href="tacklebox.html">
						The Tacklebox
					</a>
				</li>
				<li>
					<a href="about.html">
						About
					</a>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li class="active">
					<a href="contact-us.html">
						Contact Us
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>


<div class = "row">
<div class = "col-md-10 col-md-offset-1">
	<div class = "panel panel-default panel-fish">
		<div class = "panel-heading fish-title">
			<h2 class = "panel-title">
				<u><b>Contact Form</u></b>
			</h2>
		</div>
		<div class = "panel-body">
			<div class="container">
				<p>
				<?php echo $_POST["firstName"]; ?>,<br/><br/> Thank you for your your interest. We will contact you if necessary in 48 business hours at <?php echo $_POST["email"]; ?>.<br/><br/>Thanks again,<br/><br/>AllFishing TV
				</p>
			</div>
		</div>
	</div>
</div>
</div>

<?php

// this creates the email to send to the customer
$msg = "Thank you " . $_POST["firstName"] . "," . "\n\nThank you for contacting AllFishing TV! Your support is much appreciated. If necessary we will contact you in 48 business hours. \n\nIn the mean time be sure to checkout https://www.youtube.com/AllFishingTV \n\nAllFishing TV";

// this creates the email to send back to me
$msg2 =  $_POST["firstName"] . " " . $_POST["lastNname"] . " at " . $_POST["email"] . " sent you a message:" . "\n\n" . $_POST["comments"];

// send email to customer
mail($_POST["email"],"Thank you for contacting AllFishingTV!",$msg,'From: pasquarellipaul@gmail.com' . "\r\n" .
    'Reply-To: pasquarellipaul@gmail.com');

// send email to me with customer's message
$to = "pasquarellip@gmail.com";
$subject = "AllFishingTV Inquiry";
$headers = "From: " . $_POST["email"];

mail($to,$subject,$msg2,$headers);

// Notes:
// $_POST["Variable name"] will give you the results after pressing the submit button.
// If you use headers and specify an E-mail address, the sent message will most likely end up in the spam folder.

?> 


</body>

<hr>
<footer>
AllFishing TV<br>
&copy 2018<br>
All Rights Reserved
</footer>
</html>