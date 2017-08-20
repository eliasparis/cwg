import {Component, ComponentClass} from "../../component.ts";
import {subscribe} from "redux-subscriber";

export default class CarouselSlide extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "pages.currentPageHash";
	storePropertyError : string = "pages.errorHash";
	selector: string;
	loaded: boolean = false;

	constructor(selector: string) {
		super(selector);
		this.toggleElement(
			this.initialStoreValue.pages.currentPageHash,
			this.initialStoreValue.pages.errorHash
		);
		this.addEvents();
	}

	toggleElement(hash : string, error : boolean){		
		if (error) {
			return false;
		}

		if (!this.loaded) {
			this.lazyLoadPicture();
		}

		if (this.element.id === `c-slide-${hash}` ){
			this.element.classList.add('active');
			return false;
		}
		
		this.element.classList.remove('active');
	}

	addEvents(){
		subscribe(this.storeProperty, (state : any) => {
			this.toggleElement(
				state.pages.currentPageHash,
				state.pages.errorHash
			);
		})
	}

	lazyLoadPicture(){
		//code
		this.loaded = true;
	}
}