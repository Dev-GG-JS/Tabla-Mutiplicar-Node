const opts = {
  base: {
    demand: true,
    description: "Define la base",
    alias: "b",
  },
  limite: {
    demand: false,
    alias: "l",
    default: 10,
    description: "Define el limite de la tabla",
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicación", opts)
  .command(
    "crear",
    "Crea un archivo de texto con la tabla de multiplicación",
    opts
  )
  .help().argv;


  module.exports = {
      argv
  }