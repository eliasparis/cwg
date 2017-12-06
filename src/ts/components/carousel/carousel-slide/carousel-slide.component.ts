import {Component, ComponentClass} from "../../component";
import {subscribe} from "redux-subscriber";

export default class CarouselSlide extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "pages.currentPageHash";
	storePropertyError : string = "pages.errorHash";
	selector: string;
	hash: string;
	element: HTMLElement;
	private loaded: boolean = false;
	private img: HTMLImageElement = new Image();
	readonly imgIds: string[] = ['1x', '2x', '3x', '4x'];
	readonly imgSizes: string[] = ['400w', '750w', '1300w', '1900w'];

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

		if (!this.loaded && this.element.id === `c-slide-${hash}`) {
			this.hash = hash;
			this.lazyLoadPicture();
		}

		this.element.classList.toggle('current', this.element.id === `c-slide-${hash}`);
	}

	addEvents(){
		subscribe(this.storeProperty, (state : any) => {
			this.toggleElement(
				state.pages.currentPageHash,
				state.pages.errorHash
			);
		});

		this.img.addEventListener('load', () =>{
			this.element.style.backgroundImage = `url(${this.img.currentSrc})` ;
			this.element.classList.add('loaded');
			this.loaded = true;
		});
	}

	lazyLoadPicture(){
		this.img.srcset = this.getSrcset;
	}

	get getSrcset(): string{
		return this.imgSizes.reduce((prev, now, i) => prev + `tmp/images/slides/slide-${this.hash}-${this.imgIds[i]}.png ${now}, `, '');
	}
}