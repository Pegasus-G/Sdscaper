<?php

    // 导入类（包含数据库操作类文件）
    include 'php_mysql_class.php';

    // 设置传入参数
    $hostname='http://107.174.206.180:888/phpmyadmin_99e9a1b8128414ba/';
    $username='noisemap';
    $password='KeChuang2020';
    $dbname='noisemap';
    $charset='utf8';

    //实例化对象
    $db = new Mysql($hostname,$username,$password,$dbname);

    //error_reporting(0);
    //如果请求来源是空，则直接返回空页面（安全性）
    if( $_SERVER['HTTP_REFERER'] == "" ) {
        return 0;
    }

    if ($_POST != null){
            // 经度
            $lon = $_POST["lon"];
            // 纬度
            $lat = $_POST["lat"];
            // 分贝值
            $db = $_POST["db"];
            // 时间
            $time = $_POST["time"];
            //插入数据
            $arr = array(
                'Longitude' => $lon,
                'Latitude' => $lat,
                'dB' => $db,
                'Time' => $time,
            );
            $res = $db->insert('source_data',$arr);
    }

    



?>