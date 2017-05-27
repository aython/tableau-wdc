<?php
ini_set('memory_limit', '-1');
   // connect to mongodb
   $m = new MongoClient();
   echo "Connection to database successfully";
	
   // select a database
   $db = $m->test;
   echo "Database mydb selected";
   $collection = $db->javeed;
   echo "Collection selected succsessfully";
	for ($x = 0; $x <= 1000000; $x++) {
      $document = array( 
      "title" => "This is a test page to download the data", 
      "description" => "UBUNTU", 
      "likes" => 10,
      "url" => "http://basheer.com",
      "by" => "Administrator"
   );
	
   $collection->insert($document);
} 

 
   echo "Document inserted successfully";
?>