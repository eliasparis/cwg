import PageComponent from './pages/page-component';

class App {
	
	constructor() {
		this.pages();
		this.components();
	}

	pages() : void{
		new PageComponent('AAAAAAA');
	}

	components() : void{
		//new NavBar();
		//new Carousel();
	}
}

new App();

