const fs = require('fs');
                      //valor por defecto, si no lo mandan, por default sera 5
const crearArchivo = async (base=5) => {
    try{
        let salida = '';

        for (var i = 1; i < 11; i++) {
            //var base = '5';
            let res = base * i;
            salida += (`${base} por ${i} es ${res}\n`);
        }

        await fs.writeFileSync(`tabla-del-${base}-await.txt`,salida);

        return `tabla-del-${base}.txt`;

        console.log(`tabla del ${base} creada!`);
    }catch(err){
        throw err;
    }
    
    
    
}

//para enviar los valores o las funciones a otra parte del programa hacemos asi:
module.exports = {
    crearArchivo
}