// include node fs module
const fs = require('fs');

const log = (texto) => {
    fs.appendFileSync('arquivo.txt', `${texto}\n`);
}

module.exports = {
    log
};



