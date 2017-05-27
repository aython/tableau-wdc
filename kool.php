<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


ini_set('error_reporting', E_STRICT);
$json = <<<JSON
[
  {"ID":"HC","ID_NAME":"Human Capital","TASK_ID":"HC01","TASK_NAME":"Human service 1"},
  {"ID":"MM","ID_NAME":"Management","TASK_ID":"MM01","TASK_NAME":"Management 1"},
  {"ID":"HC","ID_NAME":"Human Capital","TASK_ID":"HC02","TASK_NAME":"Human service 2"},
  {"ID":"HC","ID_NAME":"Human Capital","TASK_ID":"HC03","TASK_NAME":"Human service 3"},
  {"ID":"QC","ID_NAME":"Quality Control","TASK_ID":"QC01","TASK_NAME":"Quality Control     1"},
  {"ID":"HC","ID_NAME":"Human Capital","TASK_ID":"HC04","TASK_NAME":"Human service 4"}
]
JSON;

// Decode your JSON and create a placeholder array
$objects = json_decode($json);
$grouped = array();

// Loop JSON objects
foreach($objects as $object) {
    if(!array_key_exists($object->ID, $grouped)) { // a new ID...
         $newObject = new stdClass();

         // Copy the ID/ID_NAME, and create an ITEMS placeholder
         $newObject->ID = $object->ID;
         $newObject->ID_NAME = $object->ID_NAME;
         $newObject->ITEMS = array();

         // Save this new object
         $grouped[$object->ID] = $newObject;
    }

    $taskObject = new stdClass();

    // Copy the TASK/TASK_NAME
    $taskObject->TASK_ID = $object->TASK_ID;
    $taskObject->TASK_NAME = $object->TASK_NAME;

    // Append this new task to the ITEMS array
    $grouped[$object->ID]->ITEMS[] = $taskObject;
}

// We use array_values() to remove the keys used to identify similar objects
// And then re-encode this data :)
$grouped = array_values($grouped);
$json = json_encode($grouped);
echo $json;
?>
