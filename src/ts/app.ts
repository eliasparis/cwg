////// Styles import fix
declare var require: any;
let styles = require('./../css/main.css');
////////////////////////

declare const CWGpages : string[];
import Store from './store';
import {subscribe} from "redux-subscriber";
import PageComponent from './pages/page-component';
import NavBar from './components/nav-bar/nav-bar.component';
import ErrorPage from './components/error-page/error-page.component';
import Carousel from './components/carousel/carousel.component';
import Aside from './components/aside/aside.component';
import RegisterForm from './components/forms/register-form/register-form.component';
import { changeHash, errorHash, validHash } from './actions/page-actions';


new class App {
	
	constructor() {
		this.pages();
		this.components();
		this.mainListeners();
	}

	pages() : void{
		CWGpages.forEach(page => new PageComponent(page));
		new ErrorPage();
	}

	components() : void{
		new NavBar('#nav-bar');
		new Carousel();
		new Aside();
		new RegisterForm();
	}

	mainListeners(){
		
		window.onhashchange = () => {

			let hash : string = document.location.hash.replace('#', '');

			if ( !CWGpages.includes(hash)) {
				Store.dispatch( errorHash() );
			}else{
				Store.dispatch( validHash() )
			}

			Store.dispatch( changeHash( hash ) );
		};

		subscribe('lang.currentLang', (state: any) => {
			document.body.classList.toggle('es');
			document.body.classList.toggle('gl');
		});

		if(document.location.hash === ''){ 
			document.location.hash = '#intro';
		} 
	}
}();