try{
    const Administrativo = require('./Administrativo.js');
    const Sustituto = require('./Sustituto.js');
    const PersonalVenta = require('./PersonalVenta.js');
    const VendedorAntiguo = require('./VendedorAntiguo.js');
    const Venta = require('./Venta.js');
    const Pieza = require('./Pieza.js');
    const stockTotal = require('./Stock.js');
    const personalLocal = require('./Personal.js');
    
    //Creamos el personal
    const Pepe = new Administrativo("Pepe","Sanchez",39399,330);
    var Dood = new PersonalVenta('Dood','Dddd',84983,0.40,1000);
    var Carl= new VendedorAntiguo('Carl','Cccc',328928,10,0.3,300);
    personalLocal.agregarPersonal(Pepe,Dood,Carl);
    
    //Creamos las piezas
    var tornillo = new Pieza("Tornillo",30,500);
    var tuerca = new Pieza("Tuerca",50,5858);
    var clavo = new Pieza("Clavo",20,555);
    stockTotal.agregarPieza(tornillo,tuerca,clavo);

    //Compramos
    var venta1 = new Venta(Dood,[[tornillo,110],[tuerca,50],[clavo,2]]);
    var venta2=new Venta(Dood,[[tuerca,50]]);
    
    //Mostramos los datos de facturas
    venta1.datosFactura();
    venta2.datosFactura();
    
}catch(err){
    console.log(err);
}
