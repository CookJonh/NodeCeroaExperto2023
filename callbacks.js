//setTimeout( function(){
    //console.log('Hola mundo')
//},1500);

/*const getUsuarioByID = ( id ) => {
    const usuario = {
        id,
        nombre: 'Jonh'
    }

    setTimeout( () => {
        console.log(usuario.nombre)
    },1500)    
}

getUsuarioByID(10); */

const getUsuarioByID = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Jonh'
    }

    setTimeout( () => {
        callback(usuario);
    },1500)

}

getUsuarioByID(10, (usuario => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
}))
