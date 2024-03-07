class Acoes{
    
    constructor(){
        
        this.body = document.body;
        
        //Caixa principal
        this.principal = document.querySelector('#topBox');
        this.backgroundChange();

        //Caixa um
        this.sectionChangeButton = document.querySelector('#internalBoxOne button[value = "sign in"]');

        //Caixa Dois
        this.formBox = document.querySelector('#internalBoxTwo');
        this.sectionIndication = document.querySelector('#formChangeButton');

        this.erroEmail = document.querySelector('#emailErro');
        this.erroNome = document.querySelector('#nameError')
        this.erroSenha = document.querySelector('#passwordErro')

        this.changingForm();
        this.errorHandling();
        this.sendButton()

    }

    //Controlando o botão enviar
    sendButton(){

        let input = document.querySelectorAll('input');
        
        setInterval(e=>{

            input.forEach(element => {

                //Quando o botão de envio for clicado, verifique se todos os campos foram preenchidos
                input[3].addEventListener('click', e=>{

                    if(element.value == '' && element.type != 'submit'){

                        element.parentElement.style.border = '2px solid red';
                    
                    }

                })

            });

        }, 1000)


    }

    errorHandling(){

        //Tirando o input do botão
        let input = [...document.querySelectorAll('input')]
        input.pop()

        //Validando se está em foco
        input.forEach(element => {

            //Quando estiver em foco, os inputs vão ficar nessa estilização
            element.addEventListener("focus", e=>{

                element.parentElement.style.border = 'none';
                element.parentElement.style.borderBottom = '2px solid blue';

            })

            //Validando quando o foco sair
            element.addEventListener("blur", e=>{

                //Tratamento do email
                switch(element.name){

                    case 'name':

                        //Caso o campo seja vazio
                        if(element.validity.valueMissing){

                            this.errorStyling('Preencha o campo.', this.erroNome, element, true)

                        }else{
                            
                            this.errorStyling(undefined, this.erroNome, element, false)

                        };

                        //Caso o campo não esteja de acordo com o pattern
                        if (element.validity.patternMismatch) {

                            this.errorStyling('Preencha apenas com letras.', this.erroNome, element, true)

                        }
                        break;

                    case 'email':

                        //Caso o campo seja maior que 50
                        if(element.value.length > 50){

                            this.errorStyling('O maixmo de caractere é 50.', this.erroEmail, element, true)

                        }else if(element.validity.valueMissing){//Caso o campo seja vazio

                            this.errorStyling('Preencha o campo.', this.erroEmail, element, true)

                        }else if(element.validity.patternMismatch){//Caso o campo não esteja de acordo com o pattern

                            this.errorStyling('Utilize letras e numeros, _ e o tipo de email.', this.erroEmail, element, true)

                        }else{
                            
                            this.errorStyling(undefined, this.erroEmail, element, false)
                        
                        }
                        break;
                    
                    case 'password':

                        if(element.validity.valueMissing){//Caso o campo seja vazio

                            this.errorStyling('Preencha o campo.', this.erroSenha, element, true)

                        }else if(element.value.length < 8){//Caso o campo seja menor que 8

                            this.errorStyling('No mínimo 8 caracteres.', this.erroSenha, element, true)

                        }else if(element.value.length > 20){//Caso o campo seja maior que 20

                            this.errorStyling('No máximo 20 caracteres.', this.erroSenha, element, true)

                        }else if(element.validity.patternMismatch){//Caso o campo não esteja de acordo com o pattern

                            this.errorStyling(`- Letra minúscula<br/>
                                                - Letra maiúscula<br/>
                                                - Números<br/>
                                                - Caracteres especiais`, this.erroSenha, element, true)

                        }else{
                            
                            this.errorStyling(undefined, this.erroSenha, element, false)
                        
                        }
                        break;

                }
    
            });
        });
    }

    //Estlização quando o campo dê erro 
    errorStyling(mensagem='', span='', tag='', booleano){

        if(booleano == true){

            span.innerHTML = mensagem
            tag.parentElement.style.border = '2px solid red';

        }else if(booleano == false){

            span.innerHTML = ''
            tag.parentElement.style.border = 'none';

        }
        
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

                            <form action="php/acoesPhp.php" method="post">
                                
                                <div class='inputBox'>

                                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/new-post.png" alt="new-post"/>
                                    <input type='email' name='email' required pattern='^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$' placeholder="Email"/>

                                </div>

                                <div class='inputBox'>

                                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="lock"/>
                                    <input type='password' pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$' name='password' required placeholder="Password"/>

                                </div>

                                <input type="submit" value="ENVIAR"/>

                            </form>

                        </div>
                        
                        `;


                this.sectionChangeButton.value = 'login';

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

                        <div id='socialMediaButtons'>

                            <button>

                                <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" alt="facebook-f"/>

                            </button>

                            <button>

                                <img width="20" height="20" src="https://img.icons8.com/windows/32/000000/google-plus.png" alt="google-plus"/>

                            </button>

                            <button>

                                <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2--v1.png" alt="linkedin-2--v1"/>

                            </button>

                        </div>

                        <span>or use your email for registration.</span>

                        <form action="php/acoesPhp.php" method="post">
                        
                            <div class='inputBox'>

                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/user.png" alt="user"/>
                                <input type='text' name='nome' placeholder="Name"/>

                            </div>
                            
                            <div class='inputBox'>

                                <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/new-post.png" alt="new-post"/>
                                <input type='email' name='email' placeholder="Email"/>

                            </div>

                            <div class='inputBox'>

                                <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="lock"/>
                                <input type='password' name='senha' placeholder="Password"/>

                            </div>

                            <input type="submit" value="ENVIAR"/>

                        </form>

                    </div>
                    
                    `;
            }

        })

    }

    //Mudança dos componentes da primeira caixa
    boxOneChanges(strong, p, button){

        this.sectionIndication.querySelector('strong').innerHTML = strong;
        this.sectionIndication.querySelector('p').innerHTML = p;
        this.sectionChangeButton.innerHTML = button;

    }

    //Ação do botão de modo escuro
    backgroundChange(){

        let box = document.querySelector('#internalBoxTwo');
        
        document.querySelector('#lightingButton').addEventListener('click', e=>{

            let background = window.getComputedStyle(this.body).backgroundImage;

            if(background == 'url("http://localhost/cadastro/imagens/fundo.jpg")'){

                //Estilizando modo escuro
                this.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7)100%, rgba(0,0,0,0) 100%), url(imagens/fundo.jpg)";
                this.body.style.color = '#fff';

                box.style.background = '#5c5c5ce0';
                box.style.transition = 'background 0.9s ease';

                this.lightingSunsetStyle('ffffff');
                this.socialMediaButton(true);

            }else{

                //Estilizando modo claro
                this.body.style.backgroundImage ="url(imagens/fundo.jpg)";
                this.body.style.color = '#000';

                box.style.background = '#abaaaae0';
                box.style.transition = 'background 0.9s ease';

                this.lightingSunsetStyle('DDDE');
                this.socialMediaButton(false);

            };

        });

    }

    //Mudando borda de botões de mídia social
    socialMediaButton(booleano){

        let socialBox = document.querySelector('#socialMediaButtons');

        if(booleano){

            socialBox.innerHTML = `
                            <button style='border: 2px solid #fff;'>

                                    <a href=''>
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-f.png" alt="facebook-f"/>
                                    </a>

                            </button>

                            <button style='border: 2px solid #fff;'>

                                <a href=''>
                                    <img width="20" height="20" src="https://img.icons8.com/windows/32/ffffff/google-plus.png" alt="google-plus"/>
                                </a>

                            </button>

                            <button style='border: 2px solid #fff;'>

                                <a href=''>
                                    <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-2--v1.png" alt="linkedin-2--v1"/>
                                </a>

                            </button>
        
                        `;
        }else{

            socialBox.innerHTML = `

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
            
            `;

        };

    }

    //Função de mudança na cor de fundo
    lightingSunsetStyle(color){

        let tag = document.querySelector('#lightingButton');
        tag.children[0].remove();
        
        tag.innerHTML = `<img width="20" height="20" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/${color}/external-sun-summer-tanah-basah-glyph-tanah-basah.png" alt="external-sun-summer-tanah-basah-glyph-tanah-basah"/>`;

    }

}

new Acoes();