import EditablesForm from './components/forms/editables-form/editables.component';

new class Cms {
	
	waiting: boolean = false;
	mainElement: HTMLElement = document.getElementById('cms');

	constructor() {
		this.mainListeners();
		this.login();
	}

	mainListeners(){
		document.getElementById("cms-form").addEventListener('submit', (ev) => this.onSubmit(ev));
	}

	onSubmit(event: Event){
		event.preventDefault();
		this.login(new FormData(<HTMLFormElement>document.getElementById("cms-form")));
	}

	async login(form: FormData = new FormData){

		if(this.waiting){
			return;
		}

		this.waiting = true;
		const {data, status}  = await fetch('scripts/pwww.php',{ 
			method: 'POST', 
			body: form, 
			credentials: 'include'
		}).then(response => response.json());
		
		if(status !== "Ok"){
			this.waiting = false;
			return;
		}else{
			this.mainElement.innerHTML = '';
			this.loadEditables(data);
		}
	}

	loadEditables(data: any[]){
		new EditablesForm(data);
	}
}();