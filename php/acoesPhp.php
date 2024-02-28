<?php

// Conectar ao banco de dados

$servername = "localhost:3306";
$username = "root";
$password = "lua56sol2003";
$dbname = "cadastro_usuarios";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obter dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Consultando se o email já foi cadastrado
$existente = "SELECT * FROM cadastro_usuarios.usuarios WHERE email = '$email'";
$result = $conn->query($existente);

// Verifica se o usuário já existe
if ($result->num_rows > 0) {

    echo 'ok';
    
} else {

    //Criação de um novo usuário
    $add = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

    if ($conn->query($add) === TRUE) {

        echo "Dados inseridos com sucesso";

    } else {

        echo "Erro ao inserir dados: " . $conn->error;
        
    }

}


// Fechar a conexão

$conn->close();

?>