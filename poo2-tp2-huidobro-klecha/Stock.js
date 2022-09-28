var stockTotal = (function(){
    var piezasStock = new Array();

    function agregarPieza(...pieza) { //recibe una o varias piezas
        pieza.forEach(element => {
            if (verificarExistencia(element) == -1){ //si no está la agrega
                piezasStock.push(element);
            } else{
                throw "<<< La pieza " + element.nombre + " ya se encuentra en el stock >>>";
            }
        });
    }

    function compraPieza(pieza,cantidad) {
        const posicion = verificarExistencia(pieza);
        if(posicion != -1){ // Si la pieza está en stock
            if(piezasStock[posicion].stock<=0 || piezasStock[posicion].stock < cantidad){
                throw "<<< Se debe reponer stock de " + pieza.nombre + " >>>";
            } else{
                piezasStock[posicion].stock = piezasStock[posicion].stock - cantidad;
            }
        } else{
        throw "<<< La pieza " + pieza.nombre + " no se encuentra en el stock >>>";
        }
    }

    function sumarStock(pieza,cantidad){
        const posicion = verificarExistencia(pieza);
        if(posicion != -1){ // Si la pieza está en stock
            piezasStock[posicion].stock = piezasStock[posicion].stock + cantidad;
        } else{
            throw "<<< La pieza " + pieza.nombre + " no se encuentra en el stock >>>";
        }
    }

    function verificarExistencia(pieza){ //devuelve -1 si no está, la posición si está
        const condicion = (element) => pieza == element;
        const posicion = piezasStock.findIndex(condicion);
        return posicion;
    }

    function consultarStock(pieza){
        const posicion = verificarExistencia(pieza);
        if(posicion != -1){ // Si la pieza está en stock
            console.log("<<< Hay " + piezasStock[posicion].stock + " piezas de " + pieza.nombre + " >>>");
        }
    }

    return {
        agregarPieza: agregarPieza,
        compraPieza: compraPieza,
        sumarStock: sumarStock,
        consultarStock: consultarStock
    }
})();

module.exports = stockTotal;