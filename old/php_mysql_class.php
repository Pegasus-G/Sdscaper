<?php


// 数据库类
class Mysql {
    private $conn;


    // 构造函数
    function __construct($hostname,$username,$password,$dbname,$charset = 'utf8') {
        $conn = mysql_connect($hostname,$username,$password);
        if (!$conn) {
            echo '连接失败!';
            exit;
        }
        $this->conn = $conn;
        $res = mysql_select_db($dbname);
        if (!$res) {
            echo '连接失败!';
            exit;

            mysql_set_charset($charset);
        }


        // 关闭先前打开的数据库链接
        function __destruct() {
            mysql_close();
        }

        // 获取数据库所有信息
        //eg. $sql="insert into table_name (`name`, `address`) values ('zhangsan', 'shanghai')"
        function getAll($sql) {
            $result = mysql_query($sql,$this->conn);
            $data = array();
            if ($result && mysql_num_rows($result) > 0) {
                while ($row = mysql_fetch_assoc($result)) {
                    $data[] = $row;
                }
            }
            return $data;
        }

        // 获取单条数据
        function getOne($sql) {
            $result = mysql_query($sql,$this->conn);
            $data = array();
            if ($result && mysql_num_rows($result) > 0) {
                $data = mysql_fetch_assoc($result);
            }
            return $data;
        }

        // 插入数据
        function insert($table,$data) {
            $str = '';
            $str .= "INSERT INTO `$table` ";
            $str .= "(`".implode("`,`",array_keys($data))."`) ";
            $str .= " VALUES ";
            $str .= "('".implode("','",$data)."')";
            $res = mysql_query($str,$this->conn);
            if ($res && mysql_affected_rows() > 0) {
                return mysql_insert_id();
            } else {
                return false;
            }
        }

        // 更新数据库
        function update($table,$data,$where) {
            $sql = 'UPDATE '.$table.' SET ';
            foreach ($data as $key => $value) {
                $sql .= "`{$key}`='{$value}',";
            }
            $sql = rtrim($sql,',');
            $sql .= " WHERE $where";
            $res = mysql_query($sql,$this->conn);
            if ($res && mysql_affected_rows()) {
                return mysql_affected_rows();
            } else {
                return false;
            }
        }

        // 删除数据
        function del($table,$where) {
            $sql = "DELETE FROM `{$table}` WHERE {$where}";
            $res = mysql_query($sql,$this->conn);
            if ($res && mysql_affected_rows()) {
                return mysql_affected_rows();
            } else {
                return false;
            }
        }



    }

?>