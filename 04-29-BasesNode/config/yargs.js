const { number } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Listar o no el resultado de la multiplicacion'
    })
    .option('h',{
        alias:'hasta',
        type: number,
        default: 10,
        demandOption: false,
        describe: 'Hasta que numero necesitas la multiplicacion'
    })
    .check((argv,options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;