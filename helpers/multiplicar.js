const fs = require('fs');
const colors = require('colors');
                      //valor por defecto, si no lo mandan, por default sera 5
const crearArchivo = async (base=5,listar,hasta) => {
    try{
        let salida = '';
        let consola = '';
        let tope = hasta;
        
        for (var i = 1; i <= tope; i++) {
            //var base = '5';
            let res = base * i;
            //console.log(`${base} por ${i} es ${res}`);
            salida += (`${base} por ${i} es ${res}\n`);
            consola += (`${base} ${'por'.green} ${i} es ${res}\n`);
        }
        
        if(listar){
            console.log(consola);
        }

        await fs.writeFileSync(`./salida/tabla-del-${base}-await.txt`,salida);
                
        return `tabla-del-${base}.txt`;
    }catch(err){
        throw err;
    }
    
    
    
}

//para enviar los valores o las funciones a otra parte del programa hacemos asi:
module.exports = {
    crearArchivo
}

