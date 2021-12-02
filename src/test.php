<?php
 $db = new PDO('mysql:host=db5005161444.hosting-data.io;dbname=dbs4318125;port=3306', 'dbu1522474', 'lesoussol06092021', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
 $requete = "INSERT INTO benef_bdd VALUES (NULL, :username, :email, :birth, :postal, :mdp)";
 $stmt = $db ->prepare($requete);
 $stmt -> bindValue(':username', $_GET["username"], PDO::PARAM_STR);
 $stmt -> bindValue(':email', $_GET["email"], PDO::PARAM_STR);
 $stmt -> bindValue(':birth', $_GET["birth"], PDO::PARAM_STR);
 $stmt -> bindValue(':postal', $_GET["postal"], PDO::PARAM_INT);
 $stmt -> bindValue(':mdp', $_GET["mdp"], PDO::PARAM_STR);
 $stmt -> execute();
 ?>