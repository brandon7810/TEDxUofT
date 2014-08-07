<?php

$EmailFrom = "Applications@TEDxUofT.com";
$EmailTo = "Applications@TEDxUofT.com";
$Subject = "Nomination Submission";

$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Phone = Trim(stripslashes($_POST['Phone']));

$Nominee_Name = Trim(stripslashes($_POST['Nominee_Name'])); 
$Nominee_Email = Trim(stripslashes($_POST['Nominee_Email'])); 
$Nominee_Phone = Trim(stripslashes($_POST['Nominee_Phone'])); 

$Overview_ans = Trim(stripslashes($_POST['Overview_ans'])); 
$links_ans = Trim(stripslashes($_POST['links_ans'])); 
$videos_ans = Trim(stripslashes($_POST['videos_ans'])); 
$speak_style_ans = Trim(stripslashes($_POST['speak_style_ans'])); 


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

$Body .= "Phone: ";
$Body .= $Phone;
$Body .= " \n";

$Body .= "Nominee_Name: ";
$Body .= $Nominee_Name;
$Body .= " \n";

$Body .= "Nominee_Email: ";
$Body .= $Nominee_Email;
$Body .= " \n";

$Body .= "Nominee_Phone: ";
$Body .= $Nominee_Phone;
$Body .= " \n";

$Body .= "Overview_ans: ";
$Body .= $Overview_ans;
$Body .= " \n";

$Body .= "links_ans: ";
$Body .= $links_ans;
$Body .= " \n";

$Body .= "videos_ans: ";
$Body .= $videos_ans;
$Body .= " \n";

$Body .= "speak_style_ans: ";
$Body .= $speak_style_ans;
$Body .= " \n";

$Body2 = "Hey, we have received your application:\n\n";
$Body2 .= $Body;
$Body2 .= "\n\nThank you very much! Please contact us if you wish want to make changes for your submission. \n http://tedxuoft.com/";



// send email 
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

mail($EmailTo2, $Subject2, $Body2, "From: <$EmailFrom2>");
?>