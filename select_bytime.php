<?php

    // 导入类（包含数据库操作类文件）
    include 'php_mysql_class.php';

    //判断请求
    switch($_SERVER['REQUEST_METHOD'])
    {
        case 'GET': $the_request = &$_GET; break;
        case 'POST': $the_request = &$_POST; break;
        default:
    }

    //获取请求参数
    $time = $the_request['time'];  //'早上'，'中午'，'晚上'
    $tab = $the_request['tab'];    //'source_data'(众源)，'point_data'（点源），'line_data'（线源）

    // 设置传入参数
    $hostname='107.174.206.180';
    $username='noisemap';
    $password='KeChuang2020';
    $dbname='noisemap';
    $charset='utf8';
    //设置查询时间
    //$time = "晚上";         //'早上'，'中午'，'晚上'
    //设置查询表
    //$tab = "source_data";    //'source_data'(众源)，'point_data'（点源），'line_data'（线源）

    //实例化对象
    $db = new Mysql($hostname,$username,$password,$dbname);
    
    if ($time == "早上")
    {
        $t = "hour(Time)>6 AND hour(Time)<11;";
    }
    elseif ($time == "中午")
    {
        $t = "hour(Time)>10 AND hour(Time)<16;";
    }
    elseif ($time == "晚上")
    {
        $t = "hour(Time)>16;";
    }
    else {
        $t = "true";
        $time = "'or 1=1 or'";
    }
    
    function to_json($arr)
    {
        $js = json_encode($arr);
        return $js;
    }

    
    //查询sql语句
    if ($tab == "source_data")
    {
        $sql = "SELECT * FROM source_data WHERE ".$t;
    }
    elseif ($tab == "point_data")
    {
        
        $sql = "SELECT * FROM point_data WHERE Time='$time';";

    }
    elseif ($tab == "line_data")
    {
        $sql = "SELECT * FROM line_data WHERE Time='$time';";
    }
    else{
        $sql = "SELECT * FROM test WHERE Time='$time';";
    }

    //输出查询sql语句
    //echo "$sql";
    //输出记录数
    //$db -> getRows($sql);

    //输出json格式
    $res = $db -> getAll($sql);
    print_r(to_json($res));


    

?>