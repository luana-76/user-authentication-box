class Acoes{

    constructor(){

        this.body = document.body;
        this.formBox = document.querySelector('#internalBoxTwo');
        this.sectionIndication = document.querySelector('#formChangeButton');
        this.sectionChangeButton = document.querySelector('#internalBoxOne button[value = "sign in"]');
        this.principal = document.querySelector('#topBox');

        this.backgroundChange();
        this.changingForm();
        this.controleForm();

        this.controleDoBotaoEnviar()

        this.erroEmail = document.querySelector('#emailErro');
        this.erroNome = document.querySelector('#nameError')
        this.erroSenha = document.querySelector('#passwordErro')

    }

    controleDoBotaoEnviar(){

        setInterval(e=>{

            let input = document.querySelectorAll('input');
            
            input.forEach(element => {

                input[3].addEventListener('click', e=>{

                    if(element.value == '' && element.type != 'submit'){

                        element.parentElement.style.border = '2px solid red';
                    
                    }

                })

            });


        }, 1000)


    }

    controleForm(){

        //Tirando o input do botão
        let input = [...document.querySelectorAll('input')]
        input.pop()

        //Validando se ta em foco
        input.forEach(element => {

            //Quando estiver em foco, os inputs vão ficar nessa estilização
            element.addEventListener("focus", e=>{

                element.parentElement.style.border = 'none';
                element.parentElement.style.borderBottom = '2px solid blue';

            })

            //Quando o foco sair

            element.addEventListener("blur", e=>{

                //Tratamento do email
                switch(element.name){

                    case 'name':

                        if(element.value.length == 0){

                            this.tratandoErro('Preencha o campo.', this.erroNome, element, true)

                        }else{
                            
                            this.tratandoErro(undefined, this.erroNome, element, false)

                        };
                        break;

                    case 'email':

                        if(element.value.length > 50){

                            this.tratandoErro('O maixmo de caractere é 50.', this.erroEmail, element, true)

                        }else if(element.value.length == 0){

                            this.tratandoErro('Preencha o campo.', this.erroEmail, element, true)

                        }else{
                            
                            this.tratandoErro(undefined, this.erroEmail, element, false)
                        
                        }
                        break;
                    
                    case 'password':

                        if(element.value.length == 0 || element.value.length < 8){

                            this.tratandoErro('Preencha o campo, no minimo 8 caracteres.', this.erroSenha, element, true)

                        }else if(element.value.length > 20){

                            this.tratandoErro('No maximo 20.', this.erroSenha, element, true)

                        }else{
                            
                            this.tratandoErro(undefined, this.erroSenha, element, false)
                        
                        }
                        break;

                }
    
            });
        });
    }

    tratandoErro(mensagem='', span='', tag='', booleano){

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

        document.querySelector('#internalBoxOne button').addEventListener('click', e=>{
            
            if(this.sectionChangeButton.value == 'sign in'){

                this.boxOneChanges('Create your</br>account now',
                            `Lorem ipsum dolor sit amet,</br>
                            consectetur adipiscing elit.`,
                            'LOGIN');

                this.formBox.innerHTML = `

                        <div class="standard">
            
                            <strong>Login</strong>

                            <span>or use your email for registration.</span>

                            <form action="php/acoesPhp.php" method="post">
                                
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


                this.sectionChangeButton.value = 'login';

            }else if(this.sectionChangeButton.value == 'login'){
                
                this.sectionChangeButton.value = 'sign in';

                this.boxOneChanges(
                    'Welcome Back!',
                    `To keep connected with us</br>
                    please login with your personal info`,
                    'SIGN IN'
                );

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

    //Ação do botão de modo noturno
    backgroundChange(){

        this.body.style.backgroundColor = '#fff';

        document.querySelector('#lightingButton').addEventListener('click', e=>{

            if(this.body.style.backgroundColor == 'rgb(255, 255, 255)'){

                this.body.style.backgroundColor = 'rgb(13, 13, 14, 1)';
                this.body.style.transition = 'background 1s';
                this.principal.style.border = '2px solid #fff'; 

                this.lightingSunsetStyle('ffffff');

            }else{

                this.body.style.backgroundColor = '#fff';
                this.body.style.transition = 'background 0.9s';
                this.principal.style.border = '2px solid #11116e';

                this.lightingSunsetStyle('DDDE');

            }

        })

    }

    //Função de mudança na cor de fundo
    lightingSunsetStyle(color){

        let tag = document.querySelector('#lightingButton');
        tag.children[0].remove();
        
        tag.innerHTML = `<img width="20" height="20" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/${color}/external-sun-summer-tanah-basah-glyph-tanah-basah.png" alt="external-sun-summer-tanah-basah-glyph-tanah-basah"/>`;

    }

}

new Acoes();