import {Component, ComponentClass} from "../component";
import NavBarLink from "./nav-bar-link/nav-bar-link.component";

export default class NavBar extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "";
	selector: string;
	children: NavBarLink[];

	constructor(selector: string) {
		super(selector);
		this.initializeChildren();
	}

	initializeChildren() {
		this.children = 
			Array
				.from(document.querySelectorAll(`#${this.element.id} a`))
				.map((element : HTMLElement) => new NavBarLink(`#${this.element.id} #${element.id}`));
	}
}