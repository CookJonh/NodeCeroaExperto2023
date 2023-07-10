//const fs = require('fs');
//aqui traemos la funcion exportada en multiplicar.js
const {crearArchivo} = require('./helpers/multiplicar');
//const argv = require('yargs').argv;
const argv = require('./04-29-BasesNode/config/yargs');


//llevado a 04-29-basesNode/config, clase 4.36 --
/*const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .check((argv,options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv; --*/

//console.log(process.argv);
console.log(argv);

//console.log('base: yargs', argv.base);

//console.log(process.argv);



//const base = 8;
//const [,,arg3 = 'base=5'] = process.argv;
//const [,base = 5] = arg3.split('=');

//console.log(arg3);
//console.log(base);

//crearArchivo(base)
crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));


//nos llevamos todo esto a multiplicar.js
/*let salida = '';

for (var i = 1; i < 11; i++) {
    var base = '5';
    let res = base * i;
    salida += (`${base} por ${i} es ${res}\n`);
}

//Este fue el primer ejemplo video 4.30, lo cambiamos por writeFileSync
/*fs.writeFile(`tabla-del-${base}.txt`,salida), (err) => {
    if(err) throw err;

    console.log(`tabla del ${base} creada!`);
};

//este no maneja el error como el writeFile, tendriamos que poner un try catch
fs.writeFileSync(`tabla-del-${base}.txt`,salida);

console.log(`tabla del ${base} creada!`);*/
