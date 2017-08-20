var fs = require("fs");

module.exports = class CustomPro{
	
	constructor(options) {}

	apply(compiler){

		compiler.plugin("after-emit", function(compilation, callback) {
     	
     	const data = 
     		fs
					.readFileSync(
						compilation.assets[compiler.options.output.filename].existsAt, 
						{encoding: 'utf8'}
					)
					.toString()

			const mutatedData = 
				fs
					.readFileSync('./dist/index.html', {encoding: 'utf8'})
					.toString()
					.replace('//SCRIPT', data)
					.replace('src="tmp/bundle.js"', '');

			fs
				.writeFileSync(
					'./dist/index.html',
					mutatedData 
				);


			callback();
			
		});

	}
}