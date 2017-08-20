import {Component, ComponentClass} from "../component.ts";
import {subscribe} from "redux-subscriber";

export default class Carousel extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "pages.currentPageHash";
	storePropertyError : string = "pages.errorHash"
	selector: string;

	constructor(selector: string = "carousel") {
		super(selector);
		this.initializeChildren();
	}

	initializeChildren() {
		this.children = 
			Array
				.from(document.querySelectorAll('#carousel .carousel-slide'))
				.map((element : HTMLElement) => new CarouselSlide(element.id));
	}
}