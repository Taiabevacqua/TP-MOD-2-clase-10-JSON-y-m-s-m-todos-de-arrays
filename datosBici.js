const fs = require('fs');
const bicisJSON = fs.readFileSync('./bicicletas.json','utf-8');

const leerJSON = () => {
    return JSON.parse(bicisJSON)
}

module.exports = leerJSON
