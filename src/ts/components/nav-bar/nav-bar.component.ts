import {Component, ComponentClass} from "../component.ts";
import NavBarLink from "./nav-bar-link/nav-bar-link.component.ts";

export default class NavBar extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "";
	selector: string;

	constructor(selector: string = "nav-bar") {
		super(selector);
		this.initializeChildren();
	}

	initializeChildren() {
		this.children = 
			Array
				.from(document.querySelectorAll('nav #nav-bar a'))
				.map((element : HTMLElement) => new NavBarLink(element.id));
	}
}