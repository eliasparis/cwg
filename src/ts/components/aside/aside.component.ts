import {Component, ComponentClass} from "../component.ts";
import Menu from "./menu/menu.component";


export default class Aside extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "";
	selector: string;

	constructor(selector: string = "#aside") {
		super(selector);
		this.initializeChildren();
	}

	initializeChildren() {
		this.children = [
			new Menu()
		]
	}
}