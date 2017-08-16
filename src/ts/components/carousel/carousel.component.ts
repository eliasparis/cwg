import {Component, ComponentClass} from "../component.ts";

export default class NavBar extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "";
	selector: string;

	constructor(selector: string = "carousel") {
		super(selector);
	}
}