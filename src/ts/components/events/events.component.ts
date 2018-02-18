import {Component, ComponentClass} from "../component";
import {subscribe} from "redux-subscriber";
import * as templateString from "./eventS.template.ejs";

export default class EventList extends ComponentClass implements Component {
	
	renderable: boolean = true;
	storeProperty: string = "events";
    selector: string;
    template: any = templateString;

	constructor(selector: string) {
        super(selector);
        this.listeners();
    }
    
    listeners(){
        subscribe(this.storeProperty, (state: any) => {
            this.onUpdateEvents(state.events);
		});
    }

    onUpdateEvents(data: any){
        this.render(data);
    }

}