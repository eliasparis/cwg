import fs from "fs";
import ejs from "ejs";
import process from "process";

const isDev = process.argv.includes("dev", 2);

function builder(){

	const pages = fs.readdirSync('./src/pages', {encoding: 'utf8'});
	const includes = pages.map( (file) => `<%- include('pages/${file}'); %>`).join('');
	const index = 
		fs
			.readFileSync('./src/index.html', {encoding: 'utf8'})
			.toString()
			.replace('###', includes);
			//.map( (file) => 
			//file
				//.replace(/\./g, '')
				//.replace('ejs', '')
				//.replace(/[0-9]/g, '')
		//)	
	fs
		.writeFileSync(
			'./dist/index.html', 
			ejs
				.render(
					index, {filename: './src/index.html'}
				)
		);

	process.emitWarning('Templates compiled');
};

if ( isDev ) {
	fs.watch(
		'./src/pages', 
		(evtype) => builder() 
	)
}

builder();