////// Styles import fix
declare var require: any;
let styles = require('./../css/main.css');
////////////////////////

declare const CWGpages : string[];
import Store from './store.ts';
import PageComponent from './pages/page-component';
import NavBar from './components/nav-bar/nav-bar.component';
import { changeHash, errorHash } from './actions/page-actions';


new class App {
	
	constructor() {
		this.pages();
		this.components();
		this.mainListeners();
	}

	pages() : void{
		CWGpages.forEach(page => new PageComponent(page));
	}

	components() : void{
		new NavBar();
	}

	mainListeners(){
		
		window.onhashchange = () => {

			let hash : string = document.location.hash.replace('#', '');

			if (hash === 'error') {
				return false;
			}

			if ( !CWGpages.includes(hash)) {
				Store.dispatch( errorHash() );
				document.location.hash = '#error';
				return false;
			}

			Store.dispatch( changeHash( hash ) );
		};

		if(document.location.hash === ''){ 
			document.location.hash = '#intro';
		} 
	}
}();