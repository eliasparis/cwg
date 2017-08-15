class ComponentClass {
	
	element: HTMLElement;
	children: Component[] = [];

	constructor(selector: string){
		this.element = document.getElementById(selector);
	}

	render() : void {
		console.log('render')
	}
}

interface Component{
	selector: string;
	storeProperty: string;
	renderable: boolean;
	template?: string;
}

export {ComponentClass, Component};