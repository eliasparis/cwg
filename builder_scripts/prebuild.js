import fs from "fs";
import ejs from "ejs";
import process from "process";

const isDev = process.argv.includes("dev");

function builder(){

	const pages = fs.readdirSync('./src/pages', {encoding: 'utf8'});
	const includes = pages.map( (file) => `<%- include('pages/${file}'); %>`).join('');
	const pageNames = pages.map( (file) => 
		file
			.replace(/\./g, '')
			.replace('ejs', '')
			.replace(/[0-9]/g, '')
	);	

	const index = 
		fs
			.readFileSync('./src/index.html', {encoding: 'utf8'})
			.toString()
			.replace('###', includes);
			
	fs
		.writeFileSync(
			'./dist/index.html', 
			ejs
				.render(
					index, 
					{
						filename: './src/index.html',
						pages: pageNames
					}
				)
		);

	process.emitWarning('Templates compiled');
};

if ( isDev ) {
	fs.watch(
		'./src/pages', 
		(evtype) => builder() 
	)
	fs.watch(
		'./src/ts/components', 
		(evtype) => builder() 
	)
}

builder();