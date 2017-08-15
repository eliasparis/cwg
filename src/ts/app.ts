////// Styles import fix
declare var require: any;
let styles = require('./../css/main.css');
////////////////////////

import PageComponent from './pages/page-component';
import NavBar from './components/nav-bar/nav-bar.component';

new class App {
	
	constructor() {
		this.pages();
		this.components();
	}

	pages() : void{
		new PageComponent('AAAAAAA');
	}

	components() : void{
		var a = new NavBar();
		console.log(a);
		//new Carousel();
	}
}();