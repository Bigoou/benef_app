<?php
header("Access-Control-Allow-Origin: *"); 
header('content-type:application/json');      
header('Access-Control-Allow-Headers: Content-Type');  
      
      $db = new PDO('mysql:host=db5005161444.hosting-data.io;dbname=dbs4318125', 'dbu1522474', 'lesoussol06092021', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
      $req = "SELECT * FROM post ORDER BY id_post desc";
      $stmt=$db->query($req);
      $posts=$stmt->fetchAll(PDO::FETCH_ASSOC);
  echo'{
          "items" :
';
          echo json_encode($posts);
          echo'}'
?>