<?php
error_reporting(0);



class Initialize {

    private static $curl_init, $_db_instance, $_instance, $_con_db, $__result, $endPoint = "https://anapioficeandfire.com/api/";
    private $_query, $_error = false, $_results = null, $_count = 0;

    public function __construct() {
        self::$_con_db = new mysqli("localhost", "root", "webcoded1", "talents_assessment");
        if (mysqli_connect_errno(self::$_con_db)) {
            echo mysqli_connect_error();
        }
    }


    public static function getInstance() {
        
        if (!isset(self::$curl_init)) {
            self::$curl_init = curl_init();
            curl_setopt(self::$curl_init, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt(self::$curl_init, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt(self::$curl_init, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt(self::$curl_init, CURLOPT_CONNECTTIMEOUT, 4);
            curl_setopt(self::$curl_init, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt(self::$curl_init, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt(self::$curl_init, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        }
        return self::$curl_init;
    }


    public static function dbInstance() {
        if (!isset(self::$_db_instance)) {
            self::$_db_instance = new Initialize();
        }
        return self::$_db_instance;
    }


    public static function get($address)
    {
        if (!empty($address) ) {
            //is contain & or / 

            if (!preg_match('/[\'\/~`\!@#\$%\^&\*\(\)_\-\+=\{\}\[\]\|;:"\<\>,\.\?\\\]/', $address)){
                self::$_instance = Initialize::getInstance();
                $url = self::$endPoint . $address;
                
                curl_setopt(self::$_instance, CURLOPT_URL, $url);

                $json = curl_exec(self::$_instance);
                if (!$json) {
                    curl_error(self::$_instance);
                    return ["Error" => "Not internet connection is detected", "TotalSize" => 0];
                }
                curl_close(self::$_instance);

                return json_decode($json);

            } else {
                return ["Error" => "Error in your query", "TotalSize" => 0];
            }
            
        } else {
            return ["Error" => "Please provide the endpoint", "TotalSize" => 0];
        }
           
    }


    public static function singleRecord($address, $param)
    {

        if (!empty($param["Id"]) && is_numeric(intval($param["Id"])) && $param["Id"] > 0) {
            self::$_instance = Initialize::getInstance();
            $url = self::$endPoint."$address/". $param["Id"];

            curl_setopt(self::$_instance, CURLOPT_URL, $url);

            $json = curl_exec(self::$_instance);
            if (!$json) {
                curl_error(self::$_instance);
                return ["Error" => "Not internet connection is detected", "TotalSize" => 0];
            }
            //curl_close(self::$_instance);

            return json_decode($json);

        } else {
            return ["Error" => "Please provide query id", "TotalSize" => 0];
        }
    }


   
    public static function hasParam($address, $params)
    {
            self::$_instance = Initialize::getInstance();

            $query_params = "";
            $url = "";
            
            //var_dump($params);
            if (count($params)) {
                
                if (array_key_exists("gender", $params)) {
                    $query_params .= "gender=".$params["gender"];
                    $url = self::$endPoint . $address;
                } 

               
            } 

            $url = self::$endPoint . $address."?$query_params";

            curl_setopt(self::$_instance, CURLOPT_URL, $url);

            $json = curl_exec(self::$_instance);
            $json = json_decode($json);
            

            if (!$json) {
                curl_error(self::$_instance);
                return ["Error" => "Not internet connection is detected", "TotalSize" => 0];
            }
            curl_close(self::$_instance);

            return $json;
            //echo "Here";
       
    }



    public function query($sql, $params = array()){

        $this->_error = false;
        $this->_results = null;

        
        if ($stmt = self::$_con_db->prepare($sql)) {

            if (count($params)) {
                $types = str_repeat('s', count($params)); //add data type base on array count 
                //var_dump($params);
                foreach ($params as $param) {
                    $stmt->bind_param($types, ...$params);
                }
            }

            //var_dump($stmt);
            if ($stmt->execute()) {
                $this->_query = $stmt->get_result();
                $this->_count = 0;

                $this->_count = $stmt->affected_rows;

                
                if (!$this->_query) {
                    $this->_count = $stmt->affected_rows;
                } elseif ($this->_count > 0) {
                    // while ($row = $this->_query->fetch_object()) {
                    //     $this->_results[] = $row;
                    // }
                    $this->_results =  $this->_query->fetch_all(MYSQLI_ASSOC);
                    
                }


                $stmt->close();
            }
        }


        return $this;
    }




    public function insertComment($params)
    {
        $sql = "INSERT INTO comments (bookId, comment, IpAddress) VALUES (?,?,?)";
        if (!$this->query($sql, $params)) {
            return $this->_count;
        } else {
            return $this->_count;
        }
    }



    public function getComment($bookId)
    {
        $sql = "SELECT * FROM comments WHERE bookId = ? ORDER BY createdAt DESC";
        if (!$this->query($sql, [$bookId])) {
            return $this;
        }
        return $this;
    }


    public function results()
    {
        return $this->_results;
    }

    public function count()
    {
        return $this->_count;
    }

}

