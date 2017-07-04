import fs from "fs";

const index = fs.readFileSync('./src/index.html', {encoding: 'UTF-8'});
fs.writeFileSync('./dist/index.html', index);