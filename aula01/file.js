// include node fs module
const fs = require('fs');
 
fs.appendFileSync('arquivo.txt', '\ndata to append');

console.log(fs.readFileSync('arquivo.txt', 'utf8'));

//fs.unlinkSync('arquivo.txt');

