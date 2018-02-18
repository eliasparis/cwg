import {Component, ComponentClass} from "../../component";
import {subscribe} from "redux-subscriber";

export default class StatusTag extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "events";
	selector: string;

	constructor(selector: string) {
        super(selector);
        this.listeners();
    }

    listeners(){
        subscribe(this.storeProperty, (state: any) => {
            this.onEventsLoad(state.events);
		});
    }

    onEventsLoad(events: any){
        if(events.error){
            this.errorFallback();
        }else{
            this.parseEvents(events.data);
        }
    }

    parseEvents(data: any[]){
        const alert: Number = data.reduce((alert: Number, eventData: any) => {
            return parseInt(eventData.alert) > alert ? parseInt(eventData.alert) : alert;
        }, 1);
        this.activateAlert(alert);
    }

    activateAlert(alert: Number){
        const info = alert > 2 ? 'Parece que algo se está a preparar. Ollo ao parte!' : 'Evento convocado. Esta fin de semana navegamos!!!';
        this.element.classList.add('ready', `alert-${alert}`);
        this.element.querySelector('.tag-number').innerHTML = alert.toString();
        this.element.querySelector('.status-exta-info').innerHTML = info;
    }

    errorFallback(){
        this.element.classList.add('error');
    }
}