<?php
 
// Zend library include path
set_include_path(get_include_path() . PATH_SEPARATOR . "$_SERVER[DOCUMENT_ROOT]/ZendGdata-1.8.1/library");
     
include_once("Google_Spreadsheet.php");
include_once("../../../config/post_spreadsheet_config.php");
 
$ss = new Google_Spreadsheet($u,$p);
$ss->useSpreadsheet("Hiring Application Submissions 2014");

$Name = Trim(stripslashes($_GET['Name'])); 

$Campus = Trim(stripslashes($_GET['Campus'])); 

$Position = Trim(stripslashes($_GET['Position'])); 


$Email = Trim(stripslashes($_GET['Email'])); 
$Phone = Trim(stripslashes($_GET['Phone']));
$Occupation = Trim(stripslashes($_GET['Occupation'])); 
$Title = Trim(stripslashes($_GET['Title'])); 
$Year = Trim(stripslashes($_GET['Year'])); 



 
// if not setting worksheet, "Sheet1" is assumed
// $ss->useWorksheet("worksheetName");
 
$row = array
(
    "Name" => $Name
    , "Campus" => $Campus
    , "Application Position" => $Position
	, "E-mail" => $Email
	, "Phone" => $Phone
	, "Program" => $Occupation
	, "Year of Study" => $Year
);
 
if ($ss->addRow($row)) echo "Form data successfully stored using Google Spreadsheet";
else echo "Error, unable to store spreadsheet data";
 
?>