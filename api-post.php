<?php
        header("Access-Control-Allow-Origin: *"); 
        header('content-type:application/json');      
        header('Access-Control-Allow-Headers: Content-Type');  
              
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

        if ($contentType === "application/json") {
          //Receive the RAW post data.
          $content = trim(file_get_contents("php://input"));
        
          $decoded = json_decode($content, true);


        //   If json_decode failed, the JSON is invalid.
          if(is_array($decoded)) {
            foreach ($decoded as $v) {
                echo "Valeur courante : $v.\n";
            }
            // echo $decoded["username"];
            $db = new PDO('mysql:host=db5005161444.hosting-data.io;dbname=dbs4318125', 'dbu1522474', 'lesoussol06092021', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $requete = "INSERT INTO post (image, title, description, address, postal, expiration, category) VALUES (:image, :title, :description, :address, :postal, :expiration, :category)";
            $stmt = $db ->prepare($requete);
            $stmt -> execute(array(
              ":image" => $decoded['image'],
              ":title" => $decoded['title'],
              ":description" => $decoded['desc'],
              ":address" => $decoded['address'],
              ":postal" => $decoded['postal'],
              ":expiration" => $decoded['expiration'],
              ":category" => $decoded['category'],

            ));

          } else {
            // Send error back to user.
            echo "{'answer' : 'pas ok'}";
          }
        }else{
            echo "{'answer' : 'test'}";
            var_dump($_POST);
        }
        ?>