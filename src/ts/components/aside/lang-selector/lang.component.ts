import {Component, ComponentClass} from "../../component";
import Store from "../../../store";
import {subscribe} from "redux-subscriber";
import {switchLang} from "../../../actions/lang-actions";

export default class LangSelector extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "lang.currentLang";
	selector: string;

	constructor(selector: string = "#lang-selector") {
        super(selector);
        this.children = this.instanceChildren();
        this.eventBinding();
        this.listeners();
    }
    
    instanceChildren() : Element[]{
        return Array.from(this.element.children);
    }

    eventBinding(){
        // this.element.addEventListener('mouseover', (ev) => {
        //     this.element.classList.add('expanded');
        // });

        // this.element.addEventListener('mouseout', (ev) => {
        //     this.element.classList.remove('expanded');
        // });

        // this.element.addEventListener('touchend', (ev: any) => {
        //     this.selectorActivation(ev);
        // });

        this.element.addEventListener('click', (ev: any) => {
            this.selectorActivation(ev);
        });
    }

    listeners(){
        subscribe(this.storeProperty, (state: any) => {
			this.toggleLang();
		})
    }
    
    selectorActivation(ev: any){
        const targetName: string = ev.target.className;
        if (!targetName.includes('active')){
            Store.dispatch(
                switchLang(targetName.includes('es') ? 'es' : 'gl')
            );
        };
        this.element.classList.toggle('expanded');
    }

    private toggleLang(){
        this.children.forEach(element => element.classList.toggle('active'));
    }

}