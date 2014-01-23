<?php

$EmailFrom = "AppcalitionSubmission@TEDxUofT.com";
$EmailTo = "applications@TEDxUofT.com";
$Subject = "Application Submission";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Phone = Trim(stripslashes($_POST['Phone']));
$Occupation = Trim(stripslashes($_POST['Occupation'])); 
$Campus = Trim(stripslashes($_POST['Campus'])); 
$College = Trim(stripslashes($_POST['College'])); 
$Dietary_res = Trim(stripslashes($_POST['Dietary_res'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

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

$Body .= "Phone: ";
$Body .= $Phone;
$Body .= " \n";

$Body .= "Occupation: ";
$Body .= $Occupation;
$Body .= " \n";

$Body .= "Campus: ";
$Body .= $Campus;
$Body .= " \n";

$Body .= "College: ";
$Body .= $College;
$Body .= " \n";

$Body .= "Dietary_res: ";
$Body .= $Dietary_res;
$Body .= " \n";

$Body .= "Message: ";
$Body .= $Message;
$Body .= " \n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
?>