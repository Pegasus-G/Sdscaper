<?php


// 数据库类
class Mysql {
    private $conn;


    // 构造函数
    function __construct($hostname,$username,$password,$dbname,$charset = 'utf8') {
        $conn = mysqli_connect($hostname,$username,$password);
        if (!$conn) {
            echo "<h2>连接数据库失败!</h2>";
            // 返回上一次连接错误的错误描述
            echo "连接错误: ".mysqli_connect_error();
            die();
        }
        $this->conn = $conn;
        $res = mysqli_select_db($this->conn,$dbname);
        if (!$res) {
            echo "<h2>选择数据库{$dbname}错误！</h2>";
            die(); 
        }
        mysqli_set_charset($this->conn,$charset);
    }


        // 关闭先前打开的数据库链接
        function __destruct() {
            mysqli_close($this->conn);
        }

        // 获取一条数据
        function getOne($sql) {
            $result = mysqli_query($this->conn,$sql); //结果集
            $arr = mysqli_fetch_assoc($result); //从结果集中获取第一行数据
            return $arr;
        }

        // 获取多条数据
        function getAll($sql) {
            $result = mysqli_query($this->conn,$sql); //结果集
            $arrs = mysqli_fetch_all($result,MYSQLI_ASSOC); //从结果集中获取所有行数据，并作为二维数组返回
            return $arrs;
        }


        // 获取统计记录数（适用于select）
        function getRows($sql) {
            $result = mysqli_query($this->conn,$sql); //结果集
            $rows = mysqli_num_rows($result); //从结果集中获取总行数
            echo "记录数为：$rows";
        }

        // 获取前一次MYSQL操作所影响的行数（如增删改查都适用）（不是从结果集而是从连接标识符来统计）
        function getRows2($sql) {
            mysqli_query($this->conn,$sql);
            $rows = mysqli_affected_rows($this->conn); //从连接标识符中获取受影响的行数
            echo "共有{$rows}条记录受影响";
        }

        // 

        // // 获取数据库所有信息
        // //eg. $sql="insert into table_name (`name`, `address`) values ('zhangsan', 'shanghai')"
        // function getAll($sql) {
        //     $result = mysqli_query($this->conn,$sql);
        //     $data = array();
        //     if ($result && mysqli_num_rows($result) > 0) {
        //         while ($row = mysqli_fetch_assoc($result)) {
        //             $data[] = $row;
        //         }
        //     }
        //     return $data;
        // }

        // // 获取单条数据
        // function getOne($sql) {
        //     $result = mysqli_query($this->conn,$sql);
        //     $data = array();
        //     if ($result && mysqli_num_rows($result) > 0) {
        //         $data = mysqli_fetch_assoc($result);
        //     }
        //     return $data;
        // }

        // // 插入数据
        // function insert($table,$data) {
        //     $str = '';
        //     $str .= "INSERT INTO $table ";
        //     $str .= "(".implode(",",array_keys($data)).") ";
        //     $str .= " VALUES ";
        //     $str .= "(".implode(",",$data).")";
        //     $res = mysqli_query($this->conn,$sql);
        //     if ($res && mysqli_affected_rows() > 0) {
        //         return mysqli_insert_id();
        //     } else {
        //         return false;
        //     }
        // }

        // // 更新数据库
        // function update($table,$data,$where) {
        //     $sql = 'UPDATE '.$table.' SET ';
        //     foreach ($data as $key => $value) {
        //         $sql .= "`{$key}`='{$value}',";
        //     }
        //     $sql = rtrim($sql,',');
        //     $sql .= " WHERE $where";
        //     $res = mysqli_query($this->conn,$sql);
        //     if ($res && mysqli_affected_rows()) {
        //         return mysqli_affected_rows();
        //     } else {
        //         return false;
        //     }
        // }

        // // 删除数据
        // function del($table,$where) {
        //     $sql = "DELETE FROM `{$table}` WHERE {$where}";
        //     $res = mysqli_query($this->conn,$sql);
        //     if ($res && mysqli_affected_rows()) {
        //         return mysqli_affected_rows();
        //     } else {
        //         return false;
        //     }
        // }



    }

?>