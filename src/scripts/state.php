<?php

// mysql.server start 
// mysql -u root -p 

include_once('./../../../private/pass.php');
$conn;
$input = file_get_contents('php://input'); 

error_log($_SERVER["REQUEST_METHOD"]);

switch($_SERVER["REQUEST_METHOD"]){
    case 'GET' : getState();
    break;
    case 'PUT': updateState();
    break;
}

function getState(){
    global $conn;
    $sql = "SELECT * FROM state LIMIT 1";
    if (dbConnection()){
        customResponse("Ok", $conn->query($sql)->fetchColumn());
    }else {
        customResponse("Error");
    }; 
}

function updateState(){
    global $input, $conn;

    session_cache_limiter('public');
    session_start();
    if(!isset($_SESSION["login"]) && !$_SESSION["login"] === TRUE ){
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
        session_destroy();
        customResponse("Error");
        return;
    }

    $data = json_decode($input, true)["data"];
    $sql = 'UPDATE state SET data=' . json_encode($data) ;
    if (dbConnection()){
        if ($conn->query($sql) == true) {
            getState();
        } else {
            customResponse("Error");
        }
    }else {
        customResponse("Error");
    };  
}

function customResponse( $status, $data = '' ){
    header('Content-type: application/json');
    if($status == "Error"){
        http_response_code(404);
    }else{
        http_response_code(200);
    }
    echo (json_encode(array(
        "status" => $status,
        "data" => $data   
    )));
    exit();
}

// function dbConnection(){
//     global $servername, $username, $password, $conn;
//     try {
//         $conn = new PDO('mysql:host='.$servername.';dbname=cwgtest', $username, $password);
//         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//         return true;
//     }
//     catch(PDOException $e){
//         echo "Connection failed: " . $e->getMessage() . "\n";
//         return false;
//     }
// }

function dbConnection(){
    global $servername, $username, $password, $conn;
    try {
        $conn = new PDO('mysql:host='.$servername.';dbname=cwgal_webdata', $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return true;
    }
    catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage() . "\n";
        return false;
    }
}

?>