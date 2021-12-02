<?php
        header("Access-Control-Allow-Origin: *"); 
        header('content-type:application/json');      
        header('Access-Control-Allow-Headers: Content-Type');  
              
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

        if ($contentType === "application/json") {
        session_start();
          //Receive the RAW post data.
          $content = trim(file_get_contents("php://input"));
        
          $decoded = json_decode($content, true);
        //   If json_decode failed, the JSON is invalid.
          if(is_array($decoded)) {
            foreach ($decoded as $v) {
                echo "Valeur courante : $v.\n";
            }
            
            $db = new PDO('mysql:host=sqletud.u-pem.fr;dbname=antoine.droyer_db', 'antoine.droyer', '4Xvvyuzey5', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $req = "SELECT * FROM benef_bdd WHERE username='{$decoded['username']}'";
            $stmt=$db->query($req);

            if($stmt->rowcount()==1){

                $result=$stmt->fetch(PDO::FETCH_ASSOC);
                if($decoded["mdp"] == $result["mdp"]){
                    echo('C bon');
                    
                } else{
                   echo('Mdp pas bon');
                }
             }

          } else {
            // Send error back to user.
            echo "{'answer' : 'pas ok'}";
          }
        }else{
            echo "{'answer' : 'test'}";
            var_dump($_GET);
        }
        ?>
