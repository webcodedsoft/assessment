<?php
require_once("core/initialize.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $_query = Initialize::dbInstance();

    //var_dump($_query);

    if (!empty($_POST["bookId"]) && !empty($_POST["Comment"]) && !empty($_SERVER['REMOTE_ADDR'])) {

        if (strlen($_POST["Comment"] > 500)) {
            return ["CommentError" => "Comment character exceed the limit."];
        } else {
            $comment = $_POST["Comment"];
            $bookId = $_POST["bookId"];
            $IpAddress = $_SERVER['REMOTE_ADDR'];
            $response = $_query->insertComment([$_POST["bookId"], $_POST["Comment"], $_SERVER['REMOTE_ADDR']]);

            $output = ["affectedRow" => $response, "Message" => "Comment Successfully Added"];
            echo json_encode($output);
            return ["affectedRow" => $response];
        }
        
       
    } else {
        return ["CommentError" => "Comment must not be empty"];
    }
   
}



if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $_query = Initialize::dbInstance();

    if (!empty($_GET["bookId"])) {
        $response = $_query->getComment($_GET["bookId"]);
        $output = ["data" => $response->results(), "TotalSize" => $response->count()];
        echo json_encode($output);
    } else {
        return ["CommentError" => "Unable to get comment"];
    }
    
    
    
}



