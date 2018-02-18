import Store from "../store";

class ComponentClass {
	
	element: Element;
	children: any[] = [];
	initialStoreValue: any = Store.getState();
	template?: any; 

	constructor(selector: string){
		this.element = document.querySelector(selector);
	}

	render(data: any) : void {
		this.element.innerHTML = this.template(data);
	}
}

interface Component{
	selector: string;
	storeProperty: string;
	renderable: boolean;
	template?: any;
}

export {ComponentClass, Component};