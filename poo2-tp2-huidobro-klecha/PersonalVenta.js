const Empleado = require('./Empleado.js');

function PersonalVenta(nombre, apellido, dni, comision, ventas){

    if(!(this instanceof PersonalVenta)){
        return new PersonalVenta(nombre, apellido, dni, comision, ventas)
    }

    if(comision>0 && ventas>0 ){
        Empleado.call(this,nombre,apellido,dni);
        this.comision=comision;
        this.ventas=ventas;

        this.calcularMonto=()=>{
            return "Monto: $"+(this.comision*this.ventas);
        }
    
        this.obtenerDatosVenta=()=>{
            return this.obtenerNombre()+"\n"+this.obtenerDni()+"\n"+"Comision: "+this.comision+"\nVentas: $"+this.ventas;
        }
    
        this.obtenerDatos=()=>{
            return "Cargo: Personal de ventas\n"+this.obtenerDatosVenta();
        }
    }else{
        throw " <<< Los datos ingresados de "+nombre+" "+apellido+" son invalidos, revisar >>>";
        
    }
}

//Relacionamos los prototipos de PersonalVenta y Empleado 
PersonalVenta.prototype = Object.create(Empleado.prototype);
//Asignamos el constructor al prototipo
PersonalVenta.prototype.constructor = PersonalVenta;

module.exports=PersonalVenta;
