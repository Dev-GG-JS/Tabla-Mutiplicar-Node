//Requireds
var colors = require('colors');
const argv = require('./yargs/yargs').argv
//Importaciones
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

// const fs = require('express);
// const fs = required(../fs);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
if(comando  === 'listar'){
  
    listarTabla(base,limite)
}else if( comando === 'crear'){
  crearArchivo(base,limite)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

}else{
  console.log('Comando no reconocido');
}



