const fs = require("fs");
var colors = require("colors");
//Importaar base

let tabla = "";

const listarTabla = (base, limite) => {
  console.log("===============".green);
  console.log("table de ${base}".green);
  console.log("================".green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    //Generar la tabla
    if (isNaN(base)) {
      reject(`El valor introducido ${base} no es un número`.red);
      return;
    }

    for (let i = 1; i <= limite; i++) {
      tabla += `${base} * ${i} = ${base * i}\n`;
    }

    //Generar el archivo
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, tabla, (err) => {
      if (err) reject(err);
      else {
        resolve('Archivo Creado:'.green + colors.white(`tablas/tabla-${base}.txt`));
      }
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
