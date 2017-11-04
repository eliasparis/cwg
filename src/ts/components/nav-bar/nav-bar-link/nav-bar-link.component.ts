import {Component, ComponentClass} from "../../component";
import Store from "../../../store";
import {subscribe} from "redux-subscriber";

export default class NavBarLink extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "pages.currentPageHash";
	selector: string;

	constructor(selector: string) {
		super(selector);
		this.toggleElement(this.initialStoreValue.pages.currentPageHash);
		this.addEvents();
	}

	toggleElement(hash : string){
		if (this.element.id === `nav-bar-link-${hash}` ){
			window.scrollTo(0,0);
			this.element.classList.add('active');
		}else{
			this.element.classList.remove('active');
		}
	}

	addEvents(){
		subscribe(this.storeProperty, (state : any) => {
			this.toggleElement(state.pages.currentPageHash);
		})
	}
}