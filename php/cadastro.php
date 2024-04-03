<?php

require_once('./initialization.php');

class LigacaoBancoDeDados extends Initialization{

    public $dbname;

    function __construct(){

        parent::__construct();

        $this->cadastrandoNovoUsuario();

    }

    public function cadastrandoNovoUsuario(){

        //Consultando se o email já foi cadastrado
        $emailExistente = "SELECT * FROM cadastro_usuarios.usuarios WHERE email = '$this->email'";
        $emailResult = $this->conn->query($emailExistente);

        //Consultando se a senha já foi cadastrado
        $senhaExistente = "SELECT * FROM cadastro_usuarios.usuarios WHERE senha = '$this->senha'";
        $senhaResult = $this->conn->query($senhaExistente);


        // Verifica se o usuário já existe
        if ($emailResult->num_rows > 0 || $senhaResult->num_rows > 0) {

            $html = <<<HTML

                <head>

                    <link rel='stylesheet' href='../css/index.css'/>

                </head>
                <body id='bodyPhp'>

                    <div id='minBox'>
                        <p>Usuário já existente</p>
                        <img src='../gifs/sad.gif' alt='sad'/>
                        <a href='../'>
                            <button>Voltar</button>
                        </a>
                    </div>

                </body>
                HTML;
            echo $html;
                      
        } else {

            //Criação de um novo usuário
            $add = "INSERT INTO usuarios (nome, email, senha) VALUES ('$this->name', '$this->email', '$this->senha')";

            if ($this->conn->query($add) === TRUE) {

                $html = <<<HTML

                <head>

                    <link rel='stylesheet' href='../css/index.css'/>

                </head>

                <body id='bodyPhp'>

                    <div id='minBox'>
                        <p>Cadastro realizado com com sucesso!</p>
                        <img src='../gifs/happy.gif' alt='happy'/>
                        <a href='../'>
                            <button>Voltar</button>
                        </a>
                    </div>

                </body>
                HTML;
                echo $html;

            }

        }

        $this->conn->close();

    }

}

$s = new LigacaoBancoDeDados;

?>