import {Component, ComponentClass} from "../../component";
import * as templateString from "./register-form.template.ejs";

export default class RegisterForm extends ComponentClass implements Component {
    
	renderable: boolean = true;
	storeProperty: string = "";
    selector: string;
    element: HTMLFormElement;
    template: any = templateString;

	constructor(selector: string = "#enroll-form") {
        super(selector);
        this.eventBinding();
    }
    
    eventBinding(){
        this.element.addEventListener('submit', ev => this.onSubmit(ev), false);
    }

    onSubmit(ev: any){
        ev.preventDefault();
        let data = new FormData(this.element);
        console.warn(data, this);
    }
}