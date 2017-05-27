<?php
//this is the original for elastic search as there was a colum src_ip which generates 2 values and sometimes 1 value for that please cope elas.php this one iss for common
ini_set('memory_limit', '-1');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
ini_set("allow_url_fopen", 1);
if ($stream = fopen('http://www.example.com', 'r')) {
    // print all the page starting at the offset 10
    echo stream_get_contents($stream, -1, 10);

    fclose($stream);
}

?>