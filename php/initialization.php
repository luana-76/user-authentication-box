<?php

class Initialization{

    public $servername;
    public $username;
    public $password;
    public $dbname;

    // Obter dados do formulário
    public $name;
    public $email;
    public $senha;

    public $conn;

    function __construct(){
        
        // Conectar ao banco de dados
        $this->servername = "localhost:3306";
        $this->username = "root";
        $this->password = "lua56sol2003";
        $this->dbname = "cadastro_usuarios";

        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        // Obter dados do formulário
        if(isset($_POST['cadastro'])){

            $this->name = $_POST['name'];
            
        }
        
        $this->email = $_POST['email'];
        $this->senha = $_POST['password'];

    }
}