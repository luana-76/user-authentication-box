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

        this.changingForm();
        this.errorHandling(

            document.querySelector('#nameError'),
            document.querySelector('#emailErro'),
            document.querySelector('#passwordErro')

        );
        this.sendButton();

    }

    //Controlando o botão enviar
    sendButton(){

        let submitButton = document.querySelector('input[type="submit"]');
        let cont = 0

        submitButton.addEventListener('click', e => {

            let inputFields = document.querySelectorAll('input:not([type="submit"])');

            inputFields.forEach(element => {

                if (element.value == '') {

                    e.preventDefault();
                    element.parentElement.style.border = '2px solid red';

                }

                //Não envia o formulário não preenchido
                this.validacaoDeEnvio(inputFields);

            });


        });

        
    }

    //Só irá enviar quando todos os campos estiverem preenchidos
    validacaoDeEnvio(inputFields){

        if(document.querySelector('.standard strong').innerHTML == 'Welcome Back!'){
            
            if(!inputFields[0].validity.patternMismatch && !inputFields[0].validity.valueMissing){

                if(!inputFields[1].validity.patternMismatch && !inputFields[1].validity.valueMissing){

                    if(!inputFields[2].validity.patternMismatch && !inputFields[2].validity.valueMissing){

                        window.location.href = this.action;

                    }

                }

            }

        }else{

            if(!inputFields[0].validity.patternMismatch && !inputFields[0].validity.valueMissing){

                if(!inputFields[1].validity.valueMissing){

                    window.location.href = this.action;

                }

            }

        }

    }

    //Botão de enviar bloqueado caso erro em campos de formulário
    bloqueandoSubmit(){

        document.querySelector('input[type="submit"]').addEventListener('click', e=>{

            e.preventDefault();

        })

    }

    errorHandling(erroNome, erroEmail, erroSenha){

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

                            this.bloqueandoSubmit();
                            this.errorStyling('Preencha o campo.', erroNome, element, true)

                        }else{
                            
                            this.errorStyling(undefined, erroNome, element, false)

                        };

                        //Caso o campo não esteja de acordo com o pattern
                        if (element.validity.patternMismatch){

                            this.bloqueandoSubmit()
                            this.errorStyling('Preencha apenas com letras.', erroNome, element, true)

                        }
                        break;

                    case 'email':

                        //Caso o campo seja maior que 50
                        if(element.value.length > 50){

                            this.bloqueandoSubmit();
                            this.errorStyling('O maixmo de caractere é 50.', erroEmail, element, true)
                            
                        }else if(element.validity.valueMissing){//Caso o campo seja vazio
                            
                            this.bloqueandoSubmit();
                            this.errorStyling('Preencha o campo.', erroEmail, element, true)

                        }else if(element.validity.patternMismatch){//Caso o campo não esteja de acordo com o pattern

                            this.bloqueandoSubmit();
                            this.errorStyling('Utilize letras e numeros, _ e o tipo de email.', erroEmail, element, true)

                        }else{
                            
                            this.errorStyling(undefined, erroEmail, element, false)
                        
                        }
                        break;
                    
                    case 'password':

                        if(element.validity.valueMissing){//Caso o campo seja vazio

                            this.bloqueandoSubmit();
                           this.errorStyling('Preencha o campo.', erroSenha, element, true);
    
                        }else if(element.value.length < 8){//Caso o campo seja menor que 8

                            this.bloqueandoSubmit();
                            this.errorStyling('No mínimo 8 caracteres.', erroSenha, element, true)
                            
                        }else if(element.value.length > 20){//Caso o campo seja maior que 20

                            this.bloqueandoSubmit();
                            this.errorStyling('No máximo 20 caracteres.', erroSenha, element, true)

                        }else if(element.validity.patternMismatch){//Caso o campo não esteja de acordo com o pattern

                            this.bloqueandoSubmit();
                            this.errorStyling(`- Letra minúscula<br/>
                                                - Letra maiúscula<br/>
                                                - Números<br/>
                                                - Caracteres especiais`, erroSenha, element, true)

                        }else{
                            
                            this.errorStyling(undefined, erroSenha, element, false)
                        
                        }
                        break;

                }
    
            });
        });
    }

    //Estlização quando o campo dê erro 
    errorStyling(mensagem='', span='', tag='', booleano){

        let submit = document.querySelector('input[type="submit"]');

        if(booleano == true){

            span.innerHTML = mensagem
            tag.parentElement.style.border = '2px solid red';

        }else if(booleano == false){

            span.innerHTML = ''
            tag.parentElement.style.border = 'none';

        }

        if(!document.querySelector('input[type="submit"]')){

            let form = document.querySelector('form');
            let submitButton = document.createElement('input');

            // Definir o tipo do input como submit
            submitButton.type = 'submit';

            // Definir o valor do input como "ENVIAR"
            submitButton.value = 'ENVIAR';
            form.appendChild(submitButton)

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
                                <span class='error' id='emailErro'></span>

                                <div class='inputBox'>
    
                                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="lock"/>

                                    <input type='password' name='password' required placeholder="Password"/>
                
                                </div>
                                <span class='error' id='passwordErro'>

                                <input type="submit" value="ENVIAR"/>

                            </form>

                        </div>
                        
                        `;
                        
                        this.sectionChangeButton.value = 'login';

                        this.errorHandling(
                                
                            undefined,
                            document.querySelector('#emailErro'),
                            document.querySelector('#passwordErro'),
                                
                        );
                        this.sendButton()

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