<?php

$EmailFrom = "Contact_us@TEDxUofT.com";
$EmailTo = "Applications@TEDxUofT.com";
$Subject = "Vistor Contact through website";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

$EmailTo2 = $Email;
$Subject2 = "Confirmation";
$EmailFrom2 = "Confirmation@TEDxUofT.com";

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= " \n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= " \n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= " \n";

$Body2 = "Hey, we have received your message:\n\n";
$Body2 .= $Body;
$Body2 .= "\n\nThank you very much! \n http://tedxuoft.com/";


// send email 
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

mail($EmailTo2, $Subject2, $Body2, "From: <$EmailFrom2>");
?>