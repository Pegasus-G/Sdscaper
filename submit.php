<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";
 
class Mysqler {
// 创建连接
    var $conn;
    function __construct($ip, $username, $password, $dbname){
        $this->conn = new mysqli($ip, $username, $password, $dbname);
        if($this->conn->connect_error){
            echo("连接失败: ".$conn->connect_error."\n<br>");
            return;
        }
    }
    function __destruct(){
        $this->conn.close();
    }
    function insert($time,$lon,$lat,$db){
        $time='"'.$time.'"';
        $sql = "INSERT INTO source_data(Time,Longitude,Latitude,dB) VALUES (".$time.",".$lon.",".$lat.",".$db.")";
        if ($this->conn->query($sql) === TRUE) {
            echo("新记录插入成功");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

if($_POST["lon"] != null and $_POST["lat"] !=null and $_POST["db"] !=null and $_POST["time"] !=null){
    $hostname='107.174.206.180';
    $username='noisemap';
    $password='KeChuang2020';
    $dbname='noisemap';
    $mysqler = new Mysqler($hostname,$username,$password,$dbname);
    $mysqler->insert($_POST["time"],$_POST["lon"],$_POST["lat"],$_POST["db"]);
}else{
    echo("非法参数！<br>");
    var_dump($_POST);
}

?>