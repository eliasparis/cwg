////// Styles import fix
declare var require: any;
let styles = require('./../css/main.css');
////////////////////////

import Store from './store.ts';
import PageComponent from './pages/page-component';
import NavBar from './components/nav-bar/nav-bar.component';
import { changeHash } from './actions/page-actions';


new class App {
	
	constructor() {
		this.pages();
		this.components();
		this.mainListeners();
	}

	pages() : void{
		new PageComponent('AAAAAAA');
	}

	components() : void{
		new NavBar();
	}

	mainListeners(){
		window.onhashchange = () => {
			Store
				.dispatch(
					changeHash(document.location.hash.replace('#', ''))
				)
		};
	}
}();