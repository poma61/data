<?php
 class Controller{

 static function request(){
  $action= (isset($_GET['view']))? $_GET['view']: "inicio";
    switch($action){
        case "inicio":
                 require_once("./vista/inicio.php");    
                  break; 
        case "servicios":
                 require_once("./vista/servicios.php");
                 break;
        case "informacion":
                  require_once("./vista/informacion.php");
                  break;
        case "contactanos":
                  require_once("./vista/contactanos.php");
                  break;
        case "info":
                   require_once("./vista/info.php");
                    break;

    }

 }   

}

?>