<?php
// Enterprise Asset Management - Graham Fisk - BigSmallweb.com - 2012 // 
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
session_start();
error_reporting(0);
ini_set('display_errors', 0);
$hostname_eam = "localhost";  // MYSQL database host adress - do not Change!
$database_eam = "dk2"; // MYSQL database name
$username_eam = "dk2user"; // Mysql Datbase user
$password_eam = "A!pl@2!83"; // Mysql Datbase password
$eam = mysql_pconnect($hostname_eam, $username_eam, $password_eam) or header("location: error.php"); 
?>