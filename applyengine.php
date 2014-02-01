<?php

$EmailFrom = "Applications@TEDxUofT.com";
$EmailTo = "brandon7810@gmail.com";
$Subject = "Application Submission";

$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Phone = Trim(stripslashes($_POST['Phone']));
$Occupation = Trim(stripslashes($_POST['Occupation'])); 
$Campus = Trim(stripslashes($_POST['Campus'])); 
$Dietary_res = Trim(stripslashes($_POST['Dietary_res'])); 
$Message = Trim(stripslashes($_POST['Message'])); 
$Additional_info = Trim(stripslashes($_POST['Additional_info'])); 
$Party_ticket = Trim(stripslashes($_POST['Party_ticket'])); 
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

$Body .= "Dietary_res: ";
$Body .= $Dietary_res;
$Body .= " \n";

$Body .= "Message: ";
$Body .= $Message;
$Body .= " \n";

$Body .= "Additional info: ";
$Body .= $Additional_info;
$Body .= " \n";

$Body .= "After party: ";
$Body .= $Party_ticket;
$Body .= " \n";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
?>