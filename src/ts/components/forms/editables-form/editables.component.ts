import {Component} from "../../component";
import * as templateString from "./editables.template.ejs";

export default class EditablesForm implements Component {
    
	renderable: boolean = true;
	storeProperty: string = '';
    selector: string;
    element: HTMLFormElement = <HTMLFormElement>document.getElementById('cms-editables-form');
    template: any = templateString;
    waiting: boolean = false;

	constructor(data: any[]) {
        this.render(data);      
        this.eventBinding();  
    }
    
    eventBinding(){
        this.element.addEventListener('submit', ev => this.onSubmit(ev));
    }

    onSubmit(ev: any){
        ev.preventDefault();
        this.retrieveData();
    }

    render(data: any): void{
        this.element.innerHTML = this.template({data:JSON.parse(data)});
        Array.from(this.element.querySelectorAll('.delete')).forEach((node: HTMLButtonElement) => {
            node.addEventListener('click', ( (ev: Event) => node.parentElement.remove() ));
        });
    }

    retrieveData(){
        let result: any[] = Array.from(this.element.querySelectorAll('.reference')).map((node: any) => {
            return Array.from(node.children).reduce((prev: any, now: any) => {
                prev[now.dataset.key] = now.value;
                return prev;
            }, {});
        });
        
        if(!this.isNewEventValid(result.slice(-1)[0])){
            result.pop();
        }
        this.sendForm(JSON.stringify({data: JSON.stringify(result)}));
    }

    isNewEventValid(eventObj: any){
        return Object.entries(eventObj).reduce((prev: boolean, now: any[]) => {
               return now[1] ? prev : false;
        }, true);        
    }

    async sendForm(form: string){

        if(this.waiting){
            return;
        }

        this.printLoading();
        document.getElementById('form-comments').classList.remove('error');

        const result = await fetch('scripts/state.php',{
            method: 'PUT',
            body: form,
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            this.waiting = false;
            if(data.status === 'Ok' && data.data){
                this.render(data.data);
            }else{
                this.printError();
            }
        })
        .catch(error =>{
            console.error(error);
            this.printError();
        });
    }

    printLoading(){
        this.waiting = true;
        document.getElementById('form-comments').innerText = 'Loading...';
        document.getElementById('form-comments').classList.add('loading');
    }

    printError(){
        document.getElementById('form-comments').innerText = 'Un erro aconteceu :( , intentao de novo mais tarde';
        document.getElementById('form-comments').classList.add('error');
    }

}