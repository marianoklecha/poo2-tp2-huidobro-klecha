const Empleado = require('./Empleado.js');

function Administrativo(nombre, apellido, dni,sueldo){

    if(!(this instanceof Administrativo)){
        return new Administrativo(nombre, apellido, dni,sueldo);
    }

    if(sueldo>0){
        Empleado.call(this,nombre,apellido,dni); //call llama al constructor del que hereda
        var sueldo = sueldo; //clausura para no acceder directo
        
        this.obtenerDatos = ()=> {
            return "Cargo: Administrador\n" + this.obtenerNombre() + "\n" + this.obtenerDni();
        };
        this.calcularMonto = ()=> {
            return "Monto: $" + this.sueldo;
        };

    } else{
        throw "<<< El sueldo de " + nombre + " " + apellido + " debe ser mayor a cero >>>";
    }
    
}

//Relacionamos los prototipos de Administrativo y Empleado 
Administrativo.prototype = Object.create(Empleado.prototype);
//Asignamos el constructor al prototipo
Administrativo.prototype.constructor = Administrativo;

module.exports = Administrativo;