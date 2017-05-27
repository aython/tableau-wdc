<?php
ini_set('memory_limit', '-1');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
ini_set("allow_url_fopen", 1);
   // connect to mongodb
   $m = new MongoClient("mongodb://localhost:27017/aqhib");
  // echo "Connection to database successfully";
	
   // select a database
   $db = $m->aqhib;
  // echo "Database mydb selected";
   $collection = $db->dissemination_plan;
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
  
$temp = array("partner_ngo_details" => $c["partner_ngo_details"], "screening_platform" => $c["screening_platform"], 
                                            "date_of_dissemination" => date('Y-M-d h:i:s', $c["date_of_dissemination"]->sec),"month_of_dissemination" => date('Y-M-d h:i:s', $c["month_of_dissemination"]->sec),"name_of_the_video" => $c["name_of_the_video"],
"dissemination_master_id" => (string) $c["dissemination_master_id"],
"sync_num" => $c["sync_num"],
"node1" => $c["node1"],
"created_by" => $c["created_by"],
"node4" => $c["node4"],
"visit_supervisor" => $c["visit_supervisor"],
"visit_chief_functionary" => $c["visit_chief_functionary"],
"node5" => $c["node5"],
"node2" => $c["node2"],
"node3" => $c["node3"],
"visit_project_anchor" => $c["visit_project_anchor"],
"node6" => $c["node6"],
"sync_status" => $c["sync_status"],
"created_date" => date('Y-M-d h:i:s', $c["created_date"]->sec),
"supervisor" => $c["supervisor"],
"status" => $c["status"]);
        array_push($arr, $temp);

		}
  /*$arr = array('user1' => [array('title' => $a,'description' => $b,'by' => $c,'url' => $d,'likes' => $e)]);
$gh = json_encode($arr);
echo $gh ;
*/
  $qrr = array('user1' => ($arr));
  echo json_encode($qrr);
?>