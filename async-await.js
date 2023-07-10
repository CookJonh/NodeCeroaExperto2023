const empleados = [
    {
        id: 1,
        nombre: "Jonh",
        edad: 39
    },
    {
        id: 2,
        nombre: "Linda"
    },
    {
        id: 3,
        nombre: "Karent"
    }
];

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
]

const getEmpleado = (id) => {
    
    return new Promise((resolve,reject) => {
    
        const empleado = empleados.find( e => e.id === id )?.nombre;

        //Cambiamos por un ternario
        /*if(empleado){
            resolve(empleado);
        }else{
            reject(`No existe el empleado con id ${id}`)
        }*/

        ( empleado )
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
        
    });

    /*if(empleado){
        callback(null,empleado)
    }else{
        callback(`Empleado con id ${ id } no existe`);
    }*/
}

const getSalario = (id) => {
    return new Promise((resolve,reject) => {
    
        const salario = salarios.find( e => e.id === id )?.salario;

        ( salario )
            ? resolve(salario)
            : reject(`No existe el salario con id ${id}`);//(2)  corresponde al return
        
    });
}

const getInfoUsuario = async(id) => {
    try {
        //return 'Hola mundo';
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        //return empleado;
        return `El salario del empleado ${empleado} es ${salario}`
    } catch (error) {
        //return error;//esto manda esto (2) es de ls funcion getSalario
        throw error; //este manda a este (3) es de la funcion getInfoUsuario
    }
        
}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))//Lanza este error (3) para disparar este catch tenemos que cambiar a throw
                                   // osea que llamariamos el reject de la funcion asincrona directamente
