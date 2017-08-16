import {Component, ComponentClass} from "../../component.ts";
import Store from "../../../store.ts";
declare var require: any;
var subscribe = require('redux-subscriber');

export default class NavBarLink extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "pages.currentPageHash";
	selector: string;

	constructor(selector: string) {
		super(selector);
		this.toggleElement();
		this.addEvents();
	}

	toggleElement(){
		if (this.element.id === `nav-bar-link-${Store.getState().pages.currentPageHash}` ){
			this.element.classList.add('active');
		}else{
			this.element.classList.remove('active');
		};
	}

	addEvents(){
		console.log(subscribe)
		subscribe.subscribe(this.storeProperty, (state : any) => {
			console.log(state);
			this.toggleElement();
		})
	}
}