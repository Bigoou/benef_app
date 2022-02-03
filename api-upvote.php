<?php
        header("Access-Control-Allow-Origin: *"); 
        header('content-type:application/json');      
        header('Access-Control-Allow-Headers: Content-Type');  
              
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

        if ($contentType === "application/json") {
          //Receive the RAW post data.
          $content = trim(file_get_contents("php://input"));
        
          $decoded = json_decode($content, true);

          if(is_array($decoded)) {
            foreach ($decoded as $v) {
                echo "Valeur courante : $v.\n";
            }
            $newUpvote =  $decoded["upvote"] + 1;
            echo $newUpvote;
            $db = new PDO('mysql:host=db5005161444.hosting-data.io;dbname=dbs4318125', 'dbu1522474', 'lesoussol06092021', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $requete = "UPDATE post SET upvote = :newUpvote WHERE id_post =".$decoded['id_post']."";
            $stmt = $db ->prepare($requete);
            $stmt -> execute(array(
              ":newUpvote" => $newUpvote,
            ));

          } else {
            // Send error back to user.
            echo "{'answer' : 'pas ok'}";
          }
        }else{
            echo "{'answer' : 'test'}";
            var_dump($_GET);
        }
        ?>
