<?php

require_once('./initialization.php');

class Login extends Initialization{

    function __construct(){

        parent::__construct();

        $this->logando();

    }

    public function logando(){
            
        //Consultando se o email já foi cadastrado
        $emailExistente = "SELECT * FROM cadastro_usuarios.usuarios WHERE email = '$this->email'";
        $emailResult = $this->conn->query($emailExistente);

        //Consultando se a senha já foi cadastrado
        $senhaExistente = "SELECT * FROM cadastro_usuarios.usuarios WHERE senha = '$this->senha'";
        $senhaResult = $this->conn->query($senhaExistente);


        // Verifica se o usuário já existe
        if ($emailResult->num_rows > 0 && $senhaResult->num_rows > 0) {

            $html = <<<HTML

                <head>

                    <link rel='stylesheet' href='../css/index.css'/>

                </head>
                <body id='bodyPhp'>

                    <div id='minBox'>
                        <p>Login feito com sucesso!</p>
                        <img src='../gifs/happy.gif' alt='happy'/>
                        <a href='../'>
                            <button>Voltar</button>
                        </a>
                    </div>
                    
                </body>
                HTML;
            echo $html;
                    
        }else{

            $html = <<<HTML

                <head>

                    <link rel='stylesheet' href='../css/index.css'/>

                </head>
                <body id='bodyPhp'>

                    <div id='minBox'>
                        <p>Dados inválidos</p>
                        <img src='../gifs/sad.gif' alt='sad'/>
                        <a href='../'>
                            <button>Voltar</button>
                        </a>
                    </div>

                </body>
                HTML;
            echo $html;

        }

        $this->conn->close();

    }

}

$logando = new Login;

?>