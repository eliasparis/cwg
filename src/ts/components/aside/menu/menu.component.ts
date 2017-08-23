import {Component, ComponentClass} from "../../component.ts";

export default class Menu extends ComponentClass implements Component {
	
	renderable: boolean = false;
	storeProperty: string = "";
	selector: string;

	constructor(selector: string = "menu") {
		super(selector);
	}
}