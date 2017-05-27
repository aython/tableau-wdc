<?php
ini_set('memory_limit', '-1');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
ini_set("allow_url_fopen", 1);
$url = 'http://52.220.90.126:9200/ossec_log1/_search?pretty=true&q=*:*&size=200000';
$content = file_get_contents($url);


$json = json_decode($content, true);
 $arr = array();
foreach($json['hits']['hits'] as $item) { 
	$temp = array("jtimestamp" => $item['_source']['@timestamp'],"alertid" => (isset($item['_source']['alertid']) == true ? $item['_source']['alertid'] : 'null'), "event_heading" => (isset($item['_source']['event_heading']) == true ? $item['_source']['event_heading'] : 'null'),"reporting_host" => (isset($item['_source']['reporting_host']) == true ? $item['_source']['reporting_host'] : 'null'),
"dst_ip" => (isset($item['_source']['dst_ip']) == true ? $item['_source']['dst_ip'] : 'null'),"reporting_source" => (isset($item['_source']['reporting_source']) == true ? $item['_source']['reporting_source'] : 'null'),"rule_id" => (isset($item['_source']['rule_id']) == true ? $item['_source']['rule_id'] : 'null'),"level" => (isset($item['_source']['level']) == true ? $item['_source']['level'] : 'null'),"event_information" => (isset($item['_source']['event_information']) == true ? $item['_source']['event_information'] : 'null'),
"src_ip" =>(isset($item['_source']['src_ip'] ) == true ? $item['_source']['src_ip']  : 'null'),"src_ip_multiple" =>(isset($item['_source']['src_ip'] [0]) == true ? $item['_source']['src_ip'] [0]  : 'null'),"request_httpj" => (isset($item['_source']['request']) == true ? $item['_source']['request'] : 'null'),
"response_httpj" => (isset($item['_source']['response']) == true ? $item['_source']['response'] : 'null'),"userj" => (isset($item['_source']['user']) == true ? $item['_source']['user'] : 'null'),
"link" => (isset($item['_source']['link']) == true ? $item['_source']['link'] : 'null'),"detailed_information" => (isset($item['_source']['detailed_information']) == true ? $item['_source']['detailed_information'] : 'null'),
"cat_name1" => (isset($item['_source']['cat_name'][0]) == true ? $item['_source']['cat_name'][0] : 'null'),"cat_name2" => (isset($item['_source']['cat_name'][1]) == true ? $item['_source']['cat_name'][1] : 'null'),
"cat_name3" => (isset($item['_source']['cat_name'] [2]) == true ? $item['_source']['cat_name'] [2] : 'null'),"cat_name4" => (isset($item['_source']['cat_name'] [3]) == true ? $item['_source']['cat_name'] [3] : 'null'),"geoip_ip" => (isset($item['_source']['geoip'] ['ip']) == true ? $item['_source']['geoip'] ['ip'] : 'null'),
"geoip_country_code2" => (isset($item['_source']['geoip'] ['country_code2']) == true ? $item['_source']['geoip'] ['country_code2'] : 'null'),"geoip_country_code3" => (isset($item['_source']['geoip'] ['country_code3']) == true ? $item['_source']['geoip'] ['country_code3'] : 'null'),
"geoip_country_name" => (isset($item['_source']['geoip'] ['country_name']) == true ? $item['_source']['geoip'] ['country_name'] : 'null'),
"geoip_continent_code" => (isset($item['_source']['geoip'] ['continent_code']) == true ? $item['_source']['geoip'] ['continent_code'] : 'null'),
"geoip_region_name" => (isset($item['_source']['geoip'] ['region_name']) == true ? $item['_source']['geoip'] ['region_name'] : 'null'),
"geoip_city_name" => (isset($item['_source']['geoip'] ['city_name']) == true ? $item['_source']['geoip'] ['city_name'] : 'null'),
"geoip_latitude" => (isset($item['_source']['geoip'] ['latitude']) == true ? $item['_source']['geoip'] ['latitude'] : 'null'),
"geoip_longitude" => (isset($item['_source']['geoip'] ['longitude']) == true ? $item['_source']['geoip'] ['longitude'] : 'null'),
"geoip_dma_code" => (isset($item['_source']['geoip'] ['dma_code']) == true ? $item['_source']['geoip'] ['dma_code'] : 'null'),
"geoip_area_code" => (isset($item['_source']['geoip'] ['area_code']) == true ? $item['_source']['geoip'] ['area_code'] : 'null'),
"geoip_timezone" => (isset($item['_source']['geoip'] ['timezone']) == true ? $item['_source']['geoip'] ['timezone'] : 'null'),
"geoip_real_region_name" => (isset($item['_source']['geoip'] ['real_region_name']) == true ? $item['_source']['geoip'] ['real_region_name'] : 'null'),
"geoip_location1" => (isset($item['_source']['geoip'] ['location'] [0]) == true ? $item['_source']['geoip'] ['location'] [0] : 'null'),
"geoip_location2" => (isset($item['_source']['geoip'] ['location'] [1]) == true ? $item['_source']['geoip'] ['location'] [1] : 'null'),
"src_port" => (isset($item['_source']['src_port']) == true ? $item['_source']['src_port'] : 'null'),
"dst_port" => (isset($item['_source']['dst_port']) == true ? $item['_source']['dst_port'] : 'null')
);

	array_push($arr, $temp);
}
$json_arrayb = json_encode($arr);
 // suppose your json data variable name is $json then decode it and assing to a new variable $json_array

$json_array = json_decode($json_arrayb, true); 

  for ( $i=0; $i < count(  $json_array ); $i++ ) // All elements are reviewed
         { 
           if(strlen($json_array[$i]['src_ip_multiple']) == 1 ) // check condition
                     { 
                ($json_array[$i]['src_ip_multiple'] = $json_array[$i]['src_ip']);
			//	echo ($json_array[$i]['src_ip_multiple']);
                          unset($json_array[$i]['src_ip']);
						  }else{
						  ($json_array[$i]['src_ip_multiple'] = $json_array[$i]['src_ip_multiple']);
						  unset($json_array[$i]['src_ip']);
						  }
             } 
$qrr = array('user1' => ($json_array));
 echo json_encode($qrr);
?>