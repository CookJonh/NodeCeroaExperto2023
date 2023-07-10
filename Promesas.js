const empleados = [
    {
        id: 1,
        nombre: "Jonh"
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
            : reject(`No existe el salario con id ${id}`);
        
    });
}

const id = 4;

getEmpleado(id)
    .then(empleado => console.log( empleado ))
    .catch(err => console.log(err))
    
getSalario(id)
    .then(salario => console.log( salario ))
    .catch(err => console.log(err))