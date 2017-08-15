export default class PageComponent {

	readonly selector : string;
	private element : HTMLElement; 

	constructor( selector : string ){
		this.selector = selector;
		this.element = document.getElementById(selector);
	}
} 