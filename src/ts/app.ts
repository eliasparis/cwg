var styles = require('./../css/main.css');
import Store from './store';
import {subscribe} from "redux-subscriber";
import PageComponent from './pages/page-component';
import NavBar from './components/nav-bar/nav-bar.component';
import StatusTag from './components/aside/status-tag/status-tag.component';
import EventsList from './components/events/events.component';
import ErrorPage from './components/error-page/error-page.component';
import Carousel from './components/carousel/carousel.component';
import Aside from './components/aside/aside.component';
import RegisterForm from './components/forms/register-form/register-form.component';
import { changeHash, errorHash, validHash } from './actions/page-actions';
import { getInitialState } from './actions/event-actions';


new class App {
	
	constructor() {
		this.pages();
		this.components();
		this.mainListeners();
		this.fetchInitialState();
	}

	pages() : void{
		CWGpages.forEach(page => new PageComponent(page));
		new ErrorPage();
	}

	components() : void{
		new NavBar('#nav-bar');
		new EventsList('#event-cards');
		new StatusTag('.status-tag.desktop');
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
			document.querySelector('#main-content').scrollTo(0, 0);
		};

		subscribe('lang.currentLang', (state: any) => {
			document.body.classList.toggle('es');
			document.body.classList.toggle('gl');
		});

		if(document.location.hash === ''){ 
			document.location.hash = '#intro';
		} 
	}

	fetchInitialState(){
		Store.dispatch( getInitialState() );
	}
}();