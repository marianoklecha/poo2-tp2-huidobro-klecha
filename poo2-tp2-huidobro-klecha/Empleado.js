function Empleado(nombre,apellido,dni) {

    if(!(this instanceof Empleado)){
        return new Empleado(nombre,apellido,dni);
    }

    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;

    this.calcularMonto=()=>{
    }

    this.obtenerNombre=()=>{
        return "Nombre: "+this.nombre+" "+this.apellido;
    }
        
    this.obtenerDni=()=>{
        return "Dni: "+this.dni;
    }
}


module.exports=Empleado;