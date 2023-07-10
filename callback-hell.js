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
];


const getEmpleado = (id,callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre

    if(empleado){
        callback(null,empleado);
    }else{
        callback(`El empleado con id ${ id } no existe`);
    }
}

const getSalario = (id,callback) => {
    const salario = salarios.find(e => e.id === id)?.salario;
    //este signo de interrogacion es un NULL CHECK OPERATOR, o sea si la funcion regresa undefined o null se
    //ejecuta lo que sigue. Basicamente pregunta si existe , osea, si el predicado regresa algo no undefined
    //o null ejecuta lo que hay en el programa, si no, se salta. 

    if(salario){
        callback(null,salario);
    }else{
        callback(`El salario con id ${ id } no existe`);
    }
}

const id = 5;

getEmpleado(id,(err,empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id,(err, salario) => {
        if(err){
           console.log('ERROR');
           return console.log(err);
        }
        
        console.log('El salario del empleado  es: ' + salario);
    })    
})