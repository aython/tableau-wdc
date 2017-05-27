<?php
ini_set('memory_limit', '-1');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
ini_set("allow_url_fopen", 1);
   // connect to mongodb
   $m = new MongoClient("mongodb://ajaveed:ajaveed@localhost:27017/aqhib");
  // echo "Connection to database successfully";
	
   // select a database
   $db = $m->test;
  // echo "Database mydb selected";
   $collection = $db->javeed;
 //  echo "Collection selected succsessfully";

   $cursor = $collection->find();
   // iterate cursor to display title of documents
	 $arr = array();
   foreach ($cursor as $c) {
      //$a = $document["title"];
	  //$b = $document["description"];
	  //$c = $document["by"];
	  //$d = $document["url"];
	  //$e = $document["likes"];
  //echo json_encode($row);
  
$temp = array("title" => $c["title"], "description" => $c["description"], 
                                            "by" => $c["by"],"url" => $c["url"],"likes" => $c["likes"]);
        array_push($arr, $temp);
  }
  /*$arr = array('user1' => [array('title' => $a,'description' => $b,'by' => $c,'url' => $d,'likes' => $e)]);
$gh = json_encode($arr);
echo $gh ;
*/
  $qrr = array('user1' => ($arr));
  echo json_encode($qrr);
?>