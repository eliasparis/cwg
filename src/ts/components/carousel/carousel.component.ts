import {Component, ComponentClass} from "../component.ts";
import CarouselSlide from './carousel-slide/carousel-slide.component';

export default class Carousel extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "pages.currentPageHash";
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