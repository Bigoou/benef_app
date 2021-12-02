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
            echo $decoded["username"];
            $db = new PDO('mysql:host=sqletud.u-pem.fr;dbname=antoine.droyer_db', 'antoine.droyer', '4Xvvyuzey5', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $requete = "INSERT INTO benef_bdd (username, email, birth, postal, mdp) VALUES (:username, :email, :birth, :postal, :mdp)";
            $stmt = $db ->prepare($requete);
            $stmt -> execute(array(
              ":username" => $decoded['username'],
              ":email" => $decoded['email'],
              ":birth" => $decoded['birth'],
              ":postal" => $decoded['postal'],
              ":mdp" => $decoded['mdp'],
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
