<?php
header("Access-Control-Allow-Origin: *"); 
header('content-type:application/json');      
header('Access-Control-Allow-Headers: Content-Type');

$db = new PDO('mysql:host=db5005161444.hosting-data.io;dbname=dbs4318125', 'dbu1522474', 'lesoussol06092021', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
$req_post = "SELECT * FROM post ORDER BY id_post desc";
$stmt=$db->query($req_post);
$posts=$stmt->fetchAll(PDO::FETCH_ASSOC);

if ($contentType === "application/json") {
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));
    $decoded = json_decode($content, true);
    
  //   If json_decode failed, the JSON is invalid.
    if(is_array($decoded)) {  
        echo $decoded['postal'];
        if($decoded['category'] != "select"){           //Catégorie vérifiée
            if($decoded['postal'] != null){             //Postal vérifiée
                if($decoded['filter_by'] != null){      //Filtre vérifié
                    if($decoded['filter_by'] == "date"){
                        
                    }else{

                    }
                }
                else{                                   //Catégorie + Poste / X Filtre

                }
            }else{                                      // Catégorie / X Postal
                if($decoded['filter_by'] != null){      // Catégorie + Filtre / X Postal
            }else{                                      // Catégorie / X Postal X Filtre

            }

        }
    }else{
        if($decoded['postal'] != null) {                // Postal / X Catégorie
            if($decoded['filter_by'] != null){          // Postal + Filtre / X Catégorie
                if($decoded['filter_by'] == "date"){

                }else{
                        
                }
            }else{                                      // Postal / X Catégorie X filtre
                $req_filtered = "SELECT * FROM post WHERE".$post['postal']." = ".$decoded['postal']." ORDER BY id_post desc";
                echo"c'est le bon chemin";
            }
        }else{                                          // X Postal X Catégorie
        if($decoded['filter_by'] != null){              // Filtre / X Catégorie X Postal
            if($decoded['filter_by'] == "date"){

            }else{
                
            }
            }
        }
    }
}else{
    $req_filtered = "SELECT * FROM post ORDER BY id_post desc";
}
$stmt_filtered=$db->query($req_filtered);
$posts_filtered=$stmt_filtered->fetchAll(PDO::FETCH_ASSOC);
echo'{
    "items" :';
    echo json_encode($posts_filtered);
    echo'}';
}else{
    echo'{
        "items" :';
        echo json_encode($posts);
        echo'}';
}

?>