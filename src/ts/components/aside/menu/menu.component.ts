import {Component, ComponentClass} from "../../component";
import NavBar from '../../nav-bar/nav-bar.component';

export default class Menu extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "";
	selector: string;

	constructor(selector: string = "#menu") {
		super(selector);
		this.initializeChildren();
		this.eventBinding();
	}

	initializeChildren(){
		this.children.push(
			new NavBar('#menu-nav-bar')
		)
	}

	eventBinding(){
		this.element.addEventListener('touchend', (ev) => {
			document.body.classList.toggle('menu-open');
		});
	}
}