import {Component, ComponentClass} from "../../component.ts";
import Store from "../../../store.ts";
import {subscribe} from "redux-subscriber";

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

		let state : any = Store.getState();

		if (this.element.id === `nav-bar-link-${state.pages.currentPageHash}` ){
			this.element.classList.add('active');
		}else{
			this.element.classList.remove('active');
		};
	}

	addEvents(){
		subscribe(this.storeProperty, (state : any) => {
			this.toggleElement();
		})
	}
}