import {Component, ComponentClass} from "./../component";
import {subscribe} from "redux-subscriber";

export default class ErrorPage extends ComponentClass implements Component {
	
	renderable: boolean = true;
	storeProperty: string = "pages.errorHash";
	selector: string;

	constructor(selector: string = "#error-page") {
		super(selector);
		this.toggleErrorPage(this.initialStoreValue.pages.errorHash);
		this.listeners();
	}

	listeners(){
		subscribe(this.storeProperty, (state: any) => {
			this.toggleErrorPage(state.pages.errorHash);
		})
	}

	private toggleErrorPage(error: boolean){
		if (error) {
			this.activeErrorPage();
			return false;
		}

		this.hideErrorPage();
	}

	private activeErrorPage(){
		this.element.classList.remove('hidden');
	}

	private hideErrorPage(){
		this.element.classList.add('hidden');
	}

}