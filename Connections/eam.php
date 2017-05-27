<?php
// Enterprise Asset Management - Graham Fisk - BigSmallweb.com - 2012 // 
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
//error_reporting(E_ALL ^ E_DEPRECATED);
$hostname_eam = "localhost";  // MYSQL database host adress - do not Change!
$database_eam = "mcafee"; // MYSQL database name
$username_eam = "ajaveed"; // Mysql Datbase user
$password_eam = "ajaveed"; // Mysql Datbase password
$eam = mysql_pconnect($hostname_eam, $username_eam, $password_eam) or trigger_error(mysql_error(),E_USER_ERROR); 
?>
