const PersonalVenta = require('./PersonalVenta.js');

function Vendedor(nombre, apellido, dni,sueldo,comision,ventas){
    
    if(sueldo>0){
        PersonalVenta.call(this,nombre, apellido, dni,comision,ventas);
        this.sueldo=sueldo;
        this.calcularMonto=()=>{
            return "Monto: $"+parseInt(this.sueldo+(this.comision*this.ventas));
        }

        this.obtenerDatos=()=>{
            return "Cargo: Vendedor\n"+this.obtenerDatosVenta()+"\nSueldo: $"+this.sueldo;
        }

    }else{
        throw " <<< Los datos ingresados de "+nombre+" "+apellido+" son invalidos, revisar >>>";
    }
}

//Relacionamos los prototipos de Vendedor y PersonalVenta 
Vendedor.prototype = Object.create(PersonalVenta.prototype);
//Asignamos el constructor al prototipo
Vendedor.prototype.constructor = Vendedor;

module.exports=Vendedor;