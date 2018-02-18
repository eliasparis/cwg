var fs = require("fs");

module.exports = class CustomPro{
	
	constructor(options) {}

	apply(compiler){

		compiler.plugin("after-emit", function(compilation, callback) {

     	const data = 
     		fs
					.readFileSync(
						'./dist/public/app-bundle.js', 
						{encoding: 'utf8'}
					)
					.toString()

			const mutatedData = 
				fs
					.readFileSync('./dist/index.html', {encoding: 'utf8'})
					.toString()
					.replace('//SCRIPT', data)
					.replace('src="public/bundle.js"', '');

			fs
				.writeFileSync(
					'./dist/index.html',
					mutatedData 
				);


			callback();
			
		});

	}
}