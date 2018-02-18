import {Component, ComponentClass} from "../component";
import Menu from "./menu/menu.component";
import LangSelector from "./lang-selector/lang.component";
import StatusTag from "./status-tag/status-tag.component";

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
			new Menu(),
			new LangSelector(),
			new StatusTag('.status-tag.mobile')
		]
	}
}