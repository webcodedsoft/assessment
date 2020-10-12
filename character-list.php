<?php
require_once("core/initialize.php");


// foreach ($_GET as $key => $value) {
//     echo $key . " : " . $value . "<br />\r\n";
// }


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $_response = Initialize::hasParam("characters", $_GET);


    $charachers = [];

    if (!empty($_response)) {

        foreach ($_response as $key => $_character) {
            $name = $_character->name;
            $culture = $_character->culture;
            $born = $_character->born;
            $died = $_character->died;
            $titles = $_character->titles;
            $aliases = $_character->aliases;
            $gender = $_character->gender;

            $characher = array('name' => $name, 'gender' => $gender, 'culture' => $culture, 'born' => $born, 'died' => $died, 'titles' => $titles, 'aliases' => $aliases,);
            $charachers[] = $characher;
        }

        // if (array_key_exists("name", $_GET)) {
        //     rsort($books, 1);
        // }
        // if (array_key_exists("age", $_GET)) {
        //     $query_params .= !array_key_exists("gender", $_GET) ? "&".$_GET["age"] : ;
        // }
        // if (array_key_exists("sorting", $_GET)) {
        //     $query_params .= "&" . $_GET["sorting"];
        // }

        $output = ["data" => $charachers, "TotalSize" => count($_response)];
        return $output;
    }
    
} else {
    $_response = "Invalid Request Method";
}

