<?php

ini_set('memory_limit', '-1');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//error_reporting(0);
//ini_set('display_errors', 0);
include("db.php");
//include('Connections/eam.php');
//mysql_select_db($database_eam, $eam);
//$sql = "select id AS 'firstname',asset_name AS 'lastname' from asset";
$sql = "select id,EventRowID,EventType,EventTypeDisplayName,UTCTime,Focus,FocusDisplay,ProcessInfo_FileName from incident_view LIMIT 2";
$rsCompanyName = mysqli_query($db, $sql) or die(mysql_error());
$userinfo = array();

while ($row_user = mysqli_fetch_assoc($rsCompanyName))
  {  $userinfo[] = $row_user;
  }
  $arr = array('user1' => $userinfo);
echo json_encode($arr);

	
ini_set('error_reporting', E_STRICT);

//$myObj->name = "John";
//$myObj->age = 30;
//$myObj->city = "New York";
//$myJSON = json_encode($myObj);




//$arr = array('user1' => [array('firstname' => 'jack', 'lastname' => 'kool')]);
//$gh = json_encode($arr);
//echo $myJSON;
//echo $gh;
?>