<?php
header('Access-Control-Allow-Origin:*');
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";
function printjson($arr) {
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
}

class Mysqler {
    // 创建连接
    var $conn;
    function __construct($ip, $username, $password, $dbname) {
        $this->conn = new mysqli($ip, $username, $password, $dbname);
        if ($this->conn->connect_error) {
            echo("连接失败: ".$conn->connect_error."\n<br>");
            return;
        }
    }
    function __destruct() {
        $this->conn->close();
    }
    function insert($time,$lon,$lat,$db) {
        $time = '"'.$time.'"';
        $sql = "INSERT INTO source_data(Time,Longitude,Latitude,dB) VALUES (".$time.",".$lon.",".$lat.",".$db.")";
        if ($this->conn->query($sql) === TRUE) {
            echo("新记录插入成功");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    function queryByTime($table,$where) {
        $sql = "SELECT * FROM ".$table." Where ".$where;
        $result = $this->conn->query($sql);

        $res = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                array_push($res,array("Lon" => $row["Longitude"],"Lat" => $row["Latitude"],"dB" => $row["dB"]));
            }
        } else {
            echo "No result!";
        }
        return $res;
    }
}

if ($_GET["wh"] != null and $_GET["tb"]!=null) {
    $hostname = '107.174.206.180';
    $username = 'noisemap';
    $password = 'KeChuang2020';
    $dbname = 'noisemap';
    $mysqler = new Mysqler($hostname,$username,$password,$dbname);
    $res = $mysqler->queryByTime($_GET["tb"],$_GET["wh"]);
    printjson($res);
} else {
    echo("非法参数！<br>");
    var_dump($_POST);
}

?>