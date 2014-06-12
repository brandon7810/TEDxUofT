<?php

$EmailFrom = "Applications@TEDxUofT.com";
$EmailTo = "Applications@TEDxUofT.com";
$Subject = "Hiring Application Submission";

$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Phone = Trim(stripslashes($_POST['Phone']));
$Occupation = Trim(stripslashes($_POST['Occupation'])); 
$Campus = Trim(stripslashes($_POST['Campus'])); 

$Title = Trim(stripslashes($_POST['Title'])); 
$Year = Trim(stripslashes($_POST['Year'])); 
$Position = Trim(stripslashes($_POST['Position'])); 


$Q1_ans = Trim(stripslashes($_POST['Q1_ans'])); 
$Q2_ans = Trim(stripslashes($_POST['Q2_ans'])); 
$Q3_ans = Trim(stripslashes($_POST['Q3_ans'])); 
$Q4_ans = Trim(stripslashes($_POST['Q4_ans'])); 
$Q5_ans = Trim(stripslashes($_POST['Q5_ans'])); 
$Q6_ans = Trim(stripslashes($_POST['Q6_ans'])); 
$Q7_ans = Trim(stripslashes($_POST['Q7_ans'])); 
$Q8_ans = Trim(stripslashes($_POST['Q8_ans'])); 
$Q9_ans = Trim(stripslashes($_POST['Q9_ans'])); 

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

$Body .= "Study program: ";
$Body .= $Occupation;
$Body .= " \n";

$Body .= "Campus: ";
$Body .= $Campus;
$Body .= " \n";

$Body .= "Title: ";
$Body .= $Title;
$Body .= " \n";

$Body .= "Year: ";
$Body .= $Year;
$Body .= " \n";

$Body .= "Position: ";
$Body .= $Position;
$Body .= " \n";

$Body .= "Q1_anser: ";
$Body .= $Q1_ans;
$Body .= " \n";

$Body .= "Q2_anser: ";
$Body .= $Q2_ans;
$Body .= " \n";

$Body .= "Q3_anser: ";
$Body .= $Q3_ans;
$Body .= " \n";

$Body .= "Q4_anser: ";
$Body .= $Q4_ans;
$Body .= " \n";

$Body .= "Q5_anser: ";
$Body .= $Q5_ans;
$Body .= " \n";

$Body .= "Q6_anser: ";
$Body .= $Q6_ans;
$Body .= " \n";

$Body .= "Q7_anser: ";
$Body .= $Q7_ans;
$Body .= " \n";

$Body .= "Q8_anser: ";
$Body .= $Q8_ans;
$Body .= " \n";

$Body .= "Q9_anser: ";
$Body .= $Q9_ans;
$Body .= " \n";



$Body2 = "Hey, we have received your application:\n\n";
$Body2 .= $Body;
$Body2 .= "\n\nThank you very much! Please contact us if you wish want to make changes for your application. \n http://tedxuoft.com/";



// send email 
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

mail($EmailTo2, $Subject2, $Body2, "From: <$EmailFrom2>");
?>