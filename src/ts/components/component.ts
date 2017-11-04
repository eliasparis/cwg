import Store from "../store";

class ComponentClass {
	
	element: Element;
	children: any[] = [];
	initialStoreValue: any = Store.getState(); 

	constructor(selector: string){
		this.element = document.querySelector(selector);
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