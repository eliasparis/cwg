import {Component, ComponentClass} from "../../component";
import {subscribe} from "redux-subscriber";
import * as templateString from "./register-form.template.ejs";

export default class RegisterForm extends ComponentClass implements Component {
    
	renderable: boolean = true;
	storeProperty: string = "events.data";
    selector: string;
    element: HTMLFormElement;
    template: any = templateString;
    sending: boolean = false;

	constructor(selector: string = "#enroll-form") {
        super(selector);
        this.eventBinding();        
        this.listeners();
    }
    
    eventBinding(){
        this.element.addEventListener('submit', ev => this.onSubmit(ev), false);
    }

    listeners(){
        subscribe(this.storeProperty, (state: any) => {
            this.onUpdateEvents(state.events);
		});
    }

    onSubmit(ev: any){
        let data = new FormData(this.element);
        ev.preventDefault();

        if(this.sending){
            return false;
        }

        this.sending = true;

        if(this.isFormValid() === true){
            this.sendForm(data);
        }else{
            this.printError();
            this.sending = false;
        }
    }

    onUpdateEvents(data: any){
        this.render(data);
    }
    
    private isFormValid() : boolean{
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phonePattern = /^[0-9]{9}$/;
        const name: string = (<HTMLInputElement>this.element.querySelector('input[name=nombre]')).value;
        const phone: string = (<HTMLInputElement>this.element.querySelector('input[name=tlf]')).value.replace(' ', '');
        const email: string = (<HTMLInputElement>this.element.querySelector('input[name=email]')).value;
        const lopd: string = (<HTMLInputElement>this.element.querySelector('input[name=lopd]')).value;

        if(!name || !phone || !email || !lopd){
            return false;
        }

        if(!emailPattern.test(email)){
            return false;
        }

        if(!phonePattern.test(phone)){
            return false;
        }

        return true
    }

    printError(){
        let btn: HTMLButtonElement = <HTMLButtonElement>this.element.querySelector('#form-button');
        btn.classList.add('error');
        btn.textContent = 'O formulario ten erros';
    }
    
    printSend(){
        let btn: HTMLButtonElement = <HTMLButtonElement>this.element.querySelector('#form-button');
        btn.classList.add('sent');
        btn.textContent = 'Enviado, graciñas! :)';
    }

    printSendError(){
        let btn: HTMLButtonElement = <HTMLButtonElement>this.element.querySelector('#form-button');
        btn.classList.add('error');
        btn.textContent = 'Ooops, un erro aconteceu, intentao de novo máis tarde';
    }

    async sendForm(formData: FormData){
        let btn: HTMLButtonElement = <HTMLButtonElement>this.element.querySelector('#form-button');
        let result = await fetch('scripts/mail.php',{
            method: 'POST', 
            body: formData 
        }).then((data) => data.json()).catch((e) => console.error(e) );
        btn.classList.remove('error');
        btn.classList.add('sending');
        btn.textContent = 'Enviando...';
        if(result.response === true){
            this.printSend();
        }else{
            btn.classList.remove('sending');
            this.printSendError();
        }
    }
}