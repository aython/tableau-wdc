<?php
ini_set('memory_limit', '-1');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
ini_set("allow_url_fopen", 1);
$json = file_get_contents('https://graph.facebook.com/javeed.ecity?access_token=EAACEdEose0cBAJpjhQ7i8e28C5ighYNgbtyOTT3AfVo0awGD0662PgxG24STSKwJz1ukh0rnqjuJLpbXbD6oZAfMGcjgQMnzYsfR1n72olMDBpMQfe2FiZCGg6fjLVVu9YmhmAH94ykU0cmSPPhrFjGtfqeNxVQgijcZCn580zIiZCusydrX');
$obj = json_decode($json);
$a =  $obj->id;
$b =  $obj->can_post;
$c =  $obj->category;
$d =  $obj->checkins;
$e =  $obj->country_page_likes;
$f =  $obj->cover->cover_id;
$g =  $obj->cover->offset_x;
$h =  $obj->cover->offset_y;
$i =  $obj->cover->source;
$j = $obj->cover->id;
$l =  $obj->description;
$o =  $obj->has_added_app;
$p =  $obj->is_community_page;
$q =  $obj->is_published;
$r =  $obj->new_like_count;
$s =  $obj->likes;
$t =  $obj->link;
$u =  $obj->location->zip;
$u =  $obj->name;
$v =  $obj->name_with_location_descriptor;
$w =  $obj->offer_eligible;
$x =  $obj->promotion_eligible;
$y =  $obj->talking_about_count;
$z =  $obj->unread_message_count;
$aa =  $obj->unread_notif_count;
$ab =  $obj->unseen_message_count;
$ac =  $obj->username;
$ad =  $obj->were_here_count;
$arr = array('user1' => [array('id' => $a,
'can_post' => $b,
'category' => $c,
'checkins' => $d,
'country_page_likes' => $e,'cover_id' => $f,
'offset_x' => $g,
'offset_y' => $h,
'source' => $i,
'covernid' => $j, 'description' => $l, 'has_added_app' => $o, 'is_community_page' => $p, 'is_published' => $q, 'new_like_count' => $r,
'likes' => $s,'link' => $t,'zip' => $u, 'name' => $v, 'name_with_location_descriptor' => $w, 'offer_eligible' => $x, 'promotion_eligible' => $y,
'talking_about_count' => $z, 'unread_notif_count' => $aa, 'unseen_message_count' => $ab, 'username' => $ac, 'were_here_count' => $ad)]);

$gh = json_encode($arr);
echo $gh;

 //echo $a
 //$hj = array('user1' => $json);
//echo json_encode($hj);
?>