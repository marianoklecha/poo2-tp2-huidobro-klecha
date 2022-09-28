const Empleado=require('./Empleado.js');

function Sustituto(nombre, apellido, dni, horas, valor){

    if(!(this instanceof Sustituto)){
        return new Sustituto(nombre, apellido, dni, horas, valor);
    }

    if(valor>0 && horas>0){
        Empleado.call(this,nombre,apellido,dni);
        this.horas=horas;
        this.valor=valor;

        this.calcularMonto=()=>{
            return "Monto: $"+(this.horas*this.valor);
        }
    
        this.obtenerDatos=()=>{
            return "Cargo: Sustituto\n"+this.obtenerNombre()+"\n"+this.obtenerDni();
        }
    
        this.cambiarHoras=(value)=>{
            this.horas=value;
        }

    }else{
        throw " <<< El sueldo por hora de "+nombre+" "+apellido+" debe ser mayor a cero >>>";
    }

}

//Relacionamos los prototipos de Sustituto y Empleado 
Sustituto.prototype = Object.create(Empleado.prototype);
//Asignamos el constructor al prototipo
Sustituto.prototype.constructor = Sustituto;

module.exports=Sustituto;
