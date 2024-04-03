<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Login</title>
    <link rel="stylesheet" href="./css/reset.css"/>
    <link rel="stylesheet" href="./css/index.css"/>
    <link rel="stylesheet" href="./css/responsive.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet">
</head>
<body>

    <!-- Caixa principal onde vai segurar a caixa de login e cadastro -->
    <div id="topBox">
        
        <!-- Parte de indicação de seção -->
        <div id="formChangeButton" class="standard">

            <div id="internalBoxOne" class="standard">

                <strong>Welcome Back!</strong>
                <p>To keep connected with us<br/>
                please login with your personal info</p>

                <button value='sign in'>SIGN IN</button>

            </div>

        </div>

        <!-- Caixa de formulário da seção -->
        <div id="internalBoxTwo" class="standard">

            <div class="standard">
    
                <strong>Create Account</strong>
                
                <!-- Caixa de redes de contato -->
                <div id='socialMediaButtons'>

                    <button>

                        <a href=''>
                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" alt="facebook-f"/>
                        </a>

                    </button>

                    <button>

                        <a href=''>
                            <img width="20" height="20" src="https://img.icons8.com/windows/32/000000/google-plus.png" alt="google-plus"/>
                        </a>

                    </button>

                    <button>

                        <a href=''>
                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png" alt="linkedin-2--v1"/>
                        </a>

                    </button>

                </div>

                <span>or use your email for registration.</span>

                <form action="php/cadastro.php" method="post">

                    <!-- Caixa de estilização do input-->
                    <div class='inputBox'>
    
                        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/user.png" alt="user"/>

                        <input type='text' name='name' required pattern="^([a-zA-ZÀ-ÖØ-öø-ÿ]|\s)*$" placeholder="Name"/>
    
                    </div>
                    <span class='error' id='nameError'></span><!-- Exibirá erros aqui-->
                    
                    <!-- Caixa de estilização do input-->
                    <div class='inputBox'>
    
                        <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/new-post.png" alt="new-post"/>

                        <input type='email' name='email' required pattern='^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$' placeholder="Email"/>
    
                    </div>
                    <span class='error' id='emailErro'></span><!-- Exibirá erros aqui-->
                    
                    <!-- Caixa de estilização do input-->
                    <div class='inputBox'>
    
                        <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="lock"/>

                        <input type='password' pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$' name='password' required placeholder="Password"/>
    
                    </div>
                    <span class='error' id='passwordErro'></span><!-- Exibirá erros aqui-->

                    <input type="submit" name='cadastro' value="ENVIAR"/>
        
                </form>

            </div>
    
        </div>

    </div>

    <script type="module" src='./js/index.js'></script>
    
</body>
</html>