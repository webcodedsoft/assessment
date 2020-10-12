<?php
// error_reporting(0);
require_once("core/initialize.php");


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $_responses = Initialize::singleRecord("books", $_GET);

    $bookCharacters = $_responses->characters;
    $bookname = $_responses->name;

    $charachers = [];


    
        if (!empty($bookCharacters)) {
        
            foreach ($bookCharacters as $key => $bookCharacter) {

                if ($key < 20) {

                    $bookCharacterId = preg_replace('/\D/', '', $bookCharacter);
                    $_character_responses = Initialize::singleRecord("characters", ["Id" => $bookCharacterId]);

                    // var_dump($bookname);

                    $name = $_character_responses->name;
                    $culture = $_character_responses->culture;
                    $born = $_character_responses->born;
                    $died = $_character_responses->died;
                    $titles = $_character_responses->titles;
                    $aliases = $_character_responses->aliases;

                    $characher = array('name' => $name, 'culture' => $culture, 'born' => $born, 'died' => $died, 'titles' => $titles, 'aliases' => $aliases,);
                    $charachers[] = $characher;
                }

            }
            $output = ["data" => $charachers, "TotalSize" => count($charachers), 'bookName' => $bookname];
            // var_dump($output);
            echo json_encode($output);
        }


} else {
    echo $output = ["Error" => "Invalid Request Method", "TotalSize" => 0];
}

