import Store from "../store";

class ComponentClass {
	
	element: HTMLElement;
	children: Component[] = [];
	initialStoreValue: any = Store.getState(); 

	constructor(selector: string){
		this.element = document.getElementById(selector);
	}

	render(template: string) : void {

	}
}

interface Component{
	selector: string;
	storeProperty: string;
	renderable: boolean;
	template?: string;
}

export {ComponentClass, Component};