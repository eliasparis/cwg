import Store from "../store";
import {subscribe} from "redux-subscriber";

export default class PageComponent {

	readonly selector : string;
	private element : HTMLElement; 
	initialState : any = Store.getState();

	constructor( selector : string ){
		this.selector = selector;
		this.element = document.getElementById(selector);
		this.toggleActive(this.initialState);
		this.listeners();
	}

	listeners(){
		subscribe("pages.currentPageHash", (state : any) => {
			this.toggleActive(state)
		})
	}

	toggleActive(state : any){
		if(this.element.id === state.pages.currentPageHash){
			this.activatePage();
		}else{
			this.hidePage();
		}; 
	}

	private activatePage(){
		this.element.classList.add('active');
	}

	private hidePage(){
		this.element.classList.remove('active')
	}
} 