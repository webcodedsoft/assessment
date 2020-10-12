<?php
require_once("core/initialize.php");


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $_responses = Initialize::get("books");
    $_query = Initialize::dbInstance();

    $books = array();
    $commentCount = 0;
    $output = [];

    //var_dump($_responses);

    if (!$_responses["Error"]) {

        if ($_responses) {
            foreach ($_responses as $key => $_response) {

                $bookId = preg_replace('/\D/', '', $_response->url);

                $response = $_query->getComment($bookId);
                //$commentCount = $response->count();
                $bookId = preg_replace('/\D/', '', $_response->url);

                $books[] = array(
                    "bookId" => $bookId,
                    "url" => $_response->url, "name" => $_response->name,
                    "released" => $_response->released, "authors" => $_response->authors,
                    "commentCount" => $response->count()
                );
            }
            rsort($books, 1);

            //var_dump($output);
            $output = ["data" => $books, "TotalSize" => count($_responses)];
            echo json_encode($output);
        }

    } else {
        $output = ["Error" => $_responses["Error"], "TotalSize" => $_responses["TotalSize"]];
        echo json_encode($output);
    }
    

    //var_dump($books);
    


    //Extract books data and perform sql query here
} else {
    $_response = "Invalid Request Method";
}

// $rs = json_decode($_response);
// var_dump(asort($rs));
// var_dump($_response);