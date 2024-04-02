export class Error{

    constructor(){

        this.boxTitle = document.querySelector('.standard strong');
        this.submitButton = document.querySelector('input[type="submit"]');

    }

    //Estlização quando o campo dê erro 
    errorStyling(mensagem='', span='', tag='', booleano){

        if(booleano == true){

            span.innerHTML = mensagem;
            tag.parentElement.style.border = '2px solid red';

        }else if(booleano == false){

            span.innerHTML = '';
            tag.parentElement.style.border = 'none';

        };

        //Se o submit sumir
        if(!document.querySelector('input[type="submit"]')){

            let form = document.querySelector('form');
            let submit = document.createElement('input');//Criando input submit

            // Definir o tipo do input como submit
            submit.type = 'submit';

            // Definir o valor do input como "ENVIAR"
            submit.value = 'ENVIAR';
            form.appendChild(submit);

        };
        
    }
    
    //Controlando o botão enviar
    sendButton(){

        let submitButton = document.querySelector('input[type="submit"]');
        let inputFields = document.querySelectorAll('input:not([type="submit"])');

        submitButton.addEventListener('click', e => {

            inputFields.forEach(element => {

                if (element.value == '') {

                    e.preventDefault();
                    element.parentElement.style.border = '2px solid red';

                }

                this.validacaoDeEnvio(inputFields);

            });


        });

    }

    //Só irá enviar o formulário quando todos os campos estiverem preenchidos
    validacaoDeEnvio(inputFields){

        if(this.boxTitle.innerHTML == 'Welcome Back!'){
            
            if(!inputFields[0].validity.patternMismatch && !inputFields[0].validity.valueMissing){

                if(!inputFields[1].validity.patternMismatch && !inputFields[1].validity.valueMissing){

                    if(!inputFields[2].validity.patternMismatch && !inputFields[2].validity.valueMissing){

                        window.location.href = this.action;

                    };

                };

            };

        }else{

            if(!inputFields[0].validity.patternMismatch && !inputFields[0].validity.valueMissing){

                if(!inputFields[1].validity.valueMissing){

                    window.location.href = this.action;
                    
                };

            };

        };

    }

    //Evento de bloquear botão
    blockingSubmit(){
       
        this.submitButton.addEventListener('click', e=>{

            e.preventDefault();

        });

    }

    //Executando erros
    errorHandling(erroNome, erroEmail, erroSenha){

        //Tirando o input do botão
        let input = [...document.querySelectorAll('input')];
        input.pop();

        //Validando se está em foco
        input.forEach(element => {

            //Quando estiver em foco, os inputs vão ficar nessa estilização
            element.addEventListener("focus", e=>{

                element.parentElement.style.border = 'none';
                element.parentElement.style.borderBottom = '2px solid blue';

            });

            //Validando quando o foco sair
            element.addEventListener("blur", e=>{

                switch(element.name){

                    case 'name':

                        //Caso o campo seja vazio
                        if(element.validity.valueMissing){

                            this.blockingSubmit();
                            this.errorStyling('Preencha o campo.', erroNome, element, true);

                        }else{
                            
                            this.errorStyling(undefined, erroNome, element, false);

                        };

                        //Caso o campo não esteja de acordo com o pattern
                        if (element.validity.patternMismatch){

                            this.blockingSubmit();
                            this.errorStyling('Preencha apenas com letras.', erroNome, element, true);

                        };
                        break;

                    case 'email':

                        //Caso o campo seja maior que 50
                        if(element.value.length > 50){

                            this.blockingSubmit();
                            this.errorStyling('O maixmo de caractere é 50.', erroEmail, element, true);
                            
                        }else if(element.validity.valueMissing){//Caso o campo seja vazio
                            
                            this.blockingSubmit();
                            this.errorStyling('Preencha o campo.', erroEmail, element, true);

                        }else if(element.validity.patternMismatch){//Caso o campo não esteja de acordo com o pattern

                            this.blockingSubmit();
                            this.errorStyling('Utilize letras e numeros, _ e o tipo de email.', erroEmail, element, true);

                        }else{
                            
                            this.errorStyling(undefined, erroEmail, element, false);
                        
                        };
                        break;
                    
                    case 'password':

                        if(element.validity.valueMissing){//Caso o campo seja vazio

                            this.blockingSubmit();
                            this.errorStyling('Preencha o campo.', erroSenha, element, true);
    
                        }else if(element.value.length < 8){//Caso o campo seja menor que 8

                            if(this.boxTitle.innerHTML == "Welcome Back!"){

                                this.blockingSubmit();
                                this.errorStyling('No mínimo 8 caracteres.', erroSenha, element, true);

                            };

                        }else if(element.value.length > 20){//Caso o campo seja maior que 20

                            if(this.boxTitle.innerHTML == "Welcome Back!"){

                                this.blockingSubmit();
                                this.errorStyling('No máximo 20 caracteres.', erroSenha, element, true);

                            };

                        }else if(element.validity.patternMismatch){//Caso o campo não esteja de acordo com o pattern

                            if(this.boxTitle.innerHTML == "Welcome Back!"){

                                this.blockingSubmit();
                                this.errorStyling(`- Letra minúscula<br/>
                                                    - Letra maiúscula<br/>
                                                    - Números<br/>
                                                    - Caracteres especiais`, erroSenha, element, true);

                            };

                        }else{
                            
                            this.errorStyling(undefined, erroSenha, element, false);
                        
                        };
                        break;

                };
    
            });
        });
    }

}