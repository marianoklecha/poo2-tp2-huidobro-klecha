const Pieza = require('./Pieza.js');
const PersonalVenta = require('./PersonalVenta.js');
const stockTotal = require('./Stock.js');
const personalLocal = require('./Personal.js');

var cont = 0;  // para determinar el id de venta

function Venta(personalDeVenta,piezas){

    if(!(this instanceof Venta)){
        return new Venta(PersonalVenta,piezas);
    }

    var monto = 0;
    cont++;
    this.id = cont;
    this.personalDeVenta = personalDeVenta;
    
    piezas.forEach(element=> stockTotal.compraPieza(element[0],element[1])); // recorre las piezas compradas, en cada pieza elimina del stck laspiezas compradas
    this.piezas=piezas;// es un array=[[Pieza1, cantidad],[Pieza2, cantidad],...]

    this.piezas.forEach( element => monto+= (element[0].valor)*(element[1]));
    personalLocal.sumarVenta(personalDeVenta,monto);

    this.calcularMonto=()=>{
        return monto;
    };

    this.datosFactura=()=>{
        console.log("\n<< Id Factura: " + this.id + ">>\nVendedor: " + this.personalDeVenta.obtenerNombre());
        this.piezas.forEach(element=>console.log("-------------------------\nPieza: " +
        element[0].nombre + "\nCantidad: " + element[1] + " ---- $" + element[0].valor + " x unidad"));
        console.log("\n### Total a pagar: $" + this.calcularMonto());
    };

}

module.exports=Venta;