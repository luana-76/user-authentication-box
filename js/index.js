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

    }

    controleForm(){

        this.name = document.querySelector('input[name="nome"]');
        this.email = document.querySelector('input[name="email"]');
        this.password = document.querySelector('input[name="senha"]');

        let input = document.querySelectorAll('input');

        //Validando se ta em foco
        input.forEach(element => {

            element.addEventListener("focus", e=>{

                if(this.name.parentElement.style.border != 'red'){
    
                        element.parentElement.style.border = 'none';
                        element.parentElement.style.borderBottom = '2px solid blue';
    
                };
    
            })

            //Quando o foco sair
            element.addEventListener("blur", e=>{

                console.log(element)
                if(element.value.length == 0 || typeof element.value !== "string" || element.value.length > 50){

                    element.parentElement.style.border = '2px solid red';
                    
                }else{
    
                    element.parentElement.style.border = 'none';
    
                };

                if(this.email.value.length > 100 || this.email.value.length == 0){

                    element.parentElement.style.border = '2px solid red';

                }else{
    
                    element.parentElement.style.border = 'none';
    
                };

                if(this.password.value.length <= 20 && this.password.value.length >= 8){

                    element.parentElement.style.border = 'none';

                }else{
    
                    element.parentElement.style.border = '2px solid red';
    
                };
    
            });

        });


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