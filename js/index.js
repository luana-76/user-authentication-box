import { Error} from './error.js';

class Acoes extends Error{
    
    constructor(){

        super()

        this.body = document.body;
        this.sectionChangeButton = document.querySelector('#internalBoxOne button[value = "sign in"]');
        this.formBox = document.querySelector('#internalBoxTwo');
        this.sectionIndication = document.querySelector('#formChangeButton');
        this.sunBox = document.querySelector('#lightingButton');
        this.socialBox = document.querySelector('#socialMediaButtons');
        this.secondBox = document.querySelector('#internalBoxTwo');

        this.changingForm();
        this.errorHandling(

            document.querySelector('#nameError'),
            document.querySelector('#emailErro'),
            document.querySelector('#passwordErro')

        );
        this.sendButton();
        //this.backgroundChange();

    }

    //Mudança de formulário
    changingForm(){

        //Quando clicar no botão sign in
        document.querySelector('#internalBoxOne button').addEventListener('click', e=>{

            if(this.sectionChangeButton.value == 'sign in'){

                //Mudança da caixa de seção
                this.boxOneChanges('Create your</br>account now',
                            `Lorem ipsum dolor sit amet,</br>
                            consectetur adipiscing elit.`,
                            'LOGIN');

                //Mudança da caixa de formulário
                this.formBox.innerHTML = `

                        <div class="standard">
            
                            <strong>Login</strong>

                            <span>or use your email for registration.</span>

                            <form action="php/login.php" method="post">
                                
                                <div class='inputBox'>
    
                                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/new-post.png" alt="new-post"/>
    
                                    <input type='email' name='email' required pattern='^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$' placeholder="Email"/>
        
                                </div>
                                <span class='error' id='emailErro'></span>

                                <div class='inputBox'>
    
                                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="lock"/>

                                    <input type='password' name='password' required placeholder="Password"/>
                
                                </div>
                                <span class='error' id='passwordErro'>

                                <input type="submit" name='login' value="ENVIAR"/>

                            </form>

                        </div>
                        
                        `;
                        
                        this.sectionChangeButton.value = 'login';

                        this.errorHandling(
                                
                            undefined,
                            document.querySelector('#emailErro'),
                            document.querySelector('#passwordErro'),
                                
                        );
                        this.sendButton();

            }else if(this.sectionChangeButton.value == 'login'){//Quando clicar no botão login
                
                this.sectionChangeButton.value = 'sign in';

                //Mudança da caixa de seção
                this.boxOneChanges(
                    'Welcome Back!',
                    `To keep connected with us</br>
                    please login with your personal info`,
                    'SIGN IN'
                );
                
                //Mudança da caixa de formulário
                this.formBox.innerHTML = `
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

                                <input type='text' name='name' required pattern="^([a-zA-ZÀ-ÖØ-öø-ÿ]|\\s)*$" placeholder="Name"/>
            
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

                                <input type='password' pattern='^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$' name='password' required placeholder="Password"/>
            
                            </div>
                            <span class='error' id='passwordErro'></span><!-- Exibirá erros aqui-->

                            <input type="submit" value="ENVIAR"/>
            
                        </form>

                    </div>
                    
                    `;
                
                this.errorHandling(
                        
                        document.querySelector('#nameError'),
                        document.querySelector('#emailErro'),
                        document.querySelector('#passwordErro')
            
                );

                this.sendButton();
            };

        });

    }

    //Mudança dos componentes da primeira caixa
    boxOneChanges(strong, p, button){

        this.boxTitle.innerHTML = strong;
        this.sectionIndication.querySelector('p').innerHTML = p;
        this.sectionChangeButton.innerHTML = button;

    }

    //Ação do botão de modo escuro
    backgroundChange(){

        this.sunBox.addEventListener('click', e=>{

            let background = window.getComputedStyle(this.body).backgroundImage;

            if(background == 'url("http://localhost/cadastro/imagens/fundo.jpg")'){

                //Estilizando modo escuro

                this.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7)100%, rgba(0,0,0,0) 100%), url(imagens/fundo.jpg)";
                this.body.style.color = '#fff';

                this.secondBox.style.background = '#5c5c5ce0';
                this.secondBox.style.transition = 'background 0.9s ease';

                this.sunIcon('ffffff');

                this.socialMediaButton(true);

            }else{

                //Estilizando modo claro
                this.body.style.backgroundImage ="url(imagens/fundo.jpg)";
                this.body.style.color = '#000';

                this.secondBox.style.background = '#abaaaae0';
                this.secondBox.style.transition = 'background 0.9s ease';

                this.sunIcon('DDDE');

                this.socialMediaButton(false);

            };

        });

    }

    //Dando problema

    //Mudando borda de botões de mídia social
    socialMediaButton(booleano){

        //Melhorar essa parte

        let imagens = this.socialBox.querySelectorAll('img');
    
        if(booleano){

            imagens[0].src = 'https://img.icons8.com/ios-glyphs/30/ffffff/facebook-f.png';
            imagens[1].src = 'https://img.icons8.com/windows/32/ffffff/google-plus.png';
            imagens[2].src = 'https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-2--v1.png';
    
            imagens.forEach(element => {
                
                element.parentElement.parentElement.style.border = '2px solid #fff';

            });

            
        }else{

            imagens[0].src = 'https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png';
            imagens[1].src = 'https://img.icons8.com/windows/32/000000/google-plus.png';
            imagens[2].src = 'https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png';

            imagens.forEach(element => {
                
                element.parentElement.parentElement.style.border = '2px solid #11116e';

            });

        };

    }

    //Função de mudança no icone do sol
    sunIcon(color){

        this.sunBox.children[0].remove();
        
        this.sunBox.innerHTML = `<img width="20" height="20" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/${color}/external-sun-summer-tanah-basah-glyph-tanah-basah.png" alt="external-sun-summer-tanah-basah-glyph-tanah-basah"/>`;

    }

}


new Acoes();