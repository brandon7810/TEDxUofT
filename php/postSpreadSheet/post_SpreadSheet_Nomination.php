<?php
 
// Zend library include path
set_include_path(get_include_path() . PATH_SEPARATOR . "$_SERVER[DOCUMENT_ROOT]/ZendGdata-1.8.1/library");
     
include_once("Google_Spreadsheet.php");
include_once("../../../config/post_spreadsheet_config.php");
 
$ss = new Google_Spreadsheet($u,$p);
$ss->useSpreadsheet("Nomination Submissions 2014");

$Nominator_Name = Trim(stripslashes($_GET['Nominator_Name'])); 
$Nominator_Email = Trim(stripslashes($_GET['Nominator_Email'])); 
$Nominator_Phone = Trim(stripslashes($_GET['Nominator_Phone'])); 

$Nominee_Name = Trim(stripslashes($_GET['Nominee_Name'])); 
$Nominee_Email = Trim(stripslashes($_GET['Nominee_Email'])); 
$Nominee_Phone = Trim(stripslashes($_GET['Nominee_Phone'])); 

$Overview = Trim(stripslashes($_GET['Overview'])); 
$Websites_Articles = Trim(stripslashes($_GET['Websites_Articles'])); 
$Audios_Videos = Trim(stripslashes($_GET['Audios_Videos'])); 
$Speaking_Style = Trim(stripslashes($_GET['Speaking_Style']));
$Why_fits_the_theme = Trim(stripslashes($_GET['Why_fits_the_theme'])); 




 
// if not setting worksheet, "Sheet1" is assumed
// $ss->useWorksheet("worksheetName");
 
$row = array
(
    "Nominator Name" => $Nominator_Name
    , "Nominator E-mail" => $Nominator_Email
    , "Nominator Phone" => $Nominator_Phone
	
	, "Nominee Name" => $Nominee_Name
	, "Nominee E-mail" => $Nominee_Email
	, "Nominee Phone" => $Nominee_Phone
	
	, "Overview" => $Overview
	, "Websites or Articles" => $Websites_Articles
	, "Audios or Videos" => $Audios_Videos
	, "Speaking Style" => $Speaking_Style
	, "Why fits the theme" => $Why_fits_the_theme

);
 
if ($ss->addRow($row)) echo "Form data successfully stored using Google Spreadsheet";
else echo "Error, unable to store spreadsheet data";
 
?>