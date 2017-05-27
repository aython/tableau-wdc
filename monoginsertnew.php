<?php
ini_set('memory_limit', '-1');
   // connect to mongodb
  $m = new MongoClient("mongodb://ajaveed:ajaveed@localhost:27017/aqhib");
   echo "Connection to database successfully";
	
   // select a database
   $db = $m->test;
   echo "Database mydb selected";
   $collection = $db->txntable5;
   echo "Collection selected succsessfully";
	for ($x = 1001; $x <= 500000; $x++) {
      $document = array( 
      "txnid" => $x, 
      "description" => "UBUNTU", 
      "likes" => 10,
      "url" => "http://basheer.com",
      "by" => "Administrator",
	  "txnreferenceno" => 9885+$x
   );
	
   $collection->insert($document);
} 

 
   echo "Document inserted successfully";
?>